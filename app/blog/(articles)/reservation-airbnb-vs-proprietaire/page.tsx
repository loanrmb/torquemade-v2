import type { Metadata } from 'next'
import { ReservationAirbnbVsPropriétaireContent } from './_content'

export const metadata: Metadata = {
  title: "Système de réservation Airbnb vs solution propriétaire : bilan 2025",
  openGraph: {
    images: [{ url: '/api/og?title=Syst%C3%A8me+de+r%C3%A9servation+Airbnb+vs+solution+propri%C3%A9taire+%3A+bilan+2025&category=crm', width: 1200, height: 630 }],
  },
  description: "Airbnb et Booking apportent de la visibilité mais prennent jusqu'à 20 % de commission. Une solution propriétaire coûte moins et vous appartient. Comparatif honnête.",
}

export default function Page() {
  return <ReservationAirbnbVsPropriétaireContent />
}
