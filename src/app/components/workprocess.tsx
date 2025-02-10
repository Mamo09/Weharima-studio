/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { cards } from './data/workProcessData';
//import type { ArchitectureStep } from './data/workProcessData';

const Architecture = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <section className="bg-gradient-to-b from-black to-zinc-900 py-20">
      <div className="container mx-auto px-8 sm:px-6 lg:px-8 relative max-w-max">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-6 sm:p-8 lg:p-10 w-full"
          >
            {/* Header Section */}
            <div className="max-w-7xl mx-auto mb-8 sm:mb-10">
              <h2 className="text-white font-semibold text-xl sm:text-2xl lg:text-4xl lg:leading-tight">
                {cards[currentIndex].title}
              </h2>
              <p className="mt-3 text-gray-400 text-sm sm:text-base">
                {cards[currentIndex].description}
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Image Container */}
              <div className="relative aspect-[16/9] lg:aspect-auto lg:h-[600px]">
                <img
                  className="w-full h-full object-cover rounded-xl border border-gray-800/50 shadow-lg"
                  src={cards[currentIndex].image}
                  alt={cards[currentIndex].title}
                />
              </div>

              {/* Steps Container */}
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-800/30">
                <h3 className="text-[#a28f65] text-xs font-medium uppercase mb-6">Steps</h3>
                <ul className="relative space-y-6">
                  {cards[currentIndex].steps.map((step, index) => (
                    <motion.li
                      key={step.number}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative flex gap-4"
                    >
                      <div className="relative flex items-start">
                        {index < cards[currentIndex].steps.length - 1 && (
                          <div className="absolute left-[15px] top-[30px] w-[2px] h-[calc(100%+24px)] bg-gray-800/50" />
                        )}
                        <div className="relative z-10">
                          <span className="flex justify-center items-center h-8 w-8 rounded-full border border-[#a28f65]/50 text-[#a28f65] font-semibold text-xs bg-black/50">
                            {step.number}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-sm lg:text-base text-gray-400">
                          <span className="text-white font-medium">{step.title}</span>
                          <span className="mx-2">—</span>
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

        {/* Single Centered Navigation */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="bg-black/20 backdrop-blur-sm text-white/80 p-2 rounded-full hover:bg-black/40 transition-all duration-300"
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
                    ? 'w-6 h-2 bg-[#a28f65]'
                    : 'w-2 h-2 bg-gray-600/50 hover:bg-gray-500/50'
                } rounded-full`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="bg-black/20 backdrop-blur-sm text-white/80 p-2 rounded-full hover:bg-black/40 transition-all duration-300"
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
