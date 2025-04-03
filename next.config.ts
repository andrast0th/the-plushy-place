import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  redirects: async () => [
    {
      source: "/products",
      destination: "/",
      permanent: false,
    },
  ],
};

export default nextConfig;
