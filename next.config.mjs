/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/intercontinental-merchandise-logistics",
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"] }
};

export default nextConfig;
