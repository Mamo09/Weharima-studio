/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react';
import Link from 'next/link';
import { IoArrowForward } from 'react-icons/io5';

const BentoGrid: React.FC = () => {
  const projects = [
    {
      title: "Modern Living Space",
      description: "Interior Design",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2940",
      large: true
    },
    {
      title: "Urban Architecture",
      description: "Architecture",
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2940"
    },
    {
      title: "Minimalist Design",
      description: "Interior Design",
      image: "https://images.unsplash.com/photo-1504675099198-7023dd85f5a3?q=80&w=2940"
    },
    {
      title: "Contemporary Living",
      description: "Architecture",
      image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=2940"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="px-4 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#a28f65] text-3xl sm:text-4xl font-light tracking-wide mb-4">
            Featured Projects
          </h2>
          <div className="w-12 h-px bg-[#a28f65]/30 mx-auto mb-6" />
          <p className="text-zinc-600 text-sm sm:text-base max-w-2xl mx-auto">
            Explore our collection of carefully crafted architectural and interior design projects
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-lg ${
                project.large ? 'md:col-span-4 md:row-span-2 h-[600px]' : 'md:col-span-2 h-[300px]'
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                  <span className="block text-[#a28f65] text-sm font-light mb-2">
                    {project.description}
                  </span>
                  <h3 className="text-white text-xl sm:text-2xl font-light tracking-wide mb-4">
                    {project.title}
                  </h3>
                  <div className="w-8 h-px bg-[#a28f65] transform origin-left transition-all duration-300 group-hover:w-12" />
                </div>
              </div>
            </div>
          ))}

          {/* See More Card */}
          <Link 
            href="/portfolio" 
            className="md:col-span-2 group relative flex flex-col items-center justify-center h-[300px] 
              bg-zinc-100 rounded-lg border border-zinc-200 hover:border-[#a28f65]/30 
              transition-all duration-300"
          >
            <div className="text-center">
              <span className="block text-[#a28f65] text-xl font-light mb-3">
                Discover More
              </span>
              <div className="flex items-center justify-center">
                <span className="text-zinc-400 text-sm mr-2">View All Projects</span>
                <IoArrowForward className="w-4 h-4 text-[#a28f65] transform transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;

