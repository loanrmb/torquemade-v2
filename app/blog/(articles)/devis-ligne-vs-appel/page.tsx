import type { Metadata } from 'next'
import { DevisLigneVsAppelContent } from './_content'

export const metadata: Metadata = {
  title: "Devis en ligne vs devis sur appel : lequel convertit le mieux ?",
  openGraph: {
    images: [{ url: '/api/og?title=Devis+en+ligne+vs+devis+sur+appel+%3A+lequel+convertit+le+mieux+%3F&category=projets', width: 1200, height: 630 }],
  },
  description: "Formulaire de devis immédiat ou appel téléphonique d'abord ? La réponse dépend de votre secteur, de votre ticket moyen et du profil de votre client idéal.",
}

export default function Page() {
  return <DevisLigneVsAppelContent />
}
