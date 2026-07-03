import type { Metadata } from 'next'
import { LogicielGestionStockAnimalerieContent } from './_content'

export const metadata: Metadata = {
  title: "Quel logiciel de gestion de stock choisir pour une animalerie aquatique en ligne ?",
  openGraph: {
    images: [{ url: '/api/og?title=Quel+logiciel+de+gestion+de+stock+pour+une+animalerie+aquatique+en+ligne&category=ERP+%26+Gestion+de+stock', width: 1200, height: 630 }],
  },
  description: "Les logiciels de stock généralistes gèrent des quantités. Une animalerie aquatique en ligne vend des spécimens uniques. Voici les critères qui comptent vraiment avant de choisir.",
}

export default function Page() {
  return <LogicielGestionStockAnimalerieContent />
}
