import type { Metadata } from 'next'
import { SiteSurMesureVsTemplateContent } from './_content'

export const metadata: Metadata = {
  title: 'Site web sur mesure vs template : ce que votre client voit vraiment',
  openGraph: {
    images: [{ url: '/api/og?title=Site+web+sur+mesure+vs+template+%3A+ce+que+votre+client+voit+vraiment&category=Web+%26+D%C3%A9veloppement', width: 1200, height: 630 }],
  },
  description: 'Un template peut ressembler à un site professionnel. Mais ce que voit votre client — et ce que lit Google — raconte une autre histoire.',
}

export default function Page() {
  return <SiteSurMesureVsTemplateContent />
}
