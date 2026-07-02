import type { Metadata } from 'next'
import { NextjsVsWordpressContent } from './_content'

export const metadata: Metadata = {
  title: "Pourquoi un site Next.js est plus rapide qu'un site WordPress",
  openGraph: {
    images: [{ url: '/api/og?title=Pourquoi+un+site+Next.js+est+plus+rapide+qu%27un+site+WordPress&category=Web+%26+D%C3%A9veloppement', width: 1200, height: 630 }],
  },
  description: "WordPress génère ses pages à la demande, Next.js les prépare à l'avance. Cette différence fondamentale explique tout — performances, SEO, Core Web Vitals.",
}

export default function Page() {
  return <NextjsVsWordpressContent />
}
