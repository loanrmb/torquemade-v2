import type { Metadata } from 'next'
import { DashboardSombreVsClairContent } from './_content'

export const metadata: Metadata = {
  title: "Dashboard sombre vs clair : quel impact sur la productivité ?",
  openGraph: {
    images: [{ url: '/api/og?title=Dashboard+sombre+vs+clair+%3A+quel+impact+sur+la+productivit%C3%A9+%3F&category=crm', width: 1200, height: 630 }],
  },
  description: "Thème sombre ou clair pour un tableau de bord professionnel ? Au-delà de l'esthétique, le choix a un impact réel sur la lisibilité et la fatigue visuelle.",
}

export default function Page() {
  return <DashboardSombreVsClairContent />
}
