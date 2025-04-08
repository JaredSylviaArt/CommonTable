/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/CommonTable',
  images: {
    unoptimized: true,
  },
  // Remove any other conflicting options like swcMinify
}

module.exports = nextConfig 