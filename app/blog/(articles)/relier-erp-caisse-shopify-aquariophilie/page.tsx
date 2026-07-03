import type { Metadata } from 'next'
import { RelierErpCaisseShopifyContent } from './_content'

export const metadata: Metadata = {
  title: "Comment relier mon ERP ou ma caisse à Shopify pour l'aquariophilie ?",
  openGraph: {
    images: [{ url: '/api/og?title=Relier+son+ERP+ou+sa+caisse+%C3%A0+Shopify+pour+l%27aquariophilie&category=ERP+%26+Gestion+de+stock', width: 1200, height: 630 }],
  },
  description: "Relier une caisse ou un ERP à Shopify quand on vend des spécimens uniques ne se fait pas comme pour un stock classique. Voici les approches d'intégration et leurs pièges pour l'aquariophilie.",
}

export default function Page() {
  return <RelierErpCaisseShopifyContent />
}
