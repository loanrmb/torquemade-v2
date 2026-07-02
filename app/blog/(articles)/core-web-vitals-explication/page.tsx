import type { Metadata } from 'next'
import { CoreWebVitalsContent } from './_content'

export const metadata: Metadata = {
  title: 'Core Web Vitals : ce que Google mesure vraiment sur votre site',
  openGraph: {
    images: [{ url: '/api/og?title=Core+Web+Vitals+%3A+ce+que+Google+mesure+vraiment+sur+votre+site&category=Web+%26+D%C3%A9veloppement', width: 1200, height: 630 }],
  },
  description: "LCP, INP, CLS — les trois métriques que Google utilise pour évaluer l'expérience utilisateur de votre site et les intégrer dans son algorithme de classement.",
}

export default function Page() {
  return <CoreWebVitalsContent />
}
