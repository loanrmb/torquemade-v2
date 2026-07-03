import type { Metadata } from 'next'
import { AutomatiserSuiviMortaliteContent } from './_content'

export const metadata: Metadata = {
  title: "Comment automatiser le suivi de mortalité pour mon stock en ligne ?",
  openGraph: {
    images: [{ url: '/api/og?title=Automatiser+le+suivi+de+mortalit%C3%A9+pour+son+stock+en+ligne&category=ERP+%26+Gestion+de+stock', width: 1200, height: 630 }],
  },
  description: "La mortalité doit retirer une unité précise de la vente en temps réel, pas via un tableur du dimanche soir. Voici comment câbler le suivi de mortalité dans votre synchro de stock en ligne.",
}

export default function Page() {
  return <AutomatiserSuiviMortaliteContent />
}
