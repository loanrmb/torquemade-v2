import type { Metadata } from 'next'
import { VogeMotoBordeauxContent } from './_content'

export const metadata: Metadata = {
  title: "Voge moto Bordeaux : les modèles disponibles en Gironde",
  description: "Voge propose une gamme de motos modernes à des tarifs accessibles. Découvrez les modèles disponibles en Gironde, leurs caractéristiques et où les essayer à Bordeaux.",
}

export default function Page() {
  return <VogeMotoBordeauxContent />
}
