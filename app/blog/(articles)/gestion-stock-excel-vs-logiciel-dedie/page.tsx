import type { Metadata } from 'next'
import { GestionStockExcelVsLogicielDedieContent } from './_content'

export const metadata: Metadata = {
  title: "Gestion de stock sous Excel vs logiciel dédié : quand faire le saut ?",
  description: "Excel suffit-il vraiment pour gérer votre stock ? Voici les signaux qui montrent qu'il est temps de passer à un vrai logiciel.",
}

export default function Page() {
  return <GestionStockExcelVsLogicielDedieContent />
}
