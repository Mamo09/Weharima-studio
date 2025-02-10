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
    <nav className="bg-[#a28f65]/90 backdrop-blur-sm w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://res.cloudinary.com/dnnppnpn7/image/upload/v1738559384/wehaLogo_hwvzpx.png"
              alt="logo WEHA"
              width={90}
              height={28}
              className={`transition-transform duration-200 ${isHovered ? 'scale-105' : 'scale-100'}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </Link>

          <div className="flex md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-black/80 hover:text-black transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`px-3 py-1.5 text-sm transition-colors duration-200 relative group
                  ${isActivePath(link.path)
                    ? 'text-white font-medium'
                    : 'text-black/80 hover:text-white'
                  }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-200 
                  ${isActivePath(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} 
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div 
        className={`md:hidden transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-64 border-t border-white/10' : 'max-h-0 overflow-hidden'
        }`}
      >
        <div className="bg-[#a28f65]/95 backdrop-blur-sm py-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`block px-4 py-2 text-sm transition-colors duration-200
                ${isActivePath(link.path)
                  ? 'text-white font-medium bg-white/10'
                  : 'text-black/80 hover:text-white hover:bg-white/5'
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
