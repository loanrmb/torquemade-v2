import type { Metadata } from 'next'
import { SiteLocalSansClientsErreursContent } from './_content'

export const metadata: Metadata = {
  title: "Pourquoi 80 % des sites locaux ne génèrent aucun client (et comment éviter ça)",
  description: "La plupart des sites locaux existent mais ne travaillent pas. Voici les 5 erreurs qui empêchent un site de générer des clients — et comment les corriger.",
}

export default function Page() {
  return <SiteLocalSansClientsErreursContent />
}
