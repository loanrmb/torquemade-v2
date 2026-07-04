import type { Metadata } from 'next'
import { ApiIntegrationsOutilsContent } from './_content'

export const metadata: Metadata = {
  title: "API et intégrations : comment connecter vos outils sans coder",
  openGraph: {
    images: [{ url: '/api/og?title=API+et+int%C3%A9grations+%3A+comment+connecter+vos+outils+sans+coder&category=crm', width: 1200, height: 630 }],
  },
  description: "Calendrier, paiement, CRM, email : vos outils peuvent communiquer entre eux sans écrire une ligne de code. Voici comment les connecter intelligemment.",
}

export default function Page() {
  return <ApiIntegrationsOutilsContent />
}
