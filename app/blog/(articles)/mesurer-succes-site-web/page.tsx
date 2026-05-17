import type { Metadata } from 'next'
import { MesurerSuccesSiteWebContent } from './_content'

export const metadata: Metadata = {
  title: "Comment mesurer le succès d'un site web au-delà du trafic",
  description: "Le nombre de visiteurs n'est pas une mesure de succès. Voici les métriques qui indiquent si votre site convertit et génère vraiment de la valeur pour votre activité.",
}

export default function Page() {
  return <MesurerSuccesSiteWebContent />
}
