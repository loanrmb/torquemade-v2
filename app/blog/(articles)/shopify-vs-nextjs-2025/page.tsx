import type { Metadata } from 'next'
import { ShopifyVsNextjsContent } from './_content'

export const metadata: Metadata = {
  title: 'Shopify vs Next.js : lequel choisir pour votre commerce en 2026 ?',
  openGraph: {
    images: [{ url: '/api/og?title=Shopify+vs+Next.js+%3A+lequel+choisir+pour+votre+commerce+en+2026+%3F&category=Web+%26+D%C3%A9veloppement', width: 1200, height: 630 }],
  },
  description: 'Shopify ou Next.js pour votre e-commerce ? Nous comparons les deux solutions pour vous aider à faire le bon choix selon votre projet et vos ambitions.',
}

export default function Page() {
  return <ShopifyVsNextjsContent />
}
