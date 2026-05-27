import type { Metadata } from 'next'
import { VendreEnLigneSansSurvendreContent } from './_content'

export const metadata: Metadata = {
  title: "Vendre en ligne sans jamais survendre : le guide de la synchronisation de stock",
  description: "Vendre deux fois le même produit, c'est un avis négatif assuré et une commande à rembourser. Voici comment l'éviter, vraiment.",
}

export default function Page() {
  return <VendreEnLigneSansSurvendreContent />
}
