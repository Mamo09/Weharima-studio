import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

// Cache and CDN Constants
const CACHE_DURATION = 7 * 24 * 60 * 60; // 7 days in seconds
const STALE_WHILE_REVALIDATE = 60 * 60; // 1 hour
const MAX_AGE = 60 * 60 * 24; // 24 hours
const BATCH_SIZE = 20;
const IMAGE_BREAKPOINTS = [320, 640, 768, 1024, 1280, 1536];

// Add interface for Cloudinary resource
interface CloudinaryResource {
  public_id: string;
  secure_url: string;
  format: string;
  tags?: string[];
  created_at: string;
  width?: number;
  height?: number;
  placeholder?: string;
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
          .max_results(BATCH_SIZE)
          .execute() as CloudinarySearchResponse;

        const resourcesWithDetails = await Promise.all(
          result.resources.map(async (resource) => {
            try {
              const details = await cloudinary.api.resource(resource.public_id, {
                colors: true,
                image_metadata: true,
              });
              
              // CDN Optimized URL
              const optimizedUrl = cloudinary.url(resource.public_id, {
                quality: 'auto:best',
                fetch_format: 'auto',
                secure: true,
                dpr: 'auto',
                flags: ['progressive', 'force_strip'],
                responsive: true,
                width: 'auto',
                crop: 'scale',
                responsive_breakpoints: {
                  create_derived: true,
                  bytes_step: 20000,
                  min_width: 200,
                  max_width: 1600,
                  breakpoints: IMAGE_BREAKPOINTS,
                },
              });

              // Placeholder for progressive loading
              const placeholderUrl = cloudinary.url(resource.public_id, {
                transformation: [
                  { width: 10, crop: 'scale' },
                  { quality: 'auto:eco' },
                  { effect: 'blur:1000' },
                  { fetch_format: 'auto' },
                ],
              });

              return {
                ...resource,
                width: details.width,
                height: details.height,
                secure_url: optimizedUrl,
                placeholder: placeholderUrl,
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

    if (!result || !Array.isArray(result.resources)) {
      throw new Error('Invalid response from Cloudinary');
    }

    const tags = [...new Set(
      result.resources
        .flatMap((resource: CloudinaryResource) => resource.tags || [])
        .filter(Boolean)
    )];

    // Create Response with Cache Headers
    return new NextResponse(
      JSON.stringify({
        resources: result.resources,
        tags: tags
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': `public, max-age=${MAX_AGE}, s-maxage=${CACHE_DURATION}, stale-while-revalidate=${STALE_WHILE_REVALIDATE}`,
          'CDN-Cache-Control': `max-age=${CACHE_DURATION}`,
          'Surrogate-Control': `max-age=${CACHE_DURATION}`,
          'Vary': 'Accept-Encoding',
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'DENY',
          'X-XSS-Protection': '1; mode=block',
        }
      }
    );

  } catch (error) {
    console.error('Cloudinary API Error:', error);
    
    return new NextResponse(
      JSON.stringify({ 
        message: error instanceof Error ? error.message : 'Unknown error',
        code: error instanceof Error ? error.name : 'UNKNOWN_ERROR',
      }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
      }
    );
  }
}

export const config = {
  api: {
    bodyParser: false,
    responseLimit: false,
  },
};