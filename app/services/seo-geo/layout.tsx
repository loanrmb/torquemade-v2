import { Metadata } from 'next'
import { strings } from '@/lib/strings'
import { SchemaRenderer } from '@/components/schema-renderer'
import { serviceSchema } from '@/lib/schema'
import { siteUrl } from '@/lib/site'

const meta = strings.fr.meta.seoGeo
const url = siteUrl('/services/seo-geo')

const schema = serviceSchema({
  name: 'Référencement Google et visibilité IA (SEO & GEO)',
  serviceType: 'Search engine optimization and generative engine optimization',
  slug: 'seo-geo',
  description: meta.description,
  faq: strings.fr.seoGeo.faq,
})

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: url },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url,
    siteName: 'Torquemade',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: meta.title,
    description: meta.description,
  },
}

export default function SeoGeoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaRenderer schema={schema} />
      {children}
    </>
  )
}
