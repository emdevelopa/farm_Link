import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@farmlink/ui"],
};

export default nextConfig;
