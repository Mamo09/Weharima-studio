'use client'
import React from 'react';
import Image from 'next/image';

interface IconBlockProps {
  icons: string[];
  title: string;
  description: string;
}

const IconBlock: React.FC<IconBlockProps> = ({ icons, title, description }) => (
  <div className="group p-4 hover:bg-[#a28f65]/5 transition-all duration-300 rounded-lg -mx-4">
    <div className="flex gap-x-6 items-start">
      <div className="shrink-0 mt-1">
        {icons.map((icon, index) => (
          <Image
            key={index}
            src={icon}
            width={24}
            height={24}
            alt={`Icon ${index + 1}`}
            className="w-6 h-6 object-contain opacity-70 group-hover:opacity-100 transition-all duration-300"
          />
        ))}
      </div>
      <div className="space-y-2">
        <h3 className="text-[#a28f65] text-base font-normal tracking-wide group-hover:text-[#8f7c57] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const AboutUs: React.FC = () => (
  <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
    {/* About Section */}
    <div className="max-w-7xl mx-auto mb-24">
      <h2 className="text-3xl text-[#a28f65] font-light mb-8 tracking-wide text-center">
        About Us
      </h2>
      <div className="space-y-6 text-base text-gray-500 leading-relaxed text-justify">
        <p>
          Weharima Studio is an architectural consulting firm that specializes in balancing creative design with technical expertise to create innovative and functional spaces for clients.
        </p>
        <p className="text-sm">
          At Weharima Studio, our vision is to empower clients to bring their vision to life, while balancing creativity with technical expertise to create innovative and functional spaces. Our mission is to deliver expert architectural consulting services that support our clients&apos; vision, while maintaining the highest standards of technical excellence and professionalism. We are committed to making a positive impact on our clients&apos; lives by creating buildings and spaces that are not only aesthetically pleasing but also functional, sustainable, and technically sound.
        </p>
      </div>
    </div>

    {/* Vision & Mission Grid */}
    <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
      {/* Vision Section */}
      <div className="relative">
        <h2 className="text-2xl text-[#a28f65] font-light mb-12 tracking-wide">
          Our Vision
        </h2>
        <div className="space-y-6">
          <IconBlock
            icons={['/assets/img/1_icon.png']}
            title="Empowering Clients Through Creativity and Expertise"
            description="Empowering clients to bring their vision to life, while balancing creativity with technical expertise to create innovative and functional spaces."
          />
          <IconBlock
            icons={['/assets/img/2_icon.png']}
            title="Catalysts for Ideal Spaces"
            description="Envisioning a future where every client has the freedom to create their ideal space, and we are the catalysts that make it happen through our technical expertise and creative vision."
          />
          <IconBlock
            icons={['/assets/img/3_icon.png']}
            title="Revolutionizing Design and Construction"
            description="To revolutionize the way buildings are designed and constructed, by giving clients the freedom to imagine and create, while ensuring that their vision is technically sound and sustainable."
          />
        </div>
      </div>

      {/* Mission Section */}
      <div className="relative">
        <h2 className="text-2xl text-[#a28f65] font-light mb-12 tracking-wide">
          Our Mission
        </h2>
        <div className="space-y-6">
          <IconBlock
            icons={['/assets/img/1_icon.png']}
            title="Expert Architectural Consulting"
            description="Our mission is to provide expert architectural consulting services that empower clients to make informed decisions about their projects, while ensuring that their vision is technically feasible and sustainable."
          />
          <IconBlock
            icons={['/assets/img/2_icon.png']}
            title="Innovative and Functional Design Solutions"
            description="To deliver innovative and functional design solutions that meet our clients' needs and exceed their expectations, while maintaining the highest standards of technical excellence and professionalism."
          />
          <IconBlock
            icons={['/assets/img/3_icon.png']}
            title="Supporting Client Freedom in Creation"
            description="We are committed to providing our clients with the freedom to create their ideal space, by offering a range of technical services that support their vision, from conceptual design to construction administration."
          />
          <IconBlock
            icons={['/assets/img/4_icon.png']}
            title="Creating Positive Impact Through Design"
            description="Our mission is to make a positive impact on our clients' lives by creating buildings and spaces that are not only aesthetically pleasing but also functional, sustainable, and technically sound."
          />
          <IconBlock
            icons={['/assets/img/5_icon.png']}
            title="Building Long-Term Client Relationships"
            description="To build long-term relationships with our clients, by providing them with personalized service, expert technical guidance, and creative solutions that help them achieve their goals and make their dreams a reality."
          />
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;
