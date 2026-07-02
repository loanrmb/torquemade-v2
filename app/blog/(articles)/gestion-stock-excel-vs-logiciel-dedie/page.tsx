import type { Metadata } from 'next'
import { GestionStockExcelVsLogicielDedieContent } from './_content'

export const metadata: Metadata = {
  title: "Gestion de stock sous Excel vs logiciel dédié : quand faire le saut ?",
  openGraph: {
    images: [{ url: '/api/og?title=Gestion+de+stock+sous+Excel+vs+logiciel+d%C3%A9di%C3%A9+%3A+quand+faire+le+saut+%3F&category=ERP+%26+Gestion+de+stock', width: 1200, height: 630 }],
  },
  description: "Excel suffit-il vraiment pour gérer votre stock ? Voici les signaux qui montrent qu'il est temps de passer à un vrai logiciel.",
}

export default function Page() {
  return <GestionStockExcelVsLogicielDedieContent />
}
