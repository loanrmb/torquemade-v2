import type { Metadata } from 'next'
import { FormulaireContactContent } from './_content'

export const metadata: Metadata = {
  title: "Pourquoi votre formulaire de contact ne convertit pas (et comment le fixer)",
  openGraph: {
    images: [{ url: '/api/og?title=Pourquoi+votre+formulaire+de+contact+ne+convertit+pas+%28et+comment+le+fixer%29&category=Web+%26+D%C3%A9veloppement', width: 1200, height: 630 }],
  },
  description: "Un formulaire trop long, mal placé ou sans retour visuel fait fuir les visiteurs. Voici les erreurs les plus fréquentes et comment les corriger.",
}

export default function Page() {
  return <FormulaireContactContent />
}
