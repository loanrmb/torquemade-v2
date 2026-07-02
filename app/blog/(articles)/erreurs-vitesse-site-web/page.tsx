import type { Metadata } from 'next'
import { ErreursVitesseContent } from './_content'

export const metadata: Metadata = {
  title: "Les 7 erreurs qui plombent la vitesse d'un site web",
  openGraph: {
    images: [{ url: '/api/og?title=Les+7+erreurs+qui+plombent+la+vitesse+d%27un+site+web&category=Web+%26+D%C3%A9veloppement', width: 1200, height: 630 }],
  },
  description: "Images non compressées, plugins inutiles, hébergement sous-dimensionné — les 7 erreurs les plus fréquentes qui ralentissent un site et comment les corriger.",
}

export default function Page() {
  return <ErreursVitesseContent />
}
