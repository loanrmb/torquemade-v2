import type { Metadata } from 'next'
import { SchemaRenderer } from '@/components/schema-renderer'
import { blogPostingSchema } from '@/lib/schema'
import { posts } from '@/lib/blog'
import { RelierErpCaisseShopifyContent } from './_content'

const ogImage = '/api/og?title=Relier+son+ERP+ou+sa+caisse+%C3%A0+Shopify+pour+l%27aquariophilie&category=ERP+%26+Gestion+de+stock'
const post = posts.find((p) => p.slug === 'relier-erp-caisse-shopify-aquariophilie')!

export const metadata: Metadata = {
  title: "Comment relier mon ERP ou ma caisse à Shopify pour l'aquariophilie ?",
  openGraph: {
    images: [{ url: ogImage, width: 1200, height: 630 }],
  },
  description: "Relier une caisse ou un ERP à Shopify quand on vend des spécimens uniques ne se fait pas comme pour un stock classique. Voici les approches d'intégration et leurs pièges pour l'aquariophilie.",
}

export default function Page() {
  return (
    <>
      <SchemaRenderer schema={blogPostingSchema(post, { image: ogImage })} />
      <RelierErpCaisseShopifyContent />
    </>
  )
}
