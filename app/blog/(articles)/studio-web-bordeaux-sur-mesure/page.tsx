import type { Metadata } from 'next'
import { StudioWebBordeauxSurMesureContent } from './_content'

export const metadata: Metadata = {
  title: "Torquemade : l'approche sur mesure d'un studio web indépendant à Bordeaux",
  openGraph: {
    images: [{ url: '/api/og?title=Torquemade+%3A+l%27approche+sur+mesure+d%27un+studio+web+ind%C3%A9pendant+%C3%A0+Bordeaux&category=projets', width: 1200, height: 630 }],
  },
  description: "Pas de template. Pas d'agence intermédiaire. Torquemade conçoit des sites et des logiciels sur mesure pour les professionnels qui veulent performer en ligne.",
}

export default function Page() {
  return <StudioWebBordeauxSurMesureContent />
}
