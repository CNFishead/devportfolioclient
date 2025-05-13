import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    ENV: "production",
    // ENV: 'development',
    // API_URL: 'https://api.howardapi.com/api/v1',
    API_URL: "https://api.austinhoward.dev/api/v1",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
