import type { Metadata } from 'next'
import { ZeroCommissionQuitterAirbnbContent } from './_content'

export const metadata: Metadata = {
  title: "Zéro commission : pourquoi les pros quittent Airbnb et Booking",
  openGraph: {
    images: [{ url: '/api/og?title=Z%C3%A9ro+commission+%3A+pourquoi+les+pros+quittent+Airbnb+et+Booking&category=crm', width: 1200, height: 630 }],
  },
  description: "Jusqu'à 20 % de commission par réservation, des règles qui changent sans préavis. De plus en plus de professionnels reprennent le contrôle de leur canal de vente.",
}

export default function Page() {
  return <ZeroCommissionQuitterAirbnbContent />
}
