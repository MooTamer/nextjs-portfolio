/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ["src"],
  },
  experimental: {
    typedRoutes: true,
  },
  output: "standalone",
};

export default nextConfig;
