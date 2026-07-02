import type { Metadata } from 'next'
import { ChoisirAgenceWebBordeauxContent } from './_content'

export const metadata: Metadata = {
  title: "Comment choisir son agence web à Bordeaux (sans se faire avoir)",
  openGraph: {
    images: [{ url: '/api/og?title=Comment+choisir+son+agence+web+%C3%A0+Bordeaux+%28sans+se+faire+avoir%29&category=projets', width: 1200, height: 630 }],
  },
  description: "Tarifs opaques, sites génériques, délais non tenus — les mauvaises surprises existent. Voici comment choisir une agence web à Bordeaux en posant les bonnes questions.",
}

export default function Page() {
  return <ChoisirAgenceWebBordeauxContent />
}
