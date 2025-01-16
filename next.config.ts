import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {hostname: "images.pexels.com"}
    ]
  }
};

// next.config.js
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/admin',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/admin',
        permanent: true,
      }
    ];
  },
  images: {
    domains: ['https://schoolcrm-dashboard.vercel.app/logo.png'], // Add allowed domains for optimized images
  },
  env: {
    SITE_NAME: 'CRM Dashboard',
    SITE_URL: 'https://schoolcrm-dashboard.vercel.app/',
  },
};

export default nextConfig;
