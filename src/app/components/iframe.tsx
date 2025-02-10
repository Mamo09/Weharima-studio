// components/ResponsiveIframe.js
'use client'
import React from 'react';

const Iframe = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-8">
        <div className="mb-12 text-center">
          <h2 className="text-[#a28f65] text-2xl sm:text-3xl font-light tracking-wide mb-4">
            Our Location
          </h2>
          <div className="w-12 h-px bg-[#a28f65]/30 mx-auto" />
        </div>
        
        <div className="relative overflow-hidden rounded-lg border border-zinc-200/50 shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.0837345626564!2d106.8206027603619!3d-6.383193520676364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69eb1890e2623b%3A0x9f0a1023f88bc082!2sJl.%20Karet%20Hijau%20No.10%2C%20RT.4%2FRW.5%2C%20Beji%20Tim.%2C%20Kecamatan%20Beji%2C%20Kota%20Depok%2C%20Jawa%20Barat%2016422%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1738458200815!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full" 
          />
        </div>
      </div>
    </section>
  );
};

export default Iframe;
