import type { Metadata } from 'next'
import { StudioWebBordeauxSurMesureContent } from './_content'

export const metadata: Metadata = {
  title: "Torquemade : l'approche sur mesure d'un studio web indépendant à Bordeaux",
  description: "Pas de template. Pas d'agence intermédiaire. Torquemade conçoit des sites et des logiciels sur mesure pour les professionnels qui veulent performer en ligne.",
}

export default function Page() {
  return <StudioWebBordeauxSurMesureContent />
}
