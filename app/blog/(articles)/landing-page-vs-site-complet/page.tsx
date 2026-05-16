import type { Metadata } from 'next'
import { LandingPageVsSiteCompletContent } from './_content'

export const metadata: Metadata = {
  title: 'Landing page vs site complet : quand opter pour quelle solution ?',
  description: 'Une landing page ou un site complet ? La réponse dépend de votre objectif, de votre stade de développement et de ce que votre visiteur doit faire.',
}

export default function Page() {
  return <LandingPageVsSiteCompletContent />
}
