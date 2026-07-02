import type { Metadata } from 'next'
import { EstheticienneValenciennesSeoContent } from './_content'

export const metadata: Metadata = {
  title: "Valenciennes esthéticienne : comment capter les clientes locales sur Google",
  openGraph: {
    images: [{ url: '/api/og?title=Valenciennes+esth%C3%A9ticienne+%3A+comment+capter+les+clientes+locales+sur+Google&category=SEO+%26+Contenu', width: 1200, height: 630 }],
  },
  description: "Se positionner sur «esthéticienne Valenciennes» demande une stratégie SEO locale précise. Voici les leviers qui font la différence dans une ville de taille moyenne.",
}

export default function Page() {
  return <EstheticienneValenciennesSeoContent />
}
