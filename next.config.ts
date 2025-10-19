import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Canonical host exposed to the app (use in OG tags, absolute URLs, etc.)
  env: {
    NEXT_PUBLIC_SITE_URL: "https://cutsandcoffee.vercel.app",
  },
  // Allow Next/Image to load assets from the Vercel alias if needed
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cutsandcoffee.vercel.app",
        port: "",
        pathname: "/**",
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
