import type { Metadata } from 'next'
import { GoogleAdsVsSeoContent } from './_content'

export const metadata: Metadata = {
  title: "Google Ads vs SEO : où investir son budget digital en premier ?",
  description: "Google Ads donne des résultats immédiats. Le SEO construit un actif durable. Voici comment décider où investir selon votre situation, votre budget et vos objectifs.",
}

export default function Page() {
  return <GoogleAdsVsSeoContent />
}
