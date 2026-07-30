import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';
import Groq from 'groq-sdk';
import { ratelimit } from '@/lib/ratelimit';

export async function POST(request: Request) {
  if (ratelimit) {
    const ip = request.headers.get("x-forwarded-for") ?? "127.0.0.1";
    const { success } = await ratelimit.limit(`ratelimit_chat_${ip}`);
    if (!success) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
  
  const { messages, systemInstruction, tools } = body;

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      console.error('Missing GEMINI_API_KEY on Vercel');
      return NextResponse.json({ error: 'AI is not configured correctly on the server.' }, { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey });

    // Send to Gemini
    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: messages,
      config: {
        systemInstruction,
        tools,
      },
    });

    // Extract getter properties because NextResponse.json won't serialize class getters automatically
    return NextResponse.json({
      text: response.text,
      functionCalls: response.functionCalls,
      raw: response
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('Primary Gemini 3.6 API Error in Vercel:', errorMessage);

    // Fallback to Groq
    try {
      const groqApiKey = process.env.GROQ_API_KEY;
      if (!groqApiKey) {
        return NextResponse.json({ error: "Fallback AI configuration is missing." }, { status: 500 });
      }

      
      const groqMessages = [
        { role: "system", content: systemInstruction },
        ...messages.map((msg: { role: string; parts: { text: string }[] }) => ({
          role: msg.role === 'user' ? 'user' : 'assistant',
          content: msg.parts[0].text
        }))
      ];

      // Convert Gemini tools to OpenAI format for Groq
      const groqTools = tools && tools.length > 0 ? [
        {
          type: "function",
          function: tools[0].functionDeclarations[0]
        },
        {
          type: "function",
          function: tools[0].functionDeclarations[1]
        }
      ] : undefined;

      const groq = new Groq({ apiKey: groqApiKey });
      const groqData = await groq.chat.completions.create({
        model: "openai/gpt-oss-20b",
        messages: groqMessages,
        tools: groqTools as any,
        tool_choice: "auto"
      });

      return NextResponse.json({ groqFallback: true, data: groqData });
    } catch (fallbackError: unknown) {
      const fallbackErrorMessage = fallbackError instanceof Error ? fallbackError.message : String(fallbackError);
      console.error("Fallback AI Service Error:", fallbackErrorMessage);
      return NextResponse.json({ error: "Our AI service is temporarily experiencing high demand." }, { status: 503 });
    }
  }
}
