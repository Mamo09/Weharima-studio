'use client'

import React from 'react';
import Image from 'next/image';

const OurServices: React.FC = () => {
  const services = [
    {
      title: 'Interior Design',
      description:
        'Transform your living spaces with our expert interior design services. We create beautiful, functional, and personalized interiors that reflect your style.',
      icon: '/assets/img/1_icon.png',
    },
    {
      title: 'Architecture',
      description:
        'Elevate your architectural projects with our skilled architecture services. We design stunning and sustainable buildings that meet your vision and needs.',
      icon: '/assets/img/2_icon.png',
    },
    {
      title: 'Visualization',
      description:
        'Visualize your design concepts with our advanced visualization services. We create realistic 3D renderings that bring your ideas to life.',
      icon: '/assets/img/3_icon.png',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#fbfaf4] to-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-[#a28f65] text-3xl sm:text-4xl font-light tracking-wide mb-4">
            Our Services
          </h2>
          <div className="w-12 h-px bg-[#a28f65]/30 mx-auto mb-6" />
          <p className="text-zinc-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Discover our range of services tailored to bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white border border-[#a28f65]/10 rounded-lg p-8 
                transition-all duration-300 hover:border-[#a28f65]/30 hover:shadow-lg 
                hover:shadow-[#a28f65]/5"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative w-16 h-16 mb-6">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 64px, 64px"
                    className="object-contain opacity-80 transition-all duration-300 
                      group-hover:opacity-100 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-[#a28f65] text-xl font-light tracking-wide mb-3">
                  {service.title}
                </h3>
                <div className="w-8 h-px bg-[#a28f65]/30 mx-auto mb-4 transition-all 
                  duration-300 group-hover:w-12" />
                <p className="text-zinc-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;