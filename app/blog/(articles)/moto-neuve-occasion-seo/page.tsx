import type { Metadata } from 'next'
import { MotoNeuveOccasionSeoContent } from './_content'

export const metadata: Metadata = {
  title: "Moto neuve vs occasion : comment structurer les pages pour le SEO",
  openGraph: {
    images: [{ url: '/api/og?title=Moto+neuve+vs+occasion+%3A+comment+structurer+les+pages+pour+le+SEO&category=SEO+%26+Contenu', width: 1200, height: 630 }],
  },
  description: "Moto neuve et moto d'occasion ne ciblent pas les mêmes requêtes ni les mêmes acheteurs. Voici comment structurer vos pages pour maximiser la visibilité des deux.",
}

export default function Page() {
  return <MotoNeuveOccasionSeoContent />
}
