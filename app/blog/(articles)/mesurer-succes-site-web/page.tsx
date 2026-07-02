import type { Metadata } from 'next'
import { MesurerSuccesSiteWebContent } from './_content'

export const metadata: Metadata = {
  title: "Comment mesurer le succès d'un site web au-delà du trafic",
  openGraph: {
    images: [{ url: '/api/og?title=Comment+mesurer+le+succ%C3%A8s+d%27un+site+web+au-del%C3%A0+du+trafic&category=projets', width: 1200, height: 630 }],
  },
  description: "Le nombre de visiteurs n'est pas une mesure de succès. Voici les métriques qui indiquent si votre site convertit et génère vraiment de la valeur pour votre activité.",
}

export default function Page() {
  return <MesurerSuccesSiteWebContent />
}
