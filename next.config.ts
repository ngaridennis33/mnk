import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com','randomuser.me'], // ✅ Allow Unsplash images
  },
};

export default nextConfig;