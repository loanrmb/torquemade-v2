import type { Metadata } from 'next'
import { SchemaRenderer } from '@/components/schema-renderer'
import { blogPostingSchema } from '@/lib/schema'
import { posts } from '@/lib/blog'
import { LogicielGestionStockAnimalerieContent } from './_content'

const ogImage = '/api/og?title=Quel+logiciel+de+gestion+de+stock+pour+une+animalerie+aquatique+en+ligne&category=ERP+%26+Gestion+de+stock'
const post = posts.find((p) => p.slug === 'logiciel-gestion-stock-animalerie-aquatique-en-ligne')!

export const metadata: Metadata = {
  title: "Quel logiciel de gestion de stock choisir pour une animalerie aquatique en ligne ?",
  openGraph: {
    images: [{ url: ogImage, width: 1200, height: 630 }],
  },
  description: "Les logiciels de stock généralistes gèrent des quantités. Une animalerie aquatique en ligne vend des spécimens uniques. Voici les critères qui comptent vraiment avant de choisir.",
}

export default function Page() {
  return (
    <>
      <SchemaRenderer schema={blogPostingSchema(post, { image: ogImage })} />
      <LogicielGestionStockAnimalerieContent />
    </>
  )
}
