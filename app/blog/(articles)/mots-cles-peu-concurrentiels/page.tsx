import type { Metadata } from 'next'
import { MotsClesPeuConcurrentielsContent } from './_content'

export const metadata: Metadata = {
  title: "Comment trouver des mots-clés peu concurrentiels dans votre niche",
  description: "Cibler les bons mots-clés change tout. Voici comment identifier des requêtes à fort potentiel et faible concurrence — même sans outil payant.",
}

export default function Page() {
  return <MotsClesPeuConcurrentielsContent />
}
