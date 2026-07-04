import type { Metadata } from 'next'
import { SeoLocalVenteMotoBordeauxContent } from './_content'

export const metadata: Metadata = {
  title: "Comment vendre plus de motos grâce au SEO local en Gironde",
  openGraph: {
    images: [{ url: '/api/og?title=Comment+vendre+plus+de+motos+gr%C3%A2ce+au+SEO+local+en+Gironde&category=SEO+%26+Contenu', width: 1200, height: 630 }],
  },
  description: "Un acheteur de moto cherche d'abord en ligne avant de visiter un concessionnaire. Voici comment le SEO local transforme cette recherche en visite, et en vente.",
}

export default function Page() {
  return <SeoLocalVenteMotoBordeauxContent />
}
