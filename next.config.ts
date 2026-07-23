import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

// script-src needs 'unsafe-inline': Next.js App Router streams the RSC
// hydration payload as multiple `self.__next_f.push(...)` inline <script>
// tags whose content is unique per request, so they can't be pinned with a
// static hash (tried a hash for just our one custom inline script — CSP3
// browsers then ignore 'unsafe-inline' entirely whenever *any* hash/nonce
// source is present in the directive, which blocked every other Next.js
// hydration script and rendered the page blank). A correct hash-free policy
// would need per-request nonces threaded through middleware.ts; out of scope
// here, so this is the deliberate tradeoff — same one most Next.js App
// Router sites make without a nonce pipeline.
//
// style-src needs 'unsafe-inline' too: the app uses React inline
// `style={{...}}` attributes throughout (opengraph-image.tsx, work-grid.tsx,
// etc.), which render as HTML `style="..."` attributes and are gated by
// style-src the same as `<style>` tags. Hashing/noncing 50+ call sites
// individually isn't practical here.
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join('; ')

const securityHeaders = [
  { key: 'Content-Security-Policy', value: CSP },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
  },
]

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.torquemade.com' },
      { protocol: 'https', hostname: 'www.spicybeautybyt.com' },
      { protocol: 'https', hostname: 'spicybeautybyt.com' },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
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
