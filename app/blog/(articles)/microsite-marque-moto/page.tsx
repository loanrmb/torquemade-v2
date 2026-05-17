import type { Metadata } from 'next'
import { MicrositeMarqueMotoCont } from './_content'

export const metadata: Metadata = {
  title: "Microsite de marque moto : pourquoi créer un site dédié par marque ?",
  description: "Un microsite par marque permet de capter des requêtes précises que votre site principal ne peut pas cibler. Voici pourquoi et comment l'utiliser en concession moto.",
}

export default function Page() {
  return <MicrositeMarqueMotoCont />
}
