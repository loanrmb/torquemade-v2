import type { Metadata } from 'next'
import { CinqErreursSansLogicielGestionStockContent } from './_content'

export const metadata: Metadata = {
  title: "Les 5 erreurs qui vous font perdre de l'argent sans logiciel de gestion de stock",
  description: "Surstockage, démarque, ruptures, ressaisie, erreurs de commande : voici les 5 fuites silencieuses d'un commerce qui gère son stock à la main.",
}

export default function Page() {
  return <CinqErreursSansLogicielGestionStockContent />
}
