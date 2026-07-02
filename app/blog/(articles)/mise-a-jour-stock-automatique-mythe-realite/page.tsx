import type { Metadata } from 'next'
import { MiseAJourStockAutomatiqueMytheRealiteContent } from './_content'

export const metadata: Metadata = {
  title: "Mon stock se met à jour tout seul sur mon site : mythe ou réalité ?",
  openGraph: {
    images: [{ url: '/api/og?title=Mon+stock+se+met+%C3%A0+jour+tout+seul+sur+mon+site+%3A+mythe+ou+r%C3%A9alit%C3%A9+%3F&category=ERP+%26+Gestion+de+stock', width: 1200, height: 630 }],
  },
  description: "Beaucoup en parlent, peu savent comment ça marche vraiment. On démêle le vrai du faux sur la mise à jour automatique du stock e-commerce.",
}

export default function Page() {
  return <MiseAJourStockAutomatiqueMytheRealiteContent />
}
