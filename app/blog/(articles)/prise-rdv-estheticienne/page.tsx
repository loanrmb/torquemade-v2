import type { Metadata } from 'next'
import { PriseRdvEstheticienneContent } from './_content'

export const metadata: Metadata = {
  title: "Prise de RDV en ligne : pourquoi c'est indispensable pour une esthéticienne",
  openGraph: {
    images: [{ url: '/api/og?title=Prise+de+RDV+en+ligne+%3A+pourquoi+c%27est+indispensable+pour+une+esth%C3%A9ticienne&category=crm', width: 1200, height: 630 }],
  },
  description: "Un formulaire de contact ne suffit plus. Voici pourquoi la prise de rendez-vous en ligne est devenue indispensable — et comment la mettre en place efficacement.",
}

export default function Page() {
  return <PriseRdvEstheticienneContent />
}
