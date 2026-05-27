import type { Metadata } from 'next'
import { SynchronisationStockTempsReelContent } from './_content'

export const metadata: Metadata = {
  title: "Synchronisation stock en temps réel : comment ça marche et pourquoi c'est indispensable",
  description: "Webhooks, API, push automatique : on démystifie la synchronisation stock temps réel entre votre logiciel de caisse et votre site e-commerce.",
}

export default function Page() {
  return <SynchronisationStockTempsReelContent />
}
