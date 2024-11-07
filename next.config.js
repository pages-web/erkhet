/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_MAIN_API_DOMAIN: "https://noorog.app.erxes.io/api",
    NEXT_PUBLIC_WS_DOMAIN: "wss://noorog.app.erxes.io/api/graphql",
    NEXT_PUBLIC_POS_TOKEN: "tUVAnqo1K8MlY5vipKvnZJsU3GBQ2ckb",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.cloudfront.net",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "**.erxes.io",
      },
      {
        protocol: "https",
        hostname: "erxes.io",
      },
    ],
  },
};

module.exports = nextConfig;
