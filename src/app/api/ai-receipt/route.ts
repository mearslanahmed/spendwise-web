import { NextResponse } from 'next/server';
import { GoogleGenAI, Type } from '@google/genai';
import Groq from 'groq-sdk';
import { ratelimit } from '@/lib/ratelimit';

export async function POST(request: Request) {
  if (ratelimit) {
    const ip = request.headers.get("x-forwarded-for") ?? "127.0.0.1";
    const { success } = await ratelimit.limit(`ratelimit_receipt_${ip}`);
    if (!success) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }
  }

  try {
    const body = await request.json();
    const { prompt, base64Image } = body;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'AI is not configured correctly on the server.' }, { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: [
        prompt,
        {
          inlineData: {
            data: base64Image,
            mimeType: 'image/jpeg',
          }
        }
      ],
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            isReceipt: { type: Type.BOOLEAN },
            amount: { type: Type.NUMBER },
            category: { type: Type.STRING },
            description: { type: Type.STRING },
          },
          required: ["isReceipt"],
        },
      }
    });

    const responseText = response.text;
    if (responseText) {
      return NextResponse.json(JSON.parse(responseText as string));
    }
    return NextResponse.json({ error: "Failed to parse receipt" }, { status: 500 });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : error;
    console.error("Primary Gemini 3.5 API Error in Vercel:", errorMessage);
    
    // Fallback to Groq
    try {
      const groqApiKey = process.env.GROQ_API_KEY;
      if (!groqApiKey) {
         return NextResponse.json({ error: "Fallback AI configuration is missing." }, { status: 500 });
      }

      const { prompt, base64Image } = await request.clone().json();

      const groq = new Groq({ apiKey: groqApiKey });
      const groqData = await groq.chat.completions.create({
        model: "openai/gpt-oss-20b",
        messages: [
          {
            role: "user",
            content: [
              { type: "text", text: prompt },
              { type: "image_url", image_url: { url: `data:image/jpeg;base64,${base64Image}` } }
            ] as any
          }
        ],
        response_format: { type: "json_object" }
      });

      if (groqData.choices && groqData.choices[0]?.message?.content) {
        return NextResponse.json(JSON.parse(groqData.choices[0].message.content));
      }
      return NextResponse.json({ error: "Failed to parse Groq response" }, { status: 500 });
    } catch (groqError: unknown) {
      const fallbackErrorMessage = groqError instanceof Error ? groqError.message : groqError;
      console.error("Fallback Error:", fallbackErrorMessage);
      return NextResponse.json({ error: "The AI is currently experiencing high demand. Please enter the details manually for now." }, { status: 503 });
    }
  }
}
