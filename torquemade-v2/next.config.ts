import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.torquemade.com' },
      { protocol: 'https', hostname: 'www.spicybeautybyt.com' },
      { protocol: 'https', hostname: 'spicybeautybyt.com' },
    ],
  },
}

export default nextConfig
