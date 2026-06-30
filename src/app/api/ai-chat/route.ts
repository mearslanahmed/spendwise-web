import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

export async function POST(request: Request) {
  let body;
  try {
    body = await request.json();
  } catch (e) {
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
      model: 'gemini-3.5-flash',
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
  } catch (error: any) {
    console.error('Primary Gemini 3.5 API Error in Vercel:', error.message || error);

    // Fallback to Groq
    try {
      const groqApiKey = process.env.GROQ_API_KEY;
      if (!groqApiKey) {
         return NextResponse.json({ error: "Fallback AI configuration is missing." }, { status: 500 });
      }

      
      const groqMessages = [
        { role: "system", content: systemInstruction },
        ...messages.map((msg: any) => ({
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

      const groqResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${groqApiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "meta-llama/llama-4-scout-17b-16e-instruct",
          messages: groqMessages,
          tools: groqTools,
          tool_choice: "auto"
        })
      });

      const groqData = await groqResponse.json();
      
      if (!groqResponse.ok || groqData.error) {
        throw new Error(groqData.error?.message || "Groq API Error");
      }

      return NextResponse.json({ groqFallback: true, data: groqData });
    } catch (fallbackError: any) {
      console.error("Fallback AI Service Error:", fallbackError.message || fallbackError);
      return NextResponse.json({ error: "Our AI service is temporarily experiencing high demand." }, { status: 503 });
    }
  }
}
