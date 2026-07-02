import type { Metadata } from 'next'
import { QuelLogicielGestionStockCommerce2026Content } from './_content'

export const metadata: Metadata = {
  title: "Quel logiciel de gestion de stock pour un commerce physique en 2026 ?",
  openGraph: {
    images: [{ url: '/api/og?title=Quel+logiciel+de+gestion+de+stock+pour+un+commerce+physique+en+2026+%3F&category=ERP+%26+Gestion+de+stock', width: 1200, height: 630 }],
  },
  description: "Cegid, Hiboutik, EBP, Tactill, Odoo… Comment choisir le bon logiciel de stock selon votre taille, votre budget et vos besoins de connexion e-commerce.",
}

export default function Page() {
  return <QuelLogicielGestionStockCommerce2026Content />
}
