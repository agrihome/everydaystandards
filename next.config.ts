import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/everydaystandards",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
