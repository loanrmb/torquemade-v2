import type { Metadata } from 'next'
import { MicrositeMarqueMotoCont } from './_content'

export const metadata: Metadata = {
  title: "Microsite de marque moto : pourquoi créer un site dédié par marque ?",
  openGraph: {
    images: [{ url: '/api/og?title=Microsite+de+marque+moto+%3A+pourquoi+cr%C3%A9er+un+site+d%C3%A9di%C3%A9+par+marque+%3F', width: 1200, height: 630 }],
  },
  description: "Un microsite par marque permet de capter des requêtes précises que votre site principal ne peut pas cibler. Voici pourquoi et comment l'utiliser en concession moto.",
}

export default function Page() {
  return <MicrositeMarqueMotoCont />
}
