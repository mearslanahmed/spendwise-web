import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { folder = 'spendwise_uploads' } = body;

    const apiSecret = process.env.CLOUDINARY_API_SECRET;
    
    if (!apiSecret) {
      console.error('Missing CLOUDINARY_API_SECRET');
      return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 });
    }

    const timestamp = Math.round(new Date().getTime() / 1000);

    const signature = cloudinary.utils.api_sign_request(
      {
        timestamp,
        folder,
      },
      apiSecret
    );

    return NextResponse.json({
      signature,
      timestamp,
      folder
    });
  } catch (error) {
    console.error('Error generating signature:', error);
    return NextResponse.json({ error: 'Failed to generate signature' }, { status: 500 });
  }
}
