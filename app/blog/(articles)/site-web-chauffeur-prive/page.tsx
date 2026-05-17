import type { Metadata } from 'next'
import { SiteWebChauffeurPriveContent } from './_content'

export const metadata: Metadata = {
  title: "Site web pour chauffeur privé : les éléments qui convertissent",
  description: "Un site de chauffeur privé doit rassurer, montrer le professionnalisme et permettre la réservation en moins de 3 clics. Voici les éléments indispensables.",
}

export default function Page() {
  return <SiteWebChauffeurPriveContent />
}
