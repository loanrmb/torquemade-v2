import type { Metadata } from 'next'
import { SeoLocalEstheticienneContent } from './_content'

export const metadata: Metadata = {
  title: "SEO local pour une esthéticienne : se positionner dans sa ville",
  openGraph: {
    images: [{ url: '/api/og?title=SEO+local+pour+une+esth%C3%A9ticienne+%3A+se+positionner+dans+sa+ville&category=SEO+%26+Contenu', width: 1200, height: 630 }],
  },
  description: "Local SEO for beauty salons: Google rank fast + attract local clients",
}

export default function Page() {
  return <SeoLocalEstheticienneContent />
}
