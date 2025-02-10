"use client";
import Image from "next/image";
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { IoMailOpenOutline } from "react-icons/io5";

const ContactUs: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 max-w-2xl text-center mx-auto">
          <h2 className="text-[#a28f65] text-3xl sm:text-4xl font-light tracking-wide mb-4">
            Contact Us
          </h2>
          <div className="w-12 h-px bg-[#a28f65]/30 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-lg shadow-md">
            <Image
              className="object-cover transition-transform duration-700 hover:scale-105"
              src="/assets/img/contactfreepik.jpg"
              alt="Contacts Image"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-50" />
          </div>

          <div className="space-y-12">
            {/* Address Section */}
            <div>
              <h3 className="text-[#a28f65] text-xl font-light tracking-wide mb-6">
                Our Address
              </h3>
              <div className="flex gap-4 items-start">
                <svg
                  className="shrink-0 w-5 h-5 text-[#a28f65]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <p className="text-zinc-500 text-sm mb-2">
                    Indonesia
                  </p>
                  <address className="text-zinc-700 not-italic text-sm leading-relaxed">
                    Jl. Karet Hijau No.10, Beji Tim., Kecamatan Beji, Kota Depok, Jawa Barat 16422
                  </address>
                </div>
              </div>
            </div>

            {/* Contact Info Section */}
            <div>
              <h3 className="text-[#a28f65] text-xl font-light tracking-wide mb-6">
                Contact Information
              </h3>
              <div className="grid gap-6">
                {/* Email */}
                <div className="flex gap-4 items-start group">
                  <a href="mailto:weharima.std@gmail.com" className="text-[#a28f65] hover:text-[#8f7c57] transition-colors duration-300">
                    <IoMailOpenOutline className="w-5 h-5" />
                  </a>
                  <div>
                    <p className="text-zinc-500 text-sm mb-1">Email</p>
                    <a
                      href="mailto:weharima.std@gmail.com"
                      className="text-zinc-700 hover:text-[#a28f65] transition-colors duration-300 text-sm"
                    >
                      weharima.std@gmail.com
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex gap-4 items-start group">
                  <a href="https://www.instagram.com/weha.studio/" target="_blank" className="text-[#a28f65] hover:text-[#8f7c57] transition-colors duration-300">
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <div>
                    <p className="text-zinc-500 text-sm mb-1">Instagram</p>
                    <a
                      href="https://www.instagram.com/weha.studio/"
                      target="_blank"
                      className="text-zinc-700 hover:text-[#a28f65] transition-colors duration-300 text-sm"
                    >
                      weha.studio
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4 items-start group">
                  <a href="tel:+6281399100399" className="text-[#a28f65] hover:text-[#8f7c57] transition-colors duration-300">
                    <FaWhatsapp className="w-5 h-5" />
                  </a>
                  <div>
                    <p className="text-zinc-500 text-sm mb-1">WhatsApp</p>
                    <a
                      href="tel:+6281399100399"
                      className="text-zinc-700 hover:text-[#a28f65] transition-colors duration-300 text-sm"
                    >
                      +62 813 9910 0399
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;