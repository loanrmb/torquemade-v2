import type { Metadata } from 'next'
import { ReservationAirbnbVsPropriétaireContent } from './_content'

export const metadata: Metadata = {
  title: "Système de réservation Airbnb vs solution propriétaire : bilan 2025",
  description: "Airbnb et Booking apportent de la visibilité mais prennent jusqu'à 20 % de commission. Une solution propriétaire coûte moins et vous appartient. Comparatif honnête.",
}

export default function Page() {
  return <ReservationAirbnbVsPropriétaireContent />
}
