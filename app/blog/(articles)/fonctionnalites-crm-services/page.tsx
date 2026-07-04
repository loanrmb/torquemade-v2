import type { Metadata } from 'next'
import { FonctionnalitesCrmServicesContent } from './_content'

export const metadata: Metadata = {
  title: "Les fonctionnalités indispensables d'un CRM pour une activité de services",
  openGraph: {
    images: [{ url: '/api/og?title=Les+fonctionnalit%C3%A9s+indispensables+d%27un+CRM+pour+une+activit%C3%A9+de+services&category=crm', width: 1200, height: 630 }],
  },
  description: "Pas toutes les fonctionnalités se valent. Pour une activité de services, voici les modules qui font vraiment la différence dans un CRM, et ceux à ignorer.",
}

export default function Page() {
  return <FonctionnalitesCrmServicesContent />
}
