import type { Metadata } from 'next'
import { ClientCommandeEnLigneStockMagasinContent } from './_content'

export const metadata: Metadata = {
  title: "Un client commande en ligne, le stock baisse en magasin : voilà comment ça devrait fonctionner",
  openGraph: {
    images: [{ url: '/api/og?title=Un+client+commande+en+ligne%2C+le+stock+baisse+en+magasin+%3A+voil%C3%A0+comment+%C3%A7a+devrait+fonctionner&category=ERP+%26+Gestion+de+stock', width: 1200, height: 630 }],
  },
  description: "Suivez la cascade invisible qui se déclenche en 200 millisecondes entre le bouton \"Commander\" et l'étiquette d'expédition dans votre magasin.",
}

export default function Page() {
  return <ClientCommandeEnLigneStockMagasinContent />
}
