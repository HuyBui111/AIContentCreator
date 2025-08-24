/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/AIContentCreator',
  assetPrefix: '/AIContentCreator/',
}

module.exports = nextConfig
