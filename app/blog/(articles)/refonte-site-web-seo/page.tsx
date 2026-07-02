import type { Metadata } from 'next'
import { RefonteWebSeoContent } from './_content'

export const metadata: Metadata = {
  title: "Refonte de site web : comment l'aborder sans perdre son SEO",
  openGraph: {
    images: [{ url: '/api/og?title=Refonte+de+site+web+%3A+comment+l%27aborder+sans+perdre+son+SEO&category=Web+%26+D%C3%A9veloppement', width: 1200, height: 630 }],
  },
  description: "Une refonte mal préparée peut effacer des mois de travail SEO en quelques jours. Voici la méthode pour migrer sans perdre vos positions Google.",
}

export default function Page() {
  return <RefonteWebSeoContent />
}
