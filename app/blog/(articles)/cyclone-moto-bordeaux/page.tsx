import type { Metadata } from 'next'
import { CycloneMotoBordeauxContent } from './_content'

export const metadata: Metadata = {
  title: "Cyclone moto Bordeaux : tout ce qu'il faut savoir sur la marque",
  openGraph: {
    images: [{ url: '/api/og?title=Cyclone+moto+Bordeaux+%3A+tout+ce+qu%27il+faut+savoir+sur+la+marque', width: 1200, height: 630 }],
  },
  description: "Cyclone est une marque de motos distribuée en France, disponible à Bordeaux. Gamme, tarifs, points forts — tout ce qu'il faut savoir avant de visiter le concessionnaire.",
}

export default function Page() {
  return <CycloneMotoBordeauxContent />
}
