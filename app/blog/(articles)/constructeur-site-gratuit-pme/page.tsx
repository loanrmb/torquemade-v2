import type { Metadata } from 'next'
import { ConstructeurSiteGratuitPmeContent } from './_content'

export const metadata: Metadata = {
  title: "Petite entreprise : pourquoi ne pas utiliser un constructeur de site gratuit",
  description: "Wix, Squarespace, Webflow — ils semblent séduisants. Mais pour une PME qui veut performer sur Google et convertir, voici ce que ces outils ne feront jamais.",
}

export default function Page() {
  return <ConstructeurSiteGratuitPmeContent />
}
