import type { Metadata } from 'next'
import { NetlinkingBacklinksContent } from './_content'

export const metadata: Metadata = {
  title: "Netlinking : comment obtenir des backlinks sans spammer personne",
  description: "Les backlinks restent l'un des signaux SEO les plus puissants. Voici comment en obtenir naturellement, sans techniques black-hat ni spam de masse.",
}

export default function Page() {
  return <NetlinkingBacklinksContent />
}
