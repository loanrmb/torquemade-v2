import type { Metadata } from 'next'
import { SeoConcessionnaireMotoCont } from './_content'

export const metadata: Metadata = {
  title: "SEO pour concessionnaire moto : les mots-clés qui convertissent",
  openGraph: {
    images: [{ url: '/api/og?title=SEO+pour+concessionnaire+moto+%3A+les+mots-cl%C3%A9s+qui+convertissent&category=SEO+%26+Contenu', width: 1200, height: 630 }],
  },
  description: "«Moto Bordeaux», «concessionnaire Honda Gironde», «essai Yamaha Bordeaux» : voici les requêtes que vos clients tapent et comment vous positionner dessus.",
}

export default function Page() {
  return <SeoConcessionnaireMotoCont />
}
