
"use client";
import Image from "next/image";
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { IoMailOpenOutline } from "react-icons/io5";

const ContactUs: React.FC = () => {
  return (
    <div className="px-8 sm:px-6 lg:px-8 py-12 lg:py-24 mx-auto">
      <div className="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
        <h2 className="font-medium text-primary text-2xl sm:text-4xl">
          Contacts Us
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-6 md:gap-8 lg:gap-12">
        <div className="aspect-w-16 aspect-h-6 lg:aspect-h-14 overflow-hidden bg-accent rounded-2xl">
          <Image
            className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
            src="/assets/img/contactfreepik.jpg"
            alt="Contacts Image"
            width={650}
            height={500}
          />
        </div>
        {/* End Col */}

        <div className="space-y-8 lg:space-y-16">
          <div>
            <h3 className="mb-5 font-semibold text-black">
              Our address
            </h3>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
              <div className="flex gap-4">
                <svg
                  className="shrink-0 size-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>

                <div className="grow">
                  <p className="text-sm text-gray-600">
                   Indonesia
                  </p>
                  <address className="mt-1 text-black not-italic">
                    Jl. Karet Hijau No.10, Beji Tim., Kecamatan Beji, Kota Depok, Jawa Barat 16422
                  </address>
                </div>
              </div>
            </div>
            {/* End Grid */}
          </div>

          <div>
            <h3 className="mb-5 font-semibold text-black">
              Our contacts
            </h3>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
              <div className="flex gap-4">
                <a href="mailto:weharima.std@gmail.com" target="_blank">
                    <IoMailOpenOutline
                        className="shrink-0 size-5 text-gray-500"
                        width={24}
                        height={24}
                    />
                </a>
                

                <div className="grow">
                  <p className="text-sm text-primary">
                    Email
                  </p>
                  <p>
                    <a
                      className="relative inline-block font-medium before:w-full before:h-1 "
                      href="mailto:weharima.std@gmail.com"
                    >
                      weharima.std@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/weha.studio/" target="_blank">
                <FaInstagram
                    className="shrink-0 size-5 text-gray-500"
                    width={24}
                    height={24}
                    
                />
                </a>
                

                <div className="grow">
                  <p className="text-sm text-primary">
                    Instagram
                  </p>
                  <p>
                    <a
                      className="relative inline-block font-medium "
                      href="https://www.instagram.com/weha.studio/"
                    >
                      weha.studio
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="tel:+6281399100399" target="_blank">
                    <FaWhatsapp
                        className="shrink-0 size-5 text-gray-500"
                        width={24}
                        height={24}
                        href="tel:+6281399100399"
                        />
                </a>

                <div className="grow">
                  <p className="text-sm text-primary">
                    Whatsapp
                  </p>
                  <p>
                    <a
                      className="relative inline-block font-medium"
                      href="tel:+6281399100399"
                    >
                      +62 813 9910 0399
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* End Grid */}
          </div>
        </div>
        {/* End Col */}
      </div>
    </div>
  );
};

export default ContactUs;