/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: '127.0.0.1',
          port: '8000',
          pathname: '/**',
        },
      ],
    },
    env: {
      apiUrl: "https://immo.kelway.in/api/",
      appUrl: "https://immo.kelway.in/",
    },
    
  };
