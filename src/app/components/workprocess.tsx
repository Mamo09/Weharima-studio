/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { cards } from './data/workProcessData';

const Architecture = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <section className="bg-gradient-to-b from-[#fbfaf4] to-white py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative max-w-7xl">
        {/* Work Process Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[#a28f65] text-3xl sm:text-4xl font-light tracking-wide mb-4">
            Work Process
          </h2>
          <div className="w-12 h-px bg-[#a28f65]/30 mx-auto mb-6" />
          <p className="text-zinc-600 text-sm sm:text-base max-w-2xl mx-auto">
            Our systematic approach to bringing your architectural vision to life, combining creativity with technical expertise.
          </p>
        </div>

        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-white/80 backdrop-blur-sm rounded-lg border border-[#a28f65]/10 p-6 sm:p-8 lg:p-10 w-full shadow-sm"
          >
            {/* Header Section */}
            <div className="max-w-7xl mx-auto mb-10">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[#a28f65] font-light text-2xl sm:text-3xl lg:text-4xl tracking-wide mb-4"
              >
                {cards[currentIndex].title}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-zinc-600 text-sm sm:text-base leading-relaxed"
              >
                {cards[currentIndex].description}
              </motion.p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Image Container */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="relative aspect-[16/9] lg:aspect-auto lg:h-[600px] group"
              >
                <img
                  className="w-full h-full object-cover rounded-lg border border-[#a28f65]/10 transition-transform duration-700 group-hover:scale-105"
                  src={cards[currentIndex].image}
                  alt={cards[currentIndex].title}
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              {/* Steps Container */}
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 sm:p-8 border border-[#a28f65]/10 shadow-sm">
                <h3 className="text-[#a28f65] text-sm font-light tracking-wider uppercase mb-8">Process</h3>
                <ul className="relative space-y-8">
                  {cards[currentIndex].steps.map((step, index) => (
                    <motion.li
                      key={step.number}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="relative flex gap-6"
                    >
                      <div className="relative flex items-start">
                        {index < cards[currentIndex].steps.length - 1 && (
                          <div className="absolute left-[15px] top-[30px] w-[2px] h-[calc(100%+32px)] bg-gradient-to-b from-[#a28f65]/30 to-transparent" />
                        )}
                        <div className="relative z-10">
                          <span className="flex justify-center items-center h-8 w-8 rounded-full border border-[#a28f65]/30 text-[#a28f65] font-light text-sm bg-white">
                            {step.number}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-sm lg:text-base text-zinc-600 leading-relaxed">
                          <span className="text-[#a28f65] font-normal">{step.title}</span>
                          <span className="mx-2 text-zinc-400">—</span>
                          {step.description}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-6 mt-10">
          <button
            onClick={prevSlide}
            className="bg-white/80 text-[#a28f65] p-2 rounded-sm hover:bg-[#a28f65]/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#a28f65]/50"
            aria-label="Previous slide"
          >
            <IoIosArrowBack size={20} />
          </button>

          <div className="flex items-center gap-2">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-6 h-1 bg-[#a28f65]'
                    : 'w-2 h-1 bg-[#a28f65]/30 hover:bg-[#a28f65]/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentIndex ? 'true' : 'false'}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="bg-white/80 text-[#a28f65] p-2 rounded-sm hover:bg-[#a28f65]/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#a28f65]/50"
            aria-label="Next slide"
          >
            <IoIosArrowForward size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
