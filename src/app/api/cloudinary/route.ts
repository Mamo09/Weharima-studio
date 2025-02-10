import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

// Type for error handling
interface CloudinaryError {
  message: string;
  http_code?: number;
}

export async function GET() {
  // Validate environment variables
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    console.error('Missing Cloudinary credentials:', {
      cloudName: !!cloudName,
      apiKey: !!apiKey,
      apiSecret: !!apiSecret,
    });
    return NextResponse.json(
      { error: 'Cloudinary configuration is incomplete' },
      { status: 500 }
    );
  }

  try {
    // Configure cloudinary with validated credentials
    cloudinary.config({
      cloud_name: cloudName,
      api_key: apiKey,
      api_secret: apiSecret,
    });

    // Fetch all images with tags
    const result = await cloudinary.search
      .expression('folder:Weha-Portfolio/*')
      .with_field('tags')
      .sort_by('created_at', 'desc')
      .max_results(30)
      .execute();

    // Get available tags
    const tags = await cloudinary.api.tags();

    return NextResponse.json({
      resources: result.resources,
      tags: tags.tags
    });

  } catch (error) {
    const cloudinaryError = error as CloudinaryError;
    console.error('Cloudinary Error:', {
      message: cloudinaryError.message,
      code: cloudinaryError.http_code
    });
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch images from Cloudinary',
        details: cloudinaryError.message 
      },
      { status: cloudinaryError.http_code || 500 }
    );
  }
}