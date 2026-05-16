import type { Metadata } from 'next'
import { SiteVitrineContent } from './_content'

export const metadata: Metadata = {
  title: "Ce qu'un site vitrine professionnel apporte à une PME locale",
  description: "Visibilité Google, crédibilité, leads entrants — ce qu'un site vitrine bien construit change concrètement pour une PME ou un commerce de proximité.",
}

export default function Page() {
  return <SiteVitrineContent />
}
