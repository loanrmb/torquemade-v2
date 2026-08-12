import type { Metadata } from 'next'
import { siteUrl } from '@/lib/site'
import { HomeContent } from './_content'

/**
 * Server wrapper around the homepage.
 *
 * The homepage body is a client component (useLang, Framer Motion, scroll
 * reveal), so it can't export `metadata` itself — which is why the site's most
 * linked page was the only one shipping no `rel="canonical"` at all. Same
 * page.tsx + _content.tsx split already used by /tanklogic and every blog
 * article.
 *
 * Only `alternates` is declared here: title, description, openGraph and
 * twitter are inherited from the root layout, which describes the homepage
 * anyway. Re-declaring `openGraph` here would *replace* the parent object
 * wholesale (Next.js merges metadata shallowly), silently dropping siteName,
 * locale and type.
 */
export const metadata: Metadata = {
  alternates: { canonical: siteUrl() },
}

export default function HomePage() {
  return <HomeContent />
}
