import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/sunlight-landscape-pompano",
  assetPrefix: "/sunlight-landscape-pompano/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
