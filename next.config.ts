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
  async redirects() {
    return [
      {
        source: '/blog/preuves-litige-paiement-poisson-vivant',
        destination: '/blog/litige-poisson-mort-doa',
        permanent: true,
      },
      {
        source: '/blog/prouver-poisson-arrive-vivant-retrofacturation',
        destination: '/blog/litige-poisson-mort-doa',
        permanent: true,
      },
    ]
  },
}

const withMDX = createMDX({})
export default withMDX(nextConfig)
