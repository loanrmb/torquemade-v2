import type { Metadata } from 'next'
import { SiteWebEstheticienneContent } from './_content'

export const metadata: Metadata = {
  title: "Site web pour esthéticienne : ce qu'il faut absolument afficher",
  description: "Un site d'esthéticienne doit rassurer, montrer le savoir-faire et permettre la prise de RDV. Voici les éléments indispensables pour convertir dès la première visite.",
}

export default function Page() {
  return <SiteWebEstheticienneContent />
}
