'use client'
import { useEffect, useState, WheelEvent, MouseEvent, TouchEvent } from 'react';
import { IoClose } from "react-icons/io5";
import { IoMdAdd, IoMdRemove } from "react-icons/io";

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
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedImage(image)}
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

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative w-auto h-auto max-w-[90vw] max-h-[90vh] overflow-hidden modal-container"
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
                transition: isDragging ? 'none' : 'transform 0.2s ease-out',
                transformOrigin: 'center center'
              }}
            >
              <img
                src={selectedImage.secure_url}
                alt={selectedImage.public_id}
                className="rounded-lg object-contain max-w-full max-h-[90vh] w-auto h-auto select-none"
                draggable={false}
              />
            </div>

            {/* Zoom Controls */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              <button
                className="bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-all duration-300 ease-in-out transform hover:scale-110 disabled:opacity-50"
                onClick={(e) => {
                  e.stopPropagation();
                  handleZoomOut(e);
                }}
                disabled={zoom <= MIN_ZOOM}
              >
                <IoMdRemove className="w-6 h-6" />
              </button>
              <button
                className="bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-all duration-300 ease-in-out transform hover:scale-110 disabled:opacity-50"
                onClick={(e) => {
                  e.stopPropagation();
                  handleZoomIn(e);
                }}
                disabled={zoom >= MAX_ZOOM}
              >
                <IoMdAdd className="w-6 h-6" />
              </button>
            </div>

            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-300 ease-in-out transform hover:scale-110"
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
  );
};

export default ImageGallery;