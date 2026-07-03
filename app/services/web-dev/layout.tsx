import { Metadata } from 'next'
import { strings } from '@/lib/strings'
import { SchemaRenderer } from '@/components/schema-renderer'
import { serviceSchema } from '@/lib/schema'

const meta = strings.fr.meta.webDev
const url = 'https://www.torquemade.com/services/web-dev'

const schema = serviceSchema({
  name: 'Sites web Next.js & Shopify',
  serviceType: 'Web development',
  slug: 'web-dev',
  description: meta.description,
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

export default function WebDevLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaRenderer schema={schema} />
      {children}
    </>
  )
}
