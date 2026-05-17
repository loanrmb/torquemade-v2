import type { Metadata } from 'next'
import { ReservationsActiviteNautiqueContent } from './_content'

export const metadata: Metadata = {
  title: "Comment gérer les réservations en ligne d'une activité nautique",
  description: "Location de jet-ski, paddle, bateau — les activités nautiques ont des contraintes spécifiques. Voici comment gérer les réservations en ligne efficacement.",
}

export default function Page() {
  return <ReservationsActiviteNautiqueContent />
}
