import type { Metadata } from 'next'
import { TarificationVtcFixeCompteurContent } from './_content'

export const metadata: Metadata = {
  title: "Tarification fixe vs compteur : comment l'afficher clairement en ligne",
  description: "Le prix est le premier frein à la réservation VTC en ligne. Voici comment afficher votre tarification de façon claire, rassurante et efficace sur votre site.",
}

export default function Page() {
  return <TarificationVtcFixeCompteurContent />
}
