import type { Metadata } from 'next'
import { GoogleAdsVsSeoContent } from './_content'

export const metadata: Metadata = {
  title: "Google Ads vs SEO : où investir son budget digital en premier ?",
  openGraph: {
    images: [{ url: '/api/og?title=Google+Ads+vs+SEO+%3A+o%C3%B9+investir+son+budget+digital+en+premier+%3F&category=SEO+%26+Contenu', width: 1200, height: 630 }],
  },
  description: "Google Ads donne des résultats immédiats. Le SEO construit un actif durable. Voici comment décider où investir selon votre situation, votre budget et vos objectifs.",
}

export default function Page() {
  return <GoogleAdsVsSeoContent />
}
