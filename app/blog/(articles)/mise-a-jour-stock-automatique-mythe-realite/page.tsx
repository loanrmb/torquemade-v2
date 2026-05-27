import type { Metadata } from 'next'
import { MiseAJourStockAutomatiqueMytheRealiteContent } from './_content'

export const metadata: Metadata = {
  title: "Mon stock se met à jour tout seul sur mon site : mythe ou réalité ?",
  description: "Beaucoup en parlent, peu savent comment ça marche vraiment. On démêle le vrai du faux sur la mise à jour automatique du stock e-commerce.",
}

export default function Page() {
  return <MiseAJourStockAutomatiqueMytheRealiteContent />
}
