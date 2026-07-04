import type { Metadata } from 'next'
import { SeoLocal2025Content } from './_content'

export const metadata: Metadata = {
  title: "SEO local en 2025 : le guide complet pour les commerces de proximité",
  openGraph: {
    images: [{ url: '/api/og?title=SEO+local+en+2025+%3A+le+guide+complet+pour+les+commerces+de+proximit%C3%A9&category=SEO+%26+Contenu', width: 1200, height: 630 }],
  },
  description: "Google Business Profile, avis clients, mots-clés locaux, schema markup : tout ce qu'il faut maîtriser pour apparaître en tête des recherches locales en 2025.",
}

export default function Page() {
  return <SeoLocal2025Content />
}
