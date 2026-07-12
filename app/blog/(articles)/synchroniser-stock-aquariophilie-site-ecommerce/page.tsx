import type { Metadata } from 'next'
import { SchemaRenderer } from '@/components/schema-renderer'
import { blogPostingSchema } from '@/lib/schema'
import { posts } from '@/lib/blog'
import { SynchroniserStockAquariophilieContent } from './_content'

const ogImage = '/api/og?title=Synchroniser+le+stock+aquariophilie+avec+son+site+e-commerce&category=ERP+%26+Gestion+de+stock'
const post = posts.find((p) => p.slug === 'synchroniser-stock-aquariophilie-site-ecommerce')!

export const metadata: Metadata = {
  title: 'Comment synchroniser le stock de ma boutique aquariophilie avec mon site e-commerce ?',
  openGraph: {
    images: [{ url: ogImage, width: 1200, height: 630 }],
  },
  description: "Poissons et coraux sont des SKU uniques, pas des quantités fongibles. Voici pourquoi la synchronisation stock d'une boutique aquariophilie exige une architecture par spécimen, et comment la mettre en place.",
}

export default function Page() {
  return (
    <>
      <SchemaRenderer schema={blogPostingSchema(post, { image: ogImage })} />
      <SynchroniserStockAquariophilieContent />
    </>
  )
}
