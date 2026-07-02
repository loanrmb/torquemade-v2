import type { Metadata } from 'next'
import { ConnecterStockMagasinSiteInternetContent } from './_content'

export const metadata: Metadata = {
  title: "Comment connecter mon stock magasin à mon site internet ?",
  openGraph: {
    images: [{ url: '/api/og?title=Comment+connecter+mon+stock+magasin+%C3%A0+mon+site+internet+%3F&category=ERP+%26+Gestion+de+stock', width: 1200, height: 630 }],
  },
  description: "Synchroniser le stock de votre commerce physique avec votre site e-commerce évite les surventes, fait gagner du temps et améliore l'expérience client. Voici comment ça marche.",
}

export default function Page() {
  return <ConnecterStockMagasinSiteInternetContent />
}
