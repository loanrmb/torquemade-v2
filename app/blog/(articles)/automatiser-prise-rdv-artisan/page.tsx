import type { Metadata } from 'next'
import { AutomatiserPriseRdvArtisanContent } from './_content'

export const metadata: Metadata = {
  title: "Comment automatiser la prise de rendez-vous en ligne pour un artisan",
  description: "Finies les heures perdues au téléphone à caler des RDV. Voici comment un artisan peut automatiser sa prise de rendez-vous en ligne sans logiciel complexe.",
}

export default function Page() {
  return <AutomatiserPriseRdvArtisanContent />
}
