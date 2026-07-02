import type { Metadata } from 'next'
import { MaillageInterneSeoContent } from './_content'

export const metadata: Metadata = {
  title: "Maillage interne : la stratégie SEO que 90 % des sites ignorent",
  openGraph: {
    images: [{ url: '/api/og?title=Maillage+interne+%3A+la+strat%C3%A9gie+SEO+que+90+%25+des+sites+ignorent&category=SEO+%26+Contenu', width: 1200, height: 630 }],
  },
  description: "Le maillage interne est l'un des leviers SEO les plus sous-exploités. Un réseau de liens internes bien pensé renforce l'autorité de vos pages et guide Google efficacement.",
}

export default function Page() {
  return <MaillageInterneSeoContent />
}
