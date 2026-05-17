import type { Metadata } from 'next'
import { VtcReservationsSansApplicationContent } from './_content'

export const metadata: Metadata = {
  title: "Comment un VTC peut générer des réservations sans application tierce",
  description: "Dépendre d'Uber ou Bolt, c'est payer 25 % de commission et perdre le contact direct avec ses clients. Voici comment créer son propre canal de réservation.",
}

export default function Page() {
  return <VtcReservationsSansApplicationContent />
}
