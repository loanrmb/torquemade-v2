import type { Metadata } from 'next'
import { SiteLocalSansClientsErreursContent } from './_content'

export const metadata: Metadata = {
  title: "Pourquoi 80 % des sites locaux ne génèrent aucun client (et comment éviter ça)",
  openGraph: {
    images: [{ url: '/api/og?title=Pourquoi+80+%25+des+sites+locaux+ne+g%C3%A9n%C3%A8rent+aucun+client+%28et+comment+%C3%A9viter+%C3%A7a%29&category=SEO+%26+Contenu', width: 1200, height: 630 }],
  },
  description: "La plupart des sites locaux existent mais ne travaillent pas. Voici les 5 erreurs qui empêchent un site de générer des clients — et comment les corriger.",
}

export default function Page() {
  return <SiteLocalSansClientsErreursContent />
}
