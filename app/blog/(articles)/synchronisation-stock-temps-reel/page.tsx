import type { Metadata } from 'next'
import { SynchronisationStockTempsReelContent } from './_content'

export const metadata: Metadata = {
  title: "Synchronisation stock en temps réel : comment ça marche et pourquoi c'est indispensable",
  openGraph: {
    images: [{ url: '/api/og?title=Synchronisation+stock+en+temps+r%C3%A9el+%3A+comment+%C3%A7a+marche+et+pourquoi+c%27est+indispensable&category=ERP+%26+Gestion+de+stock', width: 1200, height: 630 }],
  },
  description: "Webhooks, API, push automatique : on démystifie la synchronisation stock temps réel entre votre logiciel de caisse et votre site e-commerce.",
}

export default function Page() {
  return <SynchronisationStockTempsReelContent />
}
