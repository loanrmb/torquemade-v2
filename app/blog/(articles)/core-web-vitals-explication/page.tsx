import type { Metadata } from 'next'
import { CoreWebVitalsContent } from './_content'

export const metadata: Metadata = {
  title: 'Core Web Vitals : ce que Google mesure vraiment sur votre site',
  description: "LCP, INP, CLS — les trois métriques que Google utilise pour évaluer l'expérience utilisateur de votre site et les intégrer dans son algorithme de classement.",
}

export default function Page() {
  return <CoreWebVitalsContent />
}
