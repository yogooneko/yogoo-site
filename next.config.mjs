// 필요한 다른 import 구문이 있다면 여기에 둡니다.

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... 다른 설정 옵션들 (이미 있다면 그대로 둡니다)

  experimental: { // <-- experimental 속성 추가
    appDir: true, // <-- appDir 옵션 추가
  },

  // ... 다른 설정 옵션들
};

export default nextConfig;