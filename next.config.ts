import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
      {
        protocol: 'https',
        hostname: 'images.clerk.dev',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/personal-room',
        destination: '/home/personal-room',
      },
      {
        source: '/upcoming',
        destination: '/home/upcoming',
      },
      {
        source: '/previous',
        destination: '/home/previous',
      },
      {
        source: '/recordings',
        destination: '/home/recordings',
      },
      {
        source: '/dashboard',
        destination: '/home',
      },
    ];
  },
};

export default nextConfig;
