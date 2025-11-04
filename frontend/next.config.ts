import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Skip TypeScript and ESLint checks during production builds
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": require("path").join(__dirname, "./"),
    };
    return config;
  },
};

export default nextConfig;
