import type { Metadata } from 'next'
import { ChauffeurPriveBordeauxUberContent } from './_content'

export const metadata: Metadata = {
  title: "Chauffeur privé Bordeaux : comment se démarquer d'Uber en ligne",
  description: "Uber et Bolt dominent les applis. Mais un chauffeur privé indépendant peut capter des clients via le SEO local — sans commission, sans dépendance à une plateforme.",
}

export default function Page() {
  return <ChauffeurPriveBordeauxUberContent />
}
