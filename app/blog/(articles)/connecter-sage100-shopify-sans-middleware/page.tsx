import type { Metadata } from 'next'
import { ConnecterSage100ShopifySansMiddlewareContent } from './_content'

export const metadata: Metadata = {
  title: 'Comment connecter Sage 100 à Shopify sans middleware tiers',
  description:
    "La plupart des intégrateurs vous vendent un abonnement mensuel à un outil intermédiaire. Voici comment connecter directement Sage 100 à Shopify via l'API Shopify et le Business Object Interface de Sage.",
}

export default function Page() {
  return <ConnecterSage100ShopifySansMiddlewareContent />
}
