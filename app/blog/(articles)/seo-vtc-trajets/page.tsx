import type { Metadata } from 'next'
import { SeoVtcTrajetsContent } from './_content'

export const metadata: Metadata = {
  title: "SEO pour service VTC : se positionner sur les trajets clés",
  description: "«VTC Bordeaux aéroport», «chauffeur gare Mérignac» — les requêtes de trajet sont les plus rentables pour un VTC. Voici comment s'y positionner efficacement.",
}

export default function Page() {
  return <SeoVtcTrajetsContent />
}
