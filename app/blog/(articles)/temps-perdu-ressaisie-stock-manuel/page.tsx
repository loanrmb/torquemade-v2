import type { Metadata } from 'next'
import { TempsPerduRessaisieStockManuelContent } from './_content'

export const metadata: Metadata = {
  title: "Combien de temps perdez-vous à ressaisir votre stock manuellement ?",
  description: "Saisir son stock à la main, c'est plusieurs heures par semaine qui partent en fumée. Calculons ensemble le coût réel et voyons comment l'automatiser.",
}

export default function Page() {
  return <TempsPerduRessaisieStockManuelContent />
}
