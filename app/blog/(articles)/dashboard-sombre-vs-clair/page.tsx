import type { Metadata } from 'next'
import { DashboardSombreVsClairContent } from './_content'

export const metadata: Metadata = {
  title: "Dashboard sombre vs clair : quel impact sur la productivité ?",
  description: "Thème sombre ou clair pour un tableau de bord professionnel ? Au-delà de l'esthétique, le choix a un impact réel sur la lisibilité et la fatigue visuelle.",
}

export default function Page() {
  return <DashboardSombreVsClairContent />
}
