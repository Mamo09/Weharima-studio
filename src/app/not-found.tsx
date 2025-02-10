'use client'

import Link from 'next/link'
import { IoArrowBack } from 'react-icons/io5'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fbfaf4] to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div 
          className="mb-8 animate-fade-in-down"
        >
          <h1 className="text-[#a28f65] text-7xl sm:text-8xl font-light mb-4">
            404
          </h1>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-8">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          <div className="w-12 h-px bg-[#a28f65]/30 mx-auto" />
        </div>

        <div className="animate-fade-in-up delay-200">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 px-6 py-2 
              border border-[#a28f65]/20 text-[#a28f65] text-sm tracking-wide
              hover:border-[#a28f65]/40 transition-all duration-300"
          >
            <IoArrowBack className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}