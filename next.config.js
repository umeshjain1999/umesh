/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/content/:path*',
        destination: '/public/:path*',
      },
    ];
  },
}

module.exports = nextConfig
