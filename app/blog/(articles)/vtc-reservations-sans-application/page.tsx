import type { Metadata } from 'next'
import { VtcReservationsSansApplicationContent } from './_content'

export const metadata: Metadata = {
  title: "Comment un VTC peut générer des réservations sans application tierce",
  openGraph: {
    images: [{ url: '/api/og?title=Comment+un+VTC+peut+g%C3%A9n%C3%A9rer+des+r%C3%A9servations+sans+application+tierce&category=crm', width: 1200, height: 630 }],
  },
  description: "Dépendre d'Uber ou Bolt, c'est payer 25 % de commission et perdre le contact direct avec ses clients. Voici comment créer son propre canal de réservation.",
}

export default function Page() {
  return <VtcReservationsSansApplicationContent />
}
