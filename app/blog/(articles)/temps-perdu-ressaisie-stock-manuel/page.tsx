import type { Metadata } from 'next'
import { TempsPerduRessaisieStockManuelContent } from './_content'

export const metadata: Metadata = {
  title: "Combien de temps perdez-vous à ressaisir votre stock manuellement ?",
  openGraph: {
    images: [{ url: '/api/og?title=Combien+de+temps+perdez-vous+%C3%A0+ressaisir+votre+stock+manuellement+%3F&category=ERP+%26+Gestion+de+stock', width: 1200, height: 630 }],
  },
  description: "Saisir son stock à la main, c'est plusieurs heures par semaine qui partent en fumée. Calculons ensemble le coût réel et voyons comment l'automatiser.",
}

export default function Page() {
  return <TempsPerduRessaisieStockManuelContent />
}
