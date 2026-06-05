import type { Metadata } from 'next'
import { TroisMethodesSynchronisationContent } from './_content'

export const metadata: Metadata = {
  title: "3 méthodes pour synchroniser sa caisse et sa boutique en ligne — et les risques que personne ne mentionne",
  description: "Export de fichiers, API éditeur, accès direct aux données : trois familles de solutions, leurs avantages, leurs limites et les risques contractuels et techniques associés.",
}

export default function Page() {
  return <TroisMethodesSynchronisationContent />
}
