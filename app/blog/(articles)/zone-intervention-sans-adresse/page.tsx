import type { Metadata } from 'next'
import { ZoneInterventionSansAdresseContent } from './_content'

export const metadata: Metadata = {
  title: "Comment afficher sa zone d'intervention sans donner son adresse exacte",
  openGraph: {
    images: [{ url: '/api/og?title=Comment+afficher+sa+zone+d%27intervention+sans+donner+son+adresse+exacte&category=SEO+%26+Contenu', width: 1200, height: 630 }],
  },
  description: "Beaucoup de professionnels itinérants ne veulent pas publier leur adresse personnelle. Voici comment indiquer votre zone de service sans compromettre votre vie privée.",
}

export default function Page() {
  return <ZoneInterventionSansAdresseContent />
}
