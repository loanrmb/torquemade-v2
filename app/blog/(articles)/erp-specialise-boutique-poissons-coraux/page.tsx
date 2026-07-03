import type { Metadata } from 'next'
import { ErpSpecialiseBoutiquePoissonsContent } from './_content'

export const metadata: Metadata = {
  title: "Existe-t-il un ERP spécialisé pour les boutiques de poissons et coraux ?",
  openGraph: {
    images: [{ url: '/api/og?title=Un+ERP+sp%C3%A9cialis%C3%A9+pour+les+boutiques+de+poissons+et+coraux&category=ERP+%26+Gestion+de+stock', width: 1200, height: 630 }],
  },
  description: "Les grands ERP généralistes ne modélisent pas des spécimens uniques ni la mortalité. Voici pourquoi les boutiques de poissons et coraux ont besoin d'un système dédié, et ce qu'il doit faire.",
}

export default function Page() {
  return <ErpSpecialiseBoutiquePoissonsContent />
}
