import type { Metadata } from 'next'
import { ConnecterSage100ShopifySansMiddlewareContent } from './_content'

export const metadata: Metadata = {
  title: 'Comment connecter Sage 100 à Shopify sans middleware tiers',
  description: "Sage 100 + Shopify integration: real-time inventory sync (no API fees)",
}

export default function Page() {
  return <ConnecterSage100ShopifySansMiddlewareContent />
}
