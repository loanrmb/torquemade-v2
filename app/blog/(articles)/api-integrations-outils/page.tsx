import type { Metadata } from 'next'
import { ApiIntegrationsOutilsContent } from './_content'

export const metadata: Metadata = {
  title: "API et intégrations : comment connecter vos outils sans coder",
  description: "Calendrier, paiement, CRM, email — vos outils peuvent communiquer entre eux sans écrire une ligne de code. Voici comment les connecter intelligemment.",
}

export default function Page() {
  return <ApiIntegrationsOutilsContent />
}
