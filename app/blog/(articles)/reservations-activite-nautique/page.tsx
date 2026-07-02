import type { Metadata } from 'next'
import { ReservationsActiviteNautiqueContent } from './_content'

export const metadata: Metadata = {
  title: "Comment gérer les réservations en ligne d'une activité nautique",
  openGraph: {
    images: [{ url: '/api/og?title=Comment+g%C3%A9rer+les+r%C3%A9servations+en+ligne+d%27une+activit%C3%A9+nautique&category=crm', width: 1200, height: 630 }],
  },
  description: "Location de jet-ski, paddle, bateau — les activités nautiques ont des contraintes spécifiques. Voici comment gérer les réservations en ligne efficacement.",
}

export default function Page() {
  return <ReservationsActiviteNautiqueContent />
}
