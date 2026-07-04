import type { Metadata } from 'next'
import { ConstructeurSiteGratuitPmeContent } from './_content'

export const metadata: Metadata = {
  title: "Petite entreprise : pourquoi ne pas utiliser un constructeur de site gratuit",
  openGraph: {
    images: [{ url: '/api/og?title=Petite+entreprise+%3A+pourquoi+ne+pas+utiliser+un+constructeur+de+site+gratuit&category=projets', width: 1200, height: 630 }],
  },
  description: "Wix, Squarespace, Webflow : ils semblent séduisants. Mais pour une PME qui veut performer sur Google et convertir, voici ce que ces outils ne feront jamais.",
}

export default function Page() {
  return <ConstructeurSiteGratuitPmeContent />
}
