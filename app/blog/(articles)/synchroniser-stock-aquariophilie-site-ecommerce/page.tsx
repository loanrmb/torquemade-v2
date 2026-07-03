import type { Metadata } from 'next'
import { SynchroniserStockAquariophilieContent } from './_content'

export const metadata: Metadata = {
  title: 'Comment synchroniser le stock de ma boutique aquariophilie avec mon site e-commerce ?',
  openGraph: {
    images: [{ url: '/api/og?title=Synchroniser+le+stock+aquariophilie+avec+son+site+e-commerce&category=ERP+%26+Gestion+de+stock', width: 1200, height: 630 }],
  },
  description: "Poissons et coraux sont des SKU uniques, pas des quantités fongibles. Voici pourquoi la synchronisation stock d'une boutique aquariophilie exige une architecture par spécimen, et comment la mettre en place.",
}

export default function Page() {
  return <SynchroniserStockAquariophilieContent />
}
