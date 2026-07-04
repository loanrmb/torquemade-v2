import type { Metadata } from 'next'
import { SeoVtcTrajetsContent } from './_content'

export const metadata: Metadata = {
  title: "SEO pour service VTC : se positionner sur les trajets clés",
  openGraph: {
    images: [{ url: '/api/og?title=SEO+pour+service+VTC+%3A+se+positionner+sur+les+trajets+cl%C3%A9s&category=SEO+%26+Contenu', width: 1200, height: 630 }],
  },
  description: "«VTC Bordeaux aéroport», «chauffeur gare Mérignac» : les requêtes de trajet sont les plus rentables pour un VTC. Voici comment s'y positionner efficacement.",
}

export default function Page() {
  return <SeoVtcTrajetsContent />
}
