import type { Metadata } from 'next'
import { GoogleSearchConsoleMetriquesContent } from './_content'

export const metadata: Metadata = {
  title: "Google Search Console : les 5 métriques à surveiller chaque semaine",
  description: "Impressions, clics, position moyenne, couverture d'index, Core Web Vitals. Les 5 métriques Search Console qui comptent vraiment pour votre SEO.",
}

export default function Page() {
  return <GoogleSearchConsoleMetriquesContent />
}
