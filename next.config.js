/** @type {import('next').NextConfig} */
const nextConfig = {
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

module.exports = nextConfig;
