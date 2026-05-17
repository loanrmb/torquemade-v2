import type { Metadata } from 'next'
import { BalisesMetaTitleDescriptionContent } from './_content'

export const metadata: Metadata = {
  title: "Balises meta title et description : le guide pratique 2025",
  description: "La balise title influence directement votre classement Google. La meta description influence votre taux de clic. Voici comment rédiger les deux correctement en 2025.",
}

export default function Page() {
  return <BalisesMetaTitleDescriptionContent />
}
