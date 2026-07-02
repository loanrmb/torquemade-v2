import type { Metadata } from 'next'
import { ImpressionsGoogleContent } from './_content'

export const metadata: Metadata = {
  title: "Comment passer de 0 à 800 000 impressions Google sans publicité",
  openGraph: {
    images: [{ url: '/api/og?title=Comment+passer+de+0+%C3%A0+800+000+impressions+Google+sans+publicit%C3%A9&category=SEO+%26+Contenu', width: 1200, height: 630 }],
  },
  description: "Pas un euro en Google Ads. Sprint Motors est passé de zéro à 791 000 impressions organiques en moins de 18 mois. Voici exactement comment.",
}

export default function Page() {
  return <ImpressionsGoogleContent />
}
