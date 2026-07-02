import type { Metadata } from 'next'
import { SiteMobileFirstContent } from './_content'

export const metadata: Metadata = {
  title: 'Pourquoi votre site doit être mobile-first en 2025',
  openGraph: {
    images: [{ url: '/api/og?title=Pourquoi+votre+site+doit+%C3%AAtre+mobile-first+en+2025&category=Web+%26+D%C3%A9veloppement', width: 1200, height: 630 }],
  },
  description: '63 % du trafic web mondial vient du mobile. Google indexe en priorité la version mobile de votre site. Ce que ça implique concrètement pour votre présence en ligne.',
}

export default function Page() {
  return <SiteMobileFirstContent />
}
