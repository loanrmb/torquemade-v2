import type { Metadata } from 'next'
import { FonctionnalitesCrmServicesContent } from './_content'

export const metadata: Metadata = {
  title: "Les fonctionnalités indispensables d'un CRM pour une activité de services",
  description: "Pas toutes les fonctionnalités se valent. Pour une activité de services, voici les modules qui font vraiment la différence dans un CRM — et ceux à ignorer.",
}

export default function Page() {
  return <FonctionnalitesCrmServicesContent />
}
