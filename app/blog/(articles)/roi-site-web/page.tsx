import type { Metadata } from 'next'
import { RoiSiteWebContent } from './_content'

export const metadata: Metadata = {
  title: "ROI d'un site web : comment mesurer ce que ça vous rapporte vraiment",
  description: "Trafic, leads, conversions, chiffre d'affaires généré — voici comment mesurer le retour sur investissement réel d'un site web, au-delà des métriques de vanité.",
}

export default function Page() {
  return <RoiSiteWebContent />
}
