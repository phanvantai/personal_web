import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Set this to your repository name if your repo is not username.github.io
  // basePath: "/personal_web",
  // Uncomment the line above if your GitHub repository name is not your username.github.io

  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
