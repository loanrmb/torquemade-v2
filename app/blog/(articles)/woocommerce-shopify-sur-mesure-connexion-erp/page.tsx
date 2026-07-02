import type { Metadata } from 'next'
import { WoocommerceShopifySurMesureConnexionErpContent } from './_content'

export const metadata: Metadata = {
  title: "WooCommerce, Shopify ou sur mesure : quelle solution pour connecter mon ERP ?",
  openGraph: {
    images: [{ url: '/api/og?title=WooCommerce%2C+Shopify+ou+sur+mesure+%3A+quelle+solution+pour+connecter+mon+ERP+%3F&category=ERP+%26+Gestion+de+stock', width: 1200, height: 630 }],
  },
  description: "Trois philosophies, trois budgets, trois niveaux de liberté. On compare WooCommerce, Shopify et le sur mesure sous l'angle de la connexion ERP.",
}

export default function Page() {
  return <WoocommerceShopifySurMesureConnexionErpContent />
}
