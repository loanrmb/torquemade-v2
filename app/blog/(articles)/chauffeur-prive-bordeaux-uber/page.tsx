import type { Metadata } from 'next'
import { ChauffeurPriveBordeauxUberContent } from './_content'

export const metadata: Metadata = {
  title: "Chauffeur privé Bordeaux : comment se démarquer d'Uber en ligne",
  openGraph: {
    images: [{ url: '/api/og?title=Chauffeur+priv%C3%A9+Bordeaux+%3A+comment+se+d%C3%A9marquer+d%27Uber+en+ligne', width: 1200, height: 630 }],
  },
  description: "Uber et Bolt dominent les applis. Mais un chauffeur privé indépendant peut capter des clients via le SEO local, sans commission, sans dépendance à une plateforme.",
}

export default function Page() {
  return <ChauffeurPriveBordeauxUberContent />
}
