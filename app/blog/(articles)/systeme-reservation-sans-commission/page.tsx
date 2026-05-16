import type { Metadata } from 'next'
import { SystemeReservationContent } from './_content'

export const metadata: Metadata = {
  title: "Comment intégrer un système de réservation sans commission",
  description: "Planity, Booksy, ResaOnline prennent entre 1 % et 3 % de chaque réservation. Un système sur mesure intégré à votre site vous coûte moins et vous appartient.",
}

export default function Page() {
  return <SystemeReservationContent />
}
