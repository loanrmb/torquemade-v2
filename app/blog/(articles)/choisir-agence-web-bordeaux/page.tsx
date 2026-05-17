import type { Metadata } from 'next'
import { ChoisirAgenceWebBordeauxContent } from './_content'

export const metadata: Metadata = {
  title: "Comment choisir son agence web à Bordeaux (sans se faire avoir)",
  description: "Tarifs opaques, sites génériques, délais non tenus — les mauvaises surprises existent. Voici comment choisir une agence web à Bordeaux en posant les bonnes questions.",
}

export default function Page() {
  return <ChoisirAgenceWebBordeauxContent />
}
