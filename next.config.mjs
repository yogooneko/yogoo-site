// 필요한 다른 import 구문이 있다면 여기에 둡니다.

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  images: {
    unoptimized: true, // ← 이것만 추가하면 돼!
  },
};

export default nextConfig;
