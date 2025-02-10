import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

// Add interface for Cloudinary resource
interface CloudinaryResource {
  public_id: string;
  secure_url: string;
  format: string;
  tags?: string[];
  created_at: string;
}

interface CloudinarySearchResponse {
  resources: CloudinaryResource[];
  total_count: number;
}

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

    const fetchWithRetry = async (retries = 3) => {
      try {
        const result = await cloudinary.search
          .expression('folder:Weha-Portfolio/*')
          .sort_by('created_at', 'desc')
          .with_field('tags')
          .with_field('context')
          .max_results(100)
          .execute() as CloudinarySearchResponse;

        // Get additional details for each resource
        const resourcesWithDetails = await Promise.all(
          result.resources.map(async (resource) => {
            try {
              const details = await cloudinary.api.resource(resource.public_id, {
                colors: true,
                image_metadata: true,
              });
              
              return {
                ...resource,
                width: details.width,
                height: details.height,
                secure_url: cloudinary.url(resource.public_id, {
                  transformation: [
                    { quality: 'auto:good', fetch_format: 'auto' },
                    { dpr: 'auto' },
                    { flags: 'progressive' }
                  ],
                }),
                placeholder: cloudinary.url(resource.public_id, {
                  transformation: [
                    { width: 20, crop: 'scale' },
                    { quality: 'auto:eco' },
                    { effect: 'blur:1000' }
                  ],
                }),
              };
            } catch (error) {
              console.error(`Error fetching details for ${resource.public_id}:`, error);
              return resource;
            }
          })
        );

        return {
          ...result,
          resources: resourcesWithDetails,
        };
      } catch (error) {
        if (retries > 0) {
          await new Promise(resolve => setTimeout(resolve, 1000));
          return fetchWithRetry(retries - 1);
        }
        throw error;
      }
    };

    const result = await fetchWithRetry();

    // Validate response
    if (!result || !Array.isArray(result.resources)) {
      throw new Error('Invalid response from Cloudinary');
    }

    // Extract unique tags with proper typing
    const tags = [...new Set(
      result.resources
        .flatMap((resource: CloudinaryResource) => resource.tags || [])
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