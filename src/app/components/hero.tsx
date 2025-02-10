'use client'
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="flex flex-wrap items-stretch min-h-screen">
        {/* Content Section */}
        <div className="w-full sm:w-8/12 relative">
          <div className="h-full flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-20">
            {/* Logo Area */}
            <div className="absolute top-8 left-6 sm:left-12 lg:left-16">
              <div className="text-2xl sm:text-3xl font-light tracking-wide text-[#a28f65]">
                Weharima<span className="text-zinc-800">.</span>
              </div>
            </div>

            {/* Main Content */}
            <div className="mt-20 sm:mt-0">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-wide text-zinc-800 mb-6">
                Discover Architectural{' '}
                <span className="text-[#a28f65]">Design</span>{' '}
                Inspiration for Your Space
              </h1>
              
              <div className="w-20 h-px bg-[#a28f65] mb-8 transition-all duration-300 hover:w-32" />
              
              <p className="text-zinc-600 text-base sm:text-lg leading-relaxed mb-12 max-w-2xl">
                Join us in creating stunning and functional spaces! We invite you to explore 
                innovative and captivating architectural design ideas. Let&apos;s bring your 
                vision to life with professional touches and limitless creativity.
              </p>

              <Link 
                href="/contact"
                className="inline-block px-8 py-3 bg-[#a28f65] text-white text-sm tracking-wider 
                  hover:bg-[#8f7c57] transition-all duration-300 group border border-transparent
                  hover:shadow-lg"
              >
                Contact Now
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-2">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full sm:w-4/12 relative min-h-[400px] sm:min-h-screen">
          <Image
            src="/assets/img/heroimg.png"
            alt="Architectural Design"
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50/80 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;