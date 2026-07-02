import type { Metadata } from 'next'
import { SiteWebChauffeurPriveContent } from './_content'

export const metadata: Metadata = {
  title: "Site web pour chauffeur privé : les éléments qui convertissent",
  openGraph: {
    images: [{ url: '/api/og?title=Site+web+pour+chauffeur+priv%C3%A9+%3A+les+%C3%A9l%C3%A9ments+qui+convertissent', width: 1200, height: 630 }],
  },
  description: "Un site de chauffeur privé doit rassurer, montrer le professionnalisme et permettre la réservation en moins de 3 clics. Voici les éléments indispensables.",
}

export default function Page() {
  return <SiteWebChauffeurPriveContent />
}
