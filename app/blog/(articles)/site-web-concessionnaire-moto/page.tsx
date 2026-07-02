import type { Metadata } from 'next'
import { SiteWebConcessionnaireMotoCont } from './_content'

export const metadata: Metadata = {
  title: "Pourquoi les concessionnaires moto ont besoin d'un site web moderne",
  openGraph: {
    images: [{ url: '/api/og?title=Pourquoi+les+concessionnaires+moto+ont+besoin+d%27un+site+web+moderne', width: 1200, height: 630 }],
  },
  description: "Un site vitrine dépassé coûte des ventes. Voici pourquoi un concessionnaire moto a besoin d'un site moderne — et ce que ça change concrètement pour son activité.",
}

export default function Page() {
  return <SiteWebConcessionnaireMotoCont />
}
