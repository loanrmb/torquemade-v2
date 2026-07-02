import type { Metadata } from 'next'
import { NetlinkingBacklinksContent } from './_content'

export const metadata: Metadata = {
  title: "Netlinking : comment obtenir des backlinks sans spammer personne",
  openGraph: {
    images: [{ url: '/api/og?title=Netlinking+%3A+comment+obtenir+des+backlinks+sans+spammer+personne&category=SEO+%26+Contenu', width: 1200, height: 630 }],
  },
  description: "Les backlinks restent l'un des signaux SEO les plus puissants. Voici comment en obtenir naturellement, sans techniques black-hat ni spam de masse.",
}

export default function Page() {
  return <NetlinkingBacklinksContent />
}
