/* eslint-disable @next/next/no-img-element */
'use client'
import { useEffect, useState, WheelEvent, MouseEvent, TouchEvent } from 'react';
import { IoClose } from "react-icons/io5";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { APIError } from '@/utils/errorHandler';

const Shimmer = () => (
  <div className="animate-pulse">
    <div className="bg-[#a28f65]/20 h-64 rounded-lg"></div>
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
  const [selectedImage, setSelectedImage] = useState<CloudinaryImage | null>(null);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const MIN_ZOOM = 0.5;
  const MAX_ZOOM = 3;
  const ZOOM_STEP = 0.2;

  const calculateZoomPosition = (newZoom: number, clientX: number, clientY: number, currentZoom: number) => {
    if (!selectedImage) return { x: 0, y: 0 };
    
    const container = document.querySelector('.modal-container');
    if (!container) return position;

    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate position relative to image center
    const mouseX = clientX - centerX;
    const mouseY = clientY - centerY;

    // Adjust position based on zoom change
    const scale = newZoom / currentZoom;
    const newX = position.x + (mouseX - mouseX * scale);
    const newY = position.y + (mouseY - mouseY * scale);

    return { x: newX, y: newY };
  };

  const handleZoomIn = (e?: MouseEvent<HTMLButtonElement>) => {
    const newZoom = Math.min(zoom + ZOOM_STEP, MAX_ZOOM);
    if (e) {
      const newPosition = calculateZoomPosition(newZoom, e.clientX, e.clientY, zoom);
      setPosition(newPosition);
    }
    setZoom(newZoom);
  };

  const handleZoomOut = (e?: MouseEvent<HTMLButtonElement>) => {
    const newZoom = Math.max(zoom - ZOOM_STEP, MIN_ZOOM);
    if (e) {
      const newPosition = calculateZoomPosition(newZoom, e.clientX, e.clientY, zoom);
      setPosition(newPosition);
    }
    setZoom(newZoom);
  };

  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    if (selectedImage) {
      e.preventDefault();
      e.stopPropagation();
      
      if (e.deltaY < 0) {
        const newZoom = Math.min(zoom + ZOOM_STEP, MAX_ZOOM);
        const newPosition = calculateZoomPosition(newZoom, e.clientX, e.clientY, zoom);
        setPosition(newPosition);
        setZoom(newZoom);
      } else {
        const newZoom = Math.max(zoom - ZOOM_STEP, MIN_ZOOM);
        const newPosition = calculateZoomPosition(newZoom, e.clientX, e.clientY, zoom);
        setPosition(newPosition);
        setZoom(newZoom);
      }
    }
  };

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    setIsDragging(true);
    setDragStart({
      x: touch.clientX - position.x,
      y: touch.clientY - position.y
    });
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (isDragging) {
      const touch = e.touches[0];
      setPosition({
        x: touch.clientX - dragStart.x,
        y: touch.clientY - dragStart.y
      });
    }
  };

  // Reset position and zoom when image changes
  useEffect(() => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  }, [selectedImage]);

  // Add error handling to your fetch calls
  const fetchImages = async () => {
    try {
      const response = await fetch('/api/cloudinary');
      if (!response.ok) {
        throw new Error(`Failed to load images (${response.status})`);
      }
      return await response.json();
    } catch {
      throw new Error('Failed to load portfolio images');
    }
  };

  useEffect(() => {
    const loadImages = async () => {
      try {
        setLoading(true);
        const data: CloudinaryResponse = await fetchImages();

        // Validate data structure
        if (!data || !Array.isArray(data.resources)) {
          throw new Error('Invalid data format received from server');
        }

        // Filter out any invalid images
        const validImages = data.resources.filter(img => 
          img.secure_url && img.public_id && img.format
        );

        setImages(validImages);
        setAvailableTags(data.tags?.filter(Boolean) || []);
        setError(null);

      } catch (error) {
        console.error('Error fetching images:', error);
        if (error instanceof APIError) {
          setError(`Failed to load images: ${error.message}`);
        } else {
          setError('Failed to load images. Please try again later.');
        }
        setImages([]);
        setAvailableTags([]);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  // Add error retry functionality
  const handleRetry = () => {
    setError(null);
    setLoading(true);
    // This will trigger the useEffect hook to fetch images again
  };

  const filteredImages = activeTag === 'all' 
    ? images 
    : images.filter(image => image.tags?.includes(activeTag));

  // Close modal when clicking escape
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      // Store current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [selectedImage]);

  // Error UI with retry button
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm border border-[#a28f65]/10">
            <p className="text-red-500 mb-4">{error}</p>
            <button
              onClick={handleRetry}
              className="px-4 py-2 bg-[#a28f65]/10 text-[#a28f65] hover:bg-[#a28f65]/20 
                transition-all duration-300"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl mb-12 text-center text-[#a28f65] font-light tracking-wide">
          Portfolio Gallery
        </h1>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTag('all')}
            className={`px-4 py-1.5 text-sm transition-all duration-300 border ${
              activeTag === 'all'
                ? 'bg-[#a28f65] border-[#a28f65] text-white'
                : 'border-[#a28f65]/30 text-[#a28f65] hover:border-[#a28f65]'
            }`}
          >
            All
          </button>
          {availableTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-1.5 text-sm transition-all duration-300 border ${
                activeTag === tag
                  ? 'bg-[#a28f65] border-[#a28f65] text-white'
                  : 'border-[#a28f65]/30 text-[#a28f65] hover:border-[#a28f65]'
              }`}
            >
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {loading ? (
            Array(8).fill(null).map((_, i) => <Shimmer key={i} />)
          ) : filteredImages.length > 0 ? (
            filteredImages.map((image) => (
              <div
                key={image.public_id}
                className="group relative aspect-[4/3] overflow-hidden cursor-pointer bg-white rounded-sm shadow-sm"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.secure_url}
                  alt={image.public_id}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-8 text-[#a28f65]/60">
              No images found
            </div>
          )}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-white/98 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="relative w-auto h-auto max-w-[95vw] max-h-[95vh] overflow-hidden modal-container"
              onWheel={handleWheel}
            >
              <div
                className={`transform-gpu ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleMouseUp}
                onClick={(e) => e.stopPropagation()}
                style={{
                  transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                  transition: isDragging ? 'none' : 'transform 0.3s ease-out',
                  transformOrigin: 'center center'
                }}
              >
                <img
                  src={selectedImage.secure_url}
                  alt={selectedImage.public_id}
                  className="max-w-full max-h-[95vh] w-auto h-auto select-none"
                  draggable={false}
                />
              </div>

              {/* Zoom Controls */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
                <button
                  className="bg-[#a28f65]/10 text-[#a28f65] w-9 h-9 flex items-center justify-center 
                    transition-all duration-300 disabled:opacity-30 hover:bg-[#a28f65]/20"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleZoomOut(e);
                  }}
                  disabled={zoom <= MIN_ZOOM}
                >
                  <IoMdRemove className="w-5 h-5" />
                </button>
                <button
                  className="bg-[#a28f65]/10 text-[#a28f65] w-9 h-9 flex items-center justify-center 
                    transition-all duration-300 disabled:opacity-30 hover:bg-[#a28f65]/20"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleZoomIn(e);
                  }}
                  disabled={zoom >= MAX_ZOOM}
                >
                  <IoMdAdd className="w-5 h-5" />
                </button>
              </div>

              {/* Close Button */}
              <button
                className="absolute top-6 right-6 text-zinc-400 hover:text-[#a28f65] transition-colors duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <IoClose className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;