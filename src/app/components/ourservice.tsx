
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
    <div className="bg-[#fbfaf4] py-20 px-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary ">Our Services</h2>
          <p className="mt-4 text-lg">
            Discover our range of services tailored to bring your vision to life.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white  rounded-lg shadow-lg p-8 flex flex-col items-center text-center"
            >
              <Image
                src={service.icon}
                alt={service.title}
                height={100}
                width={100}
                className="w-16 h-16 mb-6"
              />
              <h3 className="text-2xl font-bold text-[#a39066]">{service.title}</h3>
              <p className="mt-2 text-black">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;