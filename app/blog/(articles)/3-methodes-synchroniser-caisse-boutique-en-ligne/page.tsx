import type { Metadata } from 'next'
import { TroisMethodesSynchronisationContent } from './_content'

export const metadata: Metadata = {
  title: "3 méthodes pour synchroniser sa caisse et sa boutique en ligne, et les risques que personne ne mentionne",
  openGraph: {
    images: [{ url: '/api/og?title=3+m%C3%A9thodes+pour+synchroniser+sa+caisse+et+sa+boutique+en+ligne+%E2%80%94+et+les+risques+que+personne+ne+mentionne&category=ERP+%26+Gestion+de+stock', width: 1200, height: 630 }],
  },
  description: "Export de fichiers, API éditeur, accès direct aux données : trois familles de solutions, leurs avantages, leurs limites et les risques contractuels et techniques associés.",
}

export default function Page() {
  return <TroisMethodesSynchronisationContent />
}
