'use client'
import { useEffect, useState } from 'react';

const Shimmer = () => (
  <div className="animate-pulse">
    <div className="bg-gray-200 h-64 rounded-lg"></div>
  </div>
);

interface CloudinaryImage {
  public_id: string;
  secure_url: string;
  format: string;
  width: number;
  height: number;
  tags?: string[];
}

interface CloudinaryResponse {
  resources: CloudinaryImage[];
  tags: string[];
}

const ImageGallery = () => {
  const [images, setImages] = useState<CloudinaryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState('all');
  const [availableTags, setAvailableTags] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/cloudinary');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: CloudinaryResponse = await response.json();
        console.log('Fetched Data:', data); // Debug log

        if (!data.resources || !Array.isArray(data.resources)) {
          throw new Error('Invalid data format');
        }

        setImages(data.resources);
        setAvailableTags(data.tags || []);
        setError(null);
      } catch (error) {
        console.error('Error fetching images:', error);
        setError(error instanceof Error ? error.message : 'Failed to load images');
        setImages([]);
        setAvailableTags([]);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const filteredImages = activeTag === 'all' 
    ? images 
    : images.filter(image => image.tags?.includes(activeTag));

  if (error) {
    return (
      <div className="text-center py-8 text-red-500">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Image Gallery</h1>
      
      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        <button
          onClick={() => setActiveTag('all')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeTag === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          All
        </button>
        {availableTags.map(tag => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTag === tag
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {tag.charAt(0).toUpperCase() + tag.slice(1)}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading ? (
          Array(8).fill(null).map((_, i) => <Shimmer key={i} />)
        ) : filteredImages.length > 0 ? (
          filteredImages.map((image) => (
            <div
              key={image.public_id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={image.secure_url}
                alt={image.public_id}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-8 text-gray-500">
            No images found
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;