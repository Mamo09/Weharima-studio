"use client";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Service', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const services = [
    { name: 'Interior Design', path: '/services' },
    { name: 'Architecture', path: '/services' },
    { name: 'Visualization', path: '/services' },
  ];

  const imageUrl = 'https://res.cloudinary.com/dnnppnpn7/image/upload/v1738558658/My%20Brand/LOGO_white_bj9tbi.png';

  return (
    <footer className="bg-black/95 backdrop-blur-sm py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-6">
            <Link href="/">
              <Image
                src={imageUrl}
                alt="logo WEHA"
                width={140}
                height={40}
                className="opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed pr-12 max-w-md">
              Weharima Studio is an architectural consulting firm that specializes in balancing creative design with technical expertise to create innovative and functional spaces for clients.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h2 className="text-[#a28f65] text-sm font-light tracking-wide mb-6">
              Navigation
            </h2>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-gray-400 text-sm hover:text-[#a28f65] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-[#a28f65] text-sm font-light tracking-wide mb-6">
              Our Services
            </h2>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.path}
                    className="text-gray-400 text-sm hover:text-[#a28f65] transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 mt-16 pt-8">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Weharima Studio. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
