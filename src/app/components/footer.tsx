"use client"; // Menandai file ini sebagai komponen klien    
import Image from "next/image";    
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Mengimpor ikon sosial  
  
const Footer: React.FC = () => {    
  // Data tautan navigasi    
  const navLinks = [    
    { name: 'Home', path: '/' },       
    { name: 'Service', path: '/services' },    
    { name: 'About Us', path: '/about' },    
    { name: 'Contact Us', path: '/contact' },    
  ];    
  
  // Data layanan  
  const services = [  
    { name: 'Interior Design', path: '/services' },  
    { name: 'Architecture', path: '/services' },  
    { name: 'Visualization', path: '/services' },  
  ];  
  const imageUrl = 'https://res.cloudinary.com/dnnppnpn7/image/upload/v1738558658/My%20Brand/LOGO_white_bj9tbi.png'
  
  return (    
    <footer className="bg-gray-900 text-white py-10">    
      <div className="mx-auto">    
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 my-8">    
          {/* Kolom 1: Informasi Umum - Lebar 2 kolom */}    
          <div className="flex flex-col items-start mb-6 md:col-span-2 -mt-9 px-8"> {/* Menambahkan kolom span */}  
            <Image    
              src={imageUrl}    
              alt="logo WEHA"    
              width={140}    
              height={40}   
            />    
            <p className="text-gray-400 text-justify  pr-12">    
            Weharima Studio is an architectural consulting firm that specializes in balancing creative design with technical expertise to create innovative and functional spaces for clients.
            </p>  

          </div>    
    
          {/* Kolom 2: Tautan Navigasi */}    
          <div className="px-8">    
            <h2 className="text-lg font-bold mb-4">Navigation</h2>    
            <ul className="space-y-2">    
              {navLinks.map((link) => (    
                <li key={link.name}>    
                  <a href={link.path} className="text-gray-400 hover:text-white transition duration-200">    
                    {link.name}    
                  </a>    
                </li>    
              ))}   
            </ul>    
          </div>    
    
          {/* Kolom 3: Layanan */}    
          <div className="px-8">    
            <h2 className="text-lg font-bold mb-4">Our Service</h2>    
            <ul className="space-y-2">    
              {services.map((service) => (    
                <li key={service.name}>    
                  <a href={service.path} className="text-gray-400 hover:text-white transition duration-200">    
                    {service.name}    
                  </a>    
                </li>    
              ))}   
            </ul>    
          </div>    
    
          {/* Kolom 4: Informasi Kontak     */}
          {/* <div>    
            <h2 className="text-lg font-bold mb-4">Contact</h2>    
            <p className="text-gray-400">Email: weharima.std@gmail.com </p>    
            <p className="text-gray-400">Telepon: (123) 456-790</p>    
            <p className="text-gray-400">Alamat: Jl. Contoh No. 123, Jakarta, Indonesia</p>    
          </div>     */}

        </div>  
          
      </div>    
                  
      {/* Ikon Sosial */}    
      {/* <div className="flex justify-center space-x-4 mt-6">  
        <a href="#" className="text-gray-400 hover:text-white transition duration-200">  
          <FaFacebookF />  
        </a>  
        <a href="#" className="text-gray-400 hover:text-white transition duration-200">  
          <FaTwitter />  
        </a>  
        <a href="#" className="text-gray-400 hover:text-white transition duration-200">  
          <FaInstagram />  
        </a>  
        <a href="#" className="text-gray-400 hover:text-white transition duration-200">  
          <FaLinkedinIn />  
        </a>  
      </div>   */}
  
      {/* Copyright */}    
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">    
        <p className="text-gray-400 text-sm">© 2025 by Weharima Studio, All Rights Reserved</p>    
      </div>    
    </footer>    
  );    
};    
    
export default Footer;    
