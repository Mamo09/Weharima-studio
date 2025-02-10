'use client'

import React, { useEffect } from 'react';
import Link from 'next/link';
import { IoArrowBack } from 'react-icons/io5';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log errors in production
    if (process.env.NODE_ENV === 'production') {
      console.error('Application Error:', error);
    }
  }, [error]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fbfaf4] to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-[#a28f65] text-6xl sm:text-7xl font-light mb-4">
            Oops!
          </h1>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-8">
            Something went wrong. Please try again later or return to the homepage.
          </p>
          <div className="w-12 h-px bg-[#a28f65]/30 mx-auto" />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="px-6 py-2 bg-[#a28f65]/10 text-[#a28f65] text-sm tracking-wide
              hover:bg-[#a28f65]/20 transition-all duration-300 w-full sm:w-auto"
          >
            Try Again
          </button>
          
          <Link
            href="/"
            className="group flex items-center justify-center gap-2 px-6 py-2 
              border border-[#a28f65]/20 text-[#a28f65] text-sm tracking-wide
              hover:border-[#a28f65]/40 transition-all duration-300 w-full sm:w-auto"
          >
            <IoArrowBack className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Home
          </Link>
        </div>

        <div className="mt-8 text-zinc-400 text-xs">
          Error: {error.message || 'Unknown error occurred'}
        </div>
      </div>
    </main>
  );
}