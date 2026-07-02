import type { Metadata } from 'next'
import { FicheProduitMotoRedactionContent } from './_content'

export const metadata: Metadata = {
  title: "Fiche produit moto : comment rédiger une description qui vend",
  openGraph: {
    images: [{ url: '/api/og?title=Fiche+produit+moto+%3A+comment+r%C3%A9diger+une+description+qui+vend', width: 1200, height: 630 }],
  },
  description: "Une fiche produit moto ne doit pas juste lister les caractéristiques techniques. Elle doit raconter pourquoi cette moto correspond au besoin du client.",
}

export default function Page() {
  return <FicheProduitMotoRedactionContent />
}
