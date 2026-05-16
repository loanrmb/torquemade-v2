import type { Metadata } from 'next'
import { NextjsVsWordpressContent } from './_content'

export const metadata: Metadata = {
  title: "Pourquoi un site Next.js est plus rapide qu'un site WordPress",
  description: "WordPress génère ses pages à la demande, Next.js les prépare à l'avance. Cette différence fondamentale explique tout — performances, SEO, Core Web Vitals.",
}

export default function Page() {
  return <NextjsVsWordpressContent />
}
