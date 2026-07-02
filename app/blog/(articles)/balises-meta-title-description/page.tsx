import type { Metadata } from 'next'
import { BalisesMetaTitleDescriptionContent } from './_content'

export const metadata: Metadata = {
  title: "Balises meta title et description : le guide pratique 2025",
  openGraph: {
    images: [{ url: '/api/og?title=Balises+meta+title+et+description+%3A+le+guide+pratique+2025&category=SEO+%26+Contenu', width: 1200, height: 630 }],
  },
  description: "Meta descriptions & titles that rank AND get clicks: templates + examples",
}

export default function Page() {
  return <BalisesMetaTitleDescriptionContent />
}
