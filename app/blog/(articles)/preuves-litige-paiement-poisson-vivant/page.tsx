import type { Metadata } from 'next'
import { PreuvesLitigePaiementContent } from './_content'

export const metadata: Metadata = {
  title: "Quelles preuves conserver pour gagner un litige de paiement sur un poisson vivant ?",
  openGraph: {
    images: [{ url: '/api/og?title=Quelles+preuves+conserver+pour+gagner+un+litige+de+paiement+sur+un+poisson+vivant&category=ERP+%26+Gestion+de+stock', width: 1200, height: 630 }],
  },
  description: "Un litige de paiement sur un animal vivant se gagne avec un dossier structuré : fiche du spécimen, photo horodatée, preuve de livraison liée à la commande. Voici quoi conserver et comment l'automatiser.",
}

export default function Page() {
  return <PreuvesLitigePaiementContent />
}
