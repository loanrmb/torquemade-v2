import type { Metadata } from 'next'
import { TarificationVtcFixeCompteurContent } from './_content'

export const metadata: Metadata = {
  title: "Tarification fixe vs compteur : comment l'afficher clairement en ligne",
  openGraph: {
    images: [{ url: '/api/og?title=Tarification+fixe+vs+compteur+%3A+comment+l%27afficher+clairement+en+ligne', width: 1200, height: 630 }],
  },
  description: "Le prix est le premier frein à la réservation VTC en ligne. Voici comment afficher votre tarification de façon claire, rassurante et efficace sur votre site.",
}

export default function Page() {
  return <TarificationVtcFixeCompteurContent />
}
