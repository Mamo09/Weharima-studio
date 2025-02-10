import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
  try {
    // Validate environment variables
    if (!process.env.CLOUDINARY_API_KEY) {
      throw new Error('Missing Cloudinary configuration');
    }

    const result = await cloudinary.search
      .expression('folder:Weha-Portfolio/*')
      .sort_by('created_at', 'desc')
      .with_field('tags')
      .max_results(100)
      .execute();

    // Validate response
    if (!result || !Array.isArray(result.resources)) {
      throw new Error('Invalid response from Cloudinary');
    }

    // Extract unique tags
    const tags = [...new Set(
      result.resources
        .flatMap(resource => resource.tags || [])
        .filter(Boolean)
    )];

    return NextResponse.json({
      resources: result.resources,
      tags: tags
    });

  } catch (error) {
    console.error('Cloudinary API Error:', error);
    
    return NextResponse.json(
      { message: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}