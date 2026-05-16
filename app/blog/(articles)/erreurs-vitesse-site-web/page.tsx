import type { Metadata } from 'next'
import { ErreursVitesseContent } from './_content'

export const metadata: Metadata = {
  title: "Les 7 erreurs qui plombent la vitesse d'un site web",
  description: "Images non compressées, plugins inutiles, hébergement sous-dimensionné — les 7 erreurs les plus fréquentes qui ralentissent un site et comment les corriger.",
}

export default function Page() {
  return <ErreursVitesseContent />
}
