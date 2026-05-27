import type { Metadata } from 'next'
import { ConnecterStockMagasinSiteInternetContent } from './_content'

export const metadata: Metadata = {
  title: "Comment connecter mon stock magasin à mon site internet ?",
  description: "Synchroniser le stock de votre commerce physique avec votre site e-commerce évite les surventes, fait gagner du temps et améliore l'expérience client. Voici comment ça marche.",
}

export default function Page() {
  return <ConnecterStockMagasinSiteInternetContent />
}
