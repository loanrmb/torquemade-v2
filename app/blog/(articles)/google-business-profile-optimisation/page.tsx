import type { Metadata } from 'next'
import { GoogleBusinessProfileOptimisationContent } from './_content'

export const metadata: Metadata = {
  title: "Google Business Profile : optimiser sa fiche pour le SEO local",
  openGraph: {
    images: [{ url: '/api/og?title=Google+Business+Profile+%3A+optimiser+sa+fiche+pour+le+SEO+local&category=SEO+%26+Contenu', width: 1200, height: 630 }],
  },
  description: "Google Business Profile est le levier SEO local le plus accessible. Voici comment l'optimiser pour apparaître dans le pack local et convertir plus de visiteurs.",
}

export default function Page() {
  return <GoogleBusinessProfileOptimisationContent />
}
