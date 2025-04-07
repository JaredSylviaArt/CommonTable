/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/CommonTable',
  assetPrefix: '/CommonTable/',
}

module.exports = nextConfig 