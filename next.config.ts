import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
  },
  distDir: 'out',
  trailingSlash: true,
  assetPrefix: '', // Fix here

  staticPageGenerationTimeout: 1000,
  reactStrictMode: true,
};

export default nextConfig;
