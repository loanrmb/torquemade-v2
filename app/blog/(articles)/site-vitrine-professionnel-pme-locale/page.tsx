import type { Metadata } from 'next'
import { SiteVitrineContent } from './_content'

export const metadata: Metadata = {
  title: "Ce qu'un site vitrine professionnel apporte à une PME locale",
  openGraph: {
    images: [{ url: '/api/og?title=Ce+qu%27un+site+vitrine+professionnel+apporte+%C3%A0+une+PME+locale&category=Web+%26+D%C3%A9veloppement', width: 1200, height: 630 }],
  },
  description: "Visibilité Google, crédibilité, leads entrants : ce qu'un site vitrine bien construit change concrètement pour une PME ou un commerce de proximité.",
}

export default function Page() {
  return <SiteVitrineContent />
}
