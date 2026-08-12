import type { Metadata } from 'next'
import { siteUrl } from '@/lib/site'

/**
 * app/about/page.tsx is a client component (useLang + scroll reveal), so it
 * can't export `metadata` itself — without this layout the page silently
 * inherits the homepage title/description from the root layout.
 *
 * Title uses a colon, matching /blog and /contact. Em dashes are not used
 * anywhere in this project.
 */
const url = siteUrl('/about')
const title = 'À propos : studio web et CRM à Bordeaux | Torquemade'
const description =
  'Un seul interlocuteur du brief au lancement. Sites sur mesure, CRM, référencement Google et visibilité dans les réponses IA.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    siteName: 'Torquemade',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
