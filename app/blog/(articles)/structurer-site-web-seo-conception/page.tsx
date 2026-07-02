import type { Metadata } from 'next'
import { StructurerSiteWebSeoContent } from './_content'

export const metadata: Metadata = {
  title: 'Comment structurer un site web pour le SEO dès la conception',
  openGraph: {
    images: [{ url: '/api/og?title=Comment+structurer+un+site+web+pour+le+SEO+d%C3%A8s+la+conception&category=Web+%26+D%C3%A9veloppement', width: 1200, height: 630 }],
  },
  description: "L'architecture d'un site web conditionne son SEO bien avant que le premier mot de contenu soit écrit. Voici comment l'aborder correctement dès le départ.",
}

export default function Page() {
  return <StructurerSiteWebSeoContent />
}
