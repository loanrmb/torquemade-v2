import type { Metadata } from 'next'
import { WoocommerceShopifySurMesureConnexionErpContent } from './_content'

export const metadata: Metadata = {
  title: "WooCommerce, Shopify ou sur mesure : quelle solution pour connecter mon ERP ?",
  description: "Trois philosophies, trois budgets, trois niveaux de liberté. On compare WooCommerce, Shopify et le sur mesure sous l'angle de la connexion ERP.",
}

export default function Page() {
  return <WoocommerceShopifySurMesureConnexionErpContent />
}
