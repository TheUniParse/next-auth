/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  },
  images: {
    // allow all domains (from auth providers)
    remotePatterns: [
      { hostname: '**' }
    ]
  }
}

module.exports = nextConfig
