import type { Metadata } from 'next'
import { RoiSiteWebContent } from './_content'

export const metadata: Metadata = {
  title: "ROI d'un site web : comment mesurer ce que ça vous rapporte vraiment",
  openGraph: {
    images: [{ url: '/api/og?title=ROI+d%27un+site+web+%3A+comment+mesurer+ce+que+%C3%A7a+vous+rapporte+vraiment&category=projets', width: 1200, height: 630 }],
  },
  description: "Trafic, leads, conversions, chiffre d'affaires généré : voici comment mesurer le retour sur investissement réel d'un site web, au-delà des métriques de vanité.",
}

export default function Page() {
  return <RoiSiteWebContent />
}
