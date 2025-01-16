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
  async redirects() {
    return [
      {
        source: '/',
        destination: '/admin',
        permanent: true, // Use `true` for permanent redirect (301), `false` for temporary (302)
      },
    ];
  },
};


export default nextConfig;
