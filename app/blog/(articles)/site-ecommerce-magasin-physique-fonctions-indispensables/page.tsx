import type { Metadata } from 'next'
import { SiteEcommerceMagasinPhysiqueFonctionsContent } from './_content'

export const metadata: Metadata = {
  title: 'Site e-commerce pour un magasin physique : les 5 fonctions indispensables',
  openGraph: {
    images: [{ url: '/api/og?title=Site+e-commerce+pour+un+magasin+physique+%3A+les+5+fonctions+indispensables&category=ERP+%26+Gestion+de+stock', width: 1200, height: 630 }],
  },
  description:
    "Un site e-commerce pour un commerce physique n'a pas les mêmes priorités qu'un pure player. Voici les 5 fonctions qui font vraiment la différence quand vous avez un stock réel à gérer.",
}

export default function Page() {
  return <SiteEcommerceMagasinPhysiqueFonctionsContent />
}
