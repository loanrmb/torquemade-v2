import type { Metadata } from 'next'
import { BlogEntrepriseTraficQualifieContent } from './_content'

export const metadata: Metadata = {
  title: "Comment un blog d'entreprise génère du trafic qualifié pendant des années",
  openGraph: {
    images: [{ url: '/api/og?title=Comment+un+blog+d%27entreprise+g%C3%A9n%C3%A8re+du+trafic+qualifi%C3%A9+pendant+des+ann%C3%A9es&category=SEO+%26+Contenu', width: 1200, height: 630 }],
  },
  description: "Un article bien référencé continue de générer des visites 3, 5, 10 ans après publication. Voici comment un blog d'entreprise devient un actif SEO durable.",
}

export default function Page() {
  return <BlogEntrepriseTraficQualifieContent />
}
