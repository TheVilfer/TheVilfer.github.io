/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "imgs.xkcd.com",
      },
    ],
  },
};

export default nextConfig;
