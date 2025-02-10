'use client'

import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

interface TeamMember {
  name: string;
  title: string;
  image: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Mehdi Mohammadi',
    title: 'Web developer',
    image: 'https://images.pexels.com/photos/1587014/pexels-photo-1587014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    facebook: '#',
    twitter: '#',
    instagram: '#',
  },
  {
    name: 'Yahya R. Makarim',
    title: 'president & CEO',
    image: 'https://images.pexels.com/photos/2897883/pexels-photo-2897883.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    facebook: '#',
    twitter: '#',
    instagram: '#',
  },
  {
    name: 'Ahmad Sultani',
    title: 'Web designer',
    image: 'https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    facebook: '#',
    twitter: '#',
    instagram: '#',
  },
];

const OurTeam: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-[#fbfaf4] to-white py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl text-[#a28f65] font-light mb-2 tracking-wider">
            Our Team
          </h2>
          <div className="w-12 h-px bg-[#a28f65]/30 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div 
              key={member.name} 
              className="group relative bg-white rounded-sm overflow-hidden shadow-sm border border-[#a28f65]/10 
                hover:shadow-lg hover:border-[#a28f65]/30 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover will-change-transform transition-all duration-500 ease-out 
                    filter grayscale group-hover:grayscale-0 group-hover:scale-110 transform-gpu"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                  opacity-60 group-hover:opacity-40 transition-all duration-500 ease-out" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 transform translate-y-16 
                group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
                <div className="relative p-6 bg-white/95 backdrop-blur-md border-t border-[#a28f65]/10 
                  shadow-lg transform group-hover:scale-100 transition-all duration-500">
                  <div className="transform translate-y-1 group-hover:translate-y-0 
                    opacity-100 transition-all duration-500 ease-out">
                    <h3 className="text-[#a28f65] font-light text-lg tracking-wide">
                      {member.name}
                    </h3>
                    <p className="text-zinc-600 text-xs tracking-widest uppercase mt-1">
                      {member.title}
                    </p>
                  </div>
                  
                  <div className="flex gap-4 mt-4 opacity-0 transform translate-y-2
                    group-hover:opacity-100 group-hover:translate-y-0 
                    transition-all duration-500 ease-out delay-100">
                    {member.facebook && (
                      <a 
                        href={member.facebook}
                        className="text-zinc-500 hover:text-[#a28f65] transition-all duration-300 
                          hover:scale-110 transform-gpu hover:-translate-y-1"
                        aria-label="Facebook"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebookF size={14} className="transform hover:rotate-12 transition-transform duration-300" />
                      </a>
                    )}
                    {member.twitter && (
                      <a 
                        href={member.twitter}
                        className="text-zinc-500 hover:text-[#a28f65] transition-all duration-300 
                          hover:scale-110 transform-gpu hover:-translate-y-1"
                        aria-label="Twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTwitter size={14} className="transform hover:rotate-12 transition-transform duration-300" />
                      </a>
                    )}
                    {member.instagram && (
                      <a 
                        href={member.instagram}
                        className="text-zinc-500 hover:text-[#a28f65] transition-all duration-300 
                          hover:scale-110 transform-gpu hover:-translate-y-1"
                        aria-label="Instagram"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram size={14} className="transform hover:rotate-12 transition-transform duration-300" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
