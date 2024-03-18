/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.cloudfront.net'
      },
      {
        protocol: 'http',
        hostname: 'localhost'
      }
    ]
  }
};

module.exports = nextConfig;
