import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const folder = body.folder || 'spendwise/uploads';

    // Cloudinary requires an API Secret to generate the signature
    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    if (!apiSecret) {
      console.error('Missing CLOUDINARY_API_SECRET in environment variables.');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const timestamp = Math.round(new Date().getTime() / 1000);

    const signature = cloudinary.utils.api_sign_request(
      {
        timestamp: timestamp,
        folder: folder
      },
      apiSecret
    );

    return NextResponse.json({ timestamp, signature });
  } catch (error) {
    console.error('Signature Generation Error:', error);
    return NextResponse.json({ error: 'Failed to generate signature' }, { status: 500 });
  }
}
