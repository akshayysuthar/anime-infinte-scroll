/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // to give access to all website
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

module.exports = nextConfig;
