import type { Metadata } from 'next'
import { ClientCommandeEnLigneStockMagasinContent } from './_content'

export const metadata: Metadata = {
  title: "Un client commande en ligne, le stock baisse en magasin : voilà comment ça devrait fonctionner",
  description: "Suivez la cascade invisible qui se déclenche en 200 millisecondes entre le bouton \"Commander\" et l'étiquette d'expédition dans votre magasin.",
}

export default function Page() {
  return <ClientCommandeEnLigneStockMagasinContent />
}
