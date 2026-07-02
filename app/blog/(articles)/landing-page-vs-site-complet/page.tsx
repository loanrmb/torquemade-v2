import type { Metadata } from 'next'
import { LandingPageVsSiteCompletContent } from './_content'

export const metadata: Metadata = {
  title: 'Landing page vs site complet : quand opter pour quelle solution ?',
  openGraph: {
    images: [{ url: '/api/og?title=Landing+page+vs+site+complet+%3A+quand+opter+pour+quelle+solution+%3F&category=Web+%26+D%C3%A9veloppement', width: 1200, height: 630 }],
  },
  description: 'Une landing page ou un site complet ? La réponse dépend de votre objectif, de votre stade de développement et de ce que votre visiteur doit faire.',
}

export default function Page() {
  return <LandingPageVsSiteCompletContent />
}
