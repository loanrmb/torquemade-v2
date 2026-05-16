import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.torquemade.com' },
      { protocol: 'https', hostname: 'www.spicybeautybyt.com' },
      { protocol: 'https', hostname: 'spicybeautybyt.com' },
    ],
  },
}

const withMDX = createMDX({})
export default withMDX(nextConfig)
