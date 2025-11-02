import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // If your Next.js app is deployed to a subdirectory, uncomment and adjust basePath
  output: "standalone",
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": require("path").join(__dirname, "./"),
    };
    return config;
  },
};

export default nextConfig;
