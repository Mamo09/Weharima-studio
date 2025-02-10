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
    <section className="bg-black py-24">
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
              className="group relative bg-zinc-950/50 rounded-sm overflow-hidden"
            >
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-all duration-700 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <div>
                  <h3 className="text-[#a28f65] font-light text-lg tracking-wide">
                    {member.name}
                  </h3>
                  <p className="text-zinc-400 text-xs tracking-widest uppercase mt-1">
                    {member.title}
                  </p>
                </div>
                
                <div className="flex gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {member.facebook && (
                    <a 
                      href={member.facebook}
                      className="text-zinc-400 hover:text-[#a28f65] transition-colors duration-300"
                      aria-label="Facebook"
                    >
                      <FaFacebookF size={14} />
                    </a>
                  )}
                  {member.twitter && (
                    <a 
                      href={member.twitter}
                      className="text-zinc-400 hover:text-[#a28f65] transition-colors duration-300"
                      aria-label="Twitter"
                    >
                      <FaTwitter size={14} />
                    </a>
                  )}
                  {member.instagram && (
                    <a 
                      href={member.instagram}
                      className="text-zinc-400 hover:text-[#a28f65] transition-colors duration-300"
                      aria-label="Instagram"
                    >
                      <FaInstagram size={14} />
                    </a>
                  )}
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
