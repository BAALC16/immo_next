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
      apiUrl: "http://127.0.0.3:8003/api/v2/",
      appUrl: "http://127.0.0.1:8000/",
    },
    
  };
