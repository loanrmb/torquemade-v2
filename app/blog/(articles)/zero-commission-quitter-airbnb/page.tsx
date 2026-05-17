import type { Metadata } from 'next'
import { ZeroCommissionQuitterAirbnbContent } from './_content'

export const metadata: Metadata = {
  title: "Zéro commission : pourquoi les pros quittent Airbnb et Booking",
  description: "Jusqu'à 20 % de commission par réservation, des règles qui changent sans préavis. De plus en plus de professionnels reprennent le contrôle de leur canal de vente.",
}

export default function Page() {
  return <ZeroCommissionQuitterAirbnbContent />
}
