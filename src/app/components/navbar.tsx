"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Service', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActivePath = (path: string): boolean => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname?.startsWith(path);
  };

  return (
    <nav className="bg-[#a28f65] shadow-lg text-black">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" passHref>
              <Image
                src="https://res.cloudinary.com/dnnppnpn7/image/upload/v1738559384/wehaLogo_hwvzpx.png"
                alt="logo WEHA"
                width={100}
                height={30}
                className={`transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            </Link>
          </div>

          <div className="flex md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`px-4 py-2 rounded-md transition duration-300 font-normal
                  ${isActivePath(link.path)
                    ? 'bg-white bg-opacity-20 text-white'
                    : 'text-black hover:bg-white hover:bg-opacity-20 hover:text-white'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64' : 'max-h-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`block px-4 py-2 rounded-md transition duration-300 font-normal
                ${isActivePath(link.path)
                  ? 'bg-white bg-opacity-20 text-white'
                  : 'text-black hover:bg-white hover:bg-opacity-20 hover:text-white'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
