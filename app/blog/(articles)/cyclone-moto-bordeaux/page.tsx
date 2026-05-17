import type { Metadata } from 'next'
import { CycloneMotoBordeauxContent } from './_content'

export const metadata: Metadata = {
  title: "Cyclone moto Bordeaux : tout ce qu'il faut savoir sur la marque",
  description: "Cyclone est une marque de motos distribuée en France, disponible à Bordeaux. Gamme, tarifs, points forts — tout ce qu'il faut savoir avant de visiter le concessionnaire.",
}

export default function Page() {
  return <CycloneMotoBordeauxContent />
}
