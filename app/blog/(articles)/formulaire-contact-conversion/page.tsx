import type { Metadata } from 'next'
import { FormulaireContactContent } from './_content'

export const metadata: Metadata = {
  title: "Pourquoi votre formulaire de contact ne convertit pas (et comment le fixer)",
  description: "Un formulaire trop long, mal placé ou sans retour visuel fait fuir les visiteurs. Voici les erreurs les plus fréquentes et comment les corriger.",
}

export default function Page() {
  return <FormulaireContactContent />
}
