import type { Metadata } from 'next'
import { AutomatiserPriseRdvArtisanContent } from './_content'

export const metadata: Metadata = {
  title: "Comment automatiser la prise de rendez-vous en ligne pour un artisan",
  description: "Appointment booking without Calendly: custom system for artisans & service pros",
}

export default function Page() {
  return <AutomatiserPriseRdvArtisanContent />
}
