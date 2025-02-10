import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['images.pexels.com','res.cloudinary.com'], // Izinkan gambar dari Cloudinary
  },
};

export default nextConfig;
