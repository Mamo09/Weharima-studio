/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react';

const BentoGrid: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-black to-zinc-900 py-24">
      <div className="px-4 mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 h-full">
          {/* Wines Section */}
          <div className="col-span-2 sm:col-span-1 md:col-span-2 h-auto md:h-full flex flex-col">
            <a href="" className="group relative flex flex-col overflow-hidden flex-grow">
              <img
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Wines"
                className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-105 filter brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative z-10 h-full flex flex-col justify-between p-6">
                <h3 className="text-xl font-light text-white tracking-wide">Wines</h3>
                <div className="w-8 h-[1px] bg-[#a28f65] transform origin-left transition-all duration-300 group-hover:w-12" />
              </div>
            </a>
          </div>

          {/* Middle Section */}
          <div className="col-span-2 sm:col-span-1 md:col-span-2">
            {/* Gin */}
            <a href="" className="group relative flex flex-col overflow-hidden mb-3">
              <img
                src="https://images.unsplash.com/photo-1504675099198-7023dd85f5a3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Gin"
                className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-105 filter brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative z-10 h-[300px] flex flex-col justify-between p-6">
                <h3 className="text-xl font-light text-white tracking-wide">Gin</h3>
                <div className="w-8 h-[1px] bg-[#a28f65] transform origin-left transition-all duration-300 group-hover:w-12" />
              </div>
            </a>

            {/* Small Grid */}
            <div className="grid gap-3 grid-cols-2">
              {/* Whiskey */}
              <a href="" className="group relative flex flex-col overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1571104508999-893933ded431?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Whiskey"
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-105 filter brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="relative z-10 h-[200px] flex flex-col justify-between p-6">
                  <h3 className="text-xl font-light text-white tracking-wide">Whiskey</h3>
                  <div className="w-8 h-[1px] bg-[#a28f65] transform origin-left transition-all duration-300 group-hover:w-12" />
                </div>
              </a>

              {/* Vodka */}
              <a href="" className="group relative flex flex-col overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1626897505254-e0f811aa9bf7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Vodka"
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-105 filter brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="relative z-10 h-[200px] flex flex-col justify-between p-6">
                  <h3 className="text-xl font-light text-white tracking-wide">Vodka</h3>
                  <div className="w-8 h-[1px] bg-[#a28f65] transform origin-left transition-all duration-300 group-hover:w-12" />
                </div>
              </a>
            </div>
          </div>

          {/* Brandy Section */}
          <div className="col-span-2 sm:col-span-1 md:col-span-1 h-auto md:h-full flex flex-col">
            <a href="" className="group relative flex flex-col overflow-hidden flex-grow">
              <img
                src="https://images.unsplash.com/photo-1693680501357-a342180f1946?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Brandy"
                className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-105 filter brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative z-10 h-full flex flex-col justify-between p-6">
                <h3 className="text-xl font-light text-white tracking-wide">Brandy</h3>
                <div className="w-8 h-[1px] bg-[#a28f65] transform origin-left transition-all duration-300 group-hover:w-12" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;

