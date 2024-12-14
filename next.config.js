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
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOnsibmFtZSI6ImVya2hldCIsImNyZWF0ZWRBdCI6IjIwMjQtMTItMTFUMTI6MTc6NDEuMDAyWiIsInVzZXJHcm91cElkIjoiNEVIeWRUREFpczJMZFFuWm4iLCJleHBpcmVEYXRlIjoiMjAyNS0wMS0xMVQwNzo0Mjo0Mi4yNzNaIiwibm9FeHBpcmUiOnRydWUsImFsbG93QWxsUGVybWlzc2lvbiI6ZmFsc2UsIl9pZCI6IkJ2T1ZRU1NfU21fNXByNGdEa1FUVCIsIl9fdiI6MH0sImlhdCI6MTczMzk4OTM2Nn0.Mk1USfG_GJb0yhSPrx-AZWvfiav0SXRvsvp2bo_0I7g",
  },
};

module.exports = nextConfig;
