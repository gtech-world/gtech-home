/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  experimental: {
    // ssr and displayName are configured by default
    fontLoaders: [{
      loader: '@next/font/google', options: { subsets: ['normal','medium', 'semibod', 'bold'] }
    }]
  },
}

module.exports = nextConfig
