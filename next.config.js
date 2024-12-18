/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

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
  env: {
    NEXT_PUBLIC_MAIN_API_DOMAIN: "https://erkhet.app.erxes.io/gateway",
    NEXT_PUBLIC_ERXES_API_URL: "https://erkhet.app.erxes.io/gateway/graphql",
    NEXT_PUBLIC_WS_DOMAIN: "https://erkhet.app.erxes.io/api/graphql",
    NEXT_PUBLIC_POS_TOKEN: "F3jP2GmWMA1btHCHSn6dALRYGvsrWVde",
    NEXT_PUBLIC_APP_TOKEN:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOnsibmFtZSI6ImVya2hldC0xIiwiY3JlYXRlZEF0IjoiMjAyNC0xMi0xN1QwODo0NDowOC4zNTRaIiwidXNlckdyb3VwSWQiOiI0RUh5ZFREQWlzMkxkUW5abiIsImV4cGlyZURhdGUiOiIyMDI1LTAxLTE2VDEwOjU1OjMwLjQ2N1oiLCJub0V4cGlyZSI6ZmFsc2UsImFsbG93QWxsUGVybWlzc2lvbiI6dHJ1ZSwiX2lkIjoiU1hDTTloaGlLQ3o0UzNBbkVzOWpBIiwiX192IjowfSwiaWF0IjoxNzM0NDMyOTM4LCJleHAiOjM0NzE0NTc4Njh9.bf6cl2Qgq_pTScSZKbYeiTtLCLodXDBoGU2IpFInIhM",
  },
};

module.exports = nextConfig;
