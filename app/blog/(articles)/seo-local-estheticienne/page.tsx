import type { Metadata } from 'next'
import { SeoLocalEstheticienneContent } from './_content'

export const metadata: Metadata = {
  title: "SEO local pour une esthéticienne : se positionner dans sa ville",
  description: "«Esthéticienne Bordeaux», «institut beauté proche de moi» — voici comment capter des clientes locales via Google sans budget publicitaire.",
}

export default function Page() {
  return <SeoLocalEstheticienneContent />
}
