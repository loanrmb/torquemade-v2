import type { Metadata } from 'next'
import { StructurerSiteWebSeoContent } from './_content'

export const metadata: Metadata = {
  title: 'Comment structurer un site web pour le SEO dès la conception',
  description: "L'architecture d'un site web conditionne son SEO bien avant que le premier mot de contenu soit écrit. Voici comment l'aborder correctement dès le départ.",
}

export default function Page() {
  return <StructurerSiteWebSeoContent />
}
