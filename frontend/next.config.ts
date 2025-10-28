import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    appDir: true,
  },
  output: "standalone",
  // If your Next.js app is deployed to a subdirectory, uncomment and adjust basePath
  // basePath: '/frontend',
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": require("path").join(__dirname, "./"),
    };
    return config;
  },
};

export default nextConfig;
