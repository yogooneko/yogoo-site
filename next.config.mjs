/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true, // HTML <img> 태그 쓸 때 최적화 끄기
  },
};

export default nextConfig;
