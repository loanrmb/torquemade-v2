import type { Metadata } from 'next'
import { FicheProduitMotoRedactionContent } from './_content'

export const metadata: Metadata = {
  title: "Fiche produit moto : comment rédiger une description qui vend",
  description: "Une fiche produit moto ne doit pas juste lister les caractéristiques techniques. Elle doit raconter pourquoi cette moto correspond au besoin du client.",
}

export default function Page() {
  return <FicheProduitMotoRedactionContent />
}
