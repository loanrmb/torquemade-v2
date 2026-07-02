import type { Metadata } from 'next'
import { GoogleSearchConsoleMetriquesContent } from './_content'

export const metadata: Metadata = {
  title: "Google Search Console : les 5 métriques à surveiller chaque semaine",
  openGraph: {
    images: [{ url: '/api/og?title=Google+Search+Console+%3A+les+5+m%C3%A9triques+%C3%A0+surveiller+chaque+semaine&category=SEO+%26+Contenu', width: 1200, height: 630 }],
  },
  description: "Impressions, clics, position moyenne, couverture d'index, Core Web Vitals. Les 5 métriques Search Console qui comptent vraiment pour votre SEO.",
}

export default function Page() {
  return <GoogleSearchConsoleMetriquesContent />
}
