import type { Metadata } from 'next'
import { SystemeReservationContent } from './_content'

export const metadata: Metadata = {
  title: "Comment intégrer un système de réservation sans commission",
  openGraph: {
    images: [{ url: '/api/og?title=Comment+int%C3%A9grer+un+syst%C3%A8me+de+r%C3%A9servation+sans+commission&category=Web+%26+D%C3%A9veloppement', width: 1200, height: 630 }],
  },
  description: "Planity, Booksy, ResaOnline prennent entre 1 % et 3 % de chaque réservation. Un système sur mesure intégré à votre site vous coûte moins et vous appartient.",
}

export default function Page() {
  return <SystemeReservationContent />
}
