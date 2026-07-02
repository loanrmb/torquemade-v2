import type { Metadata } from 'next'
import { VogeMotoBordeauxContent } from './_content'

export const metadata: Metadata = {
  title: "Voge moto Bordeaux : les modèles disponibles en Gironde",
  openGraph: {
    images: [{ url: '/api/og?title=Voge+moto+Bordeaux+%3A+les+mod%C3%A8les+disponibles+en+Gironde', width: 1200, height: 630 }],
  },
  description: "Voge propose une gamme de motos modernes à des tarifs accessibles. Découvrez les modèles disponibles en Gironde, leurs caractéristiques et où les essayer à Bordeaux.",
}

export default function Page() {
  return <VogeMotoBordeauxContent />
}
