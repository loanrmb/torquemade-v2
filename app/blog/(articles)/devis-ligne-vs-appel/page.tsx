import type { Metadata } from 'next'
import { DevisLigneVsAppelContent } from './_content'

export const metadata: Metadata = {
  title: "Devis en ligne vs devis sur appel : lequel convertit le mieux ?",
  description: "Formulaire de devis immédiat ou appel téléphonique d'abord ? La réponse dépend de votre secteur, de votre ticket moyen et du profil de votre client idéal.",
}

export default function Page() {
  return <DevisLigneVsAppelContent />
}
