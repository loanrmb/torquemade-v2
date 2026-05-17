import type { Metadata } from 'next'
import { BordeauxRideContent } from './_content'

export const metadata: Metadata = {
  title: "Comment Bordeaux Ride a construit son système de réservation zéro commission",
  description: "Bordeaux Ride propose des trajets premium en Gironde. Plutôt que de dépendre des plateformes, ils ont construit leur propre système de réservation. Retour d'expérience.",
}

export default function Page() {
  return <BordeauxRideContent />
}
