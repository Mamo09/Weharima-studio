
'use client'
import React from 'react';
import Image from 'next/image';

interface IconBlockProps {
  icons: string[];
  title: string;
  description: string;
}

const IconBlock: React.FC<IconBlockProps> = ({ icons, title, description }) => (
  <div className="flex gap-x-5 sm:gap-x-8">
    <div className="shrink-0 mt-2 space-y-2">
      {icons.map((icon, index) => (
        <Image
          key={index}
          src={icon}
          width={100}
          height={100}
          alt={`Icon ${index + 1}`}
          className="w-6 h-6 object-contain"
        />
      ))}
    </div>
    <div className="grow">
      <h3 className="text-base sm:text-lg font-semibold text-gray-800">
        {title}
      </h3>
      <p className="mt-1 text-gray-600">
        {description}
      </p>
    </div>
  </div>
);


const AboutUs : React.FC = () => (
  <>
    <div className="px-8 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="container mx-auto">
          <div className="grid gap-12">
            <div>
              <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl">
                About Us
              </h2>
              <p className="mt-3 text-gray-800 text-justify">
              Weharima Studio is an architectural consulting firm that specializes in balancing creative design with technical expertise to create innovative and functional spaces for clients.
              </p>
              <p className=" text-gray-800 text-justify">
              At Weharima Studio, our vision is to empower clients to bring their vision to life, while balancing creativity with technical expertise to create innovative and functional spaces. Our mission is to deliver expert architectural consulting services that support our clients&apos; vision, while maintaining the highest standards of technical excellence and professionalism. We are committed to making a positive impact on our clients&apos; lives by creating buildings and spaces that are not only aesthetically pleasing but also functional, sustainable, and technically sound.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap'>
        <div className=" px-4 sm:px-6 lg:px-8 lg:py-14 sm:w-6/12 container">
          <div className="max-w-2xl mx-auto">
            <div className="grid gap-12 text-justify">
              <div>
                <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl">
                  Our Vision
                </h2>
              </div>

              <div className="space-y-6 lg:space-y-10">
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
          </div> 
        </div>
        <div className=" px-4 sm:px-6 lg:px-8 lg:py-14 sm:w-6/12 container">
        <div className="max-w-2xl mx-auto">
          <div className="grid gap-12 text-justify">
            <div>
              <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl">
                Our Mission
              </h2>
            </div>

            <div className="space-y-6 lg:space-y-10">
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
    </div>
  </>
);
export default AboutUs
