import type { Metadata } from 'next'
import { IntentionRechercheSeoContent } from './_content'

export const metadata: Metadata = {
  title: "Intentions de recherche : comprendre ce que veut vraiment l'utilisateur",
  openGraph: {
    images: [{ url: '/api/og?title=Intentions+de+recherche+%3A+comprendre+ce+que+veut+vraiment+l%27utilisateur&category=SEO+%26+Contenu', width: 1200, height: 630 }],
  },
  description: "L'intention de recherche est le facteur SEO numéro 1 que la plupart des sites ignorent. Voici comment l'identifier et l'exploiter pour dominer Google.",
}

export default function Page() {
  return <IntentionRechercheSeoContent />
}
