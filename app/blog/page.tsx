import type { Metadata } from 'next'
import { NavPill } from '@/components/nav-pill'
import { Footer } from '@/components/footer'
import { BlogHero } from '@/components/blog/BlogHero'
import { BlogList } from '@/components/blog/BlogList'
import { BlogFilterProvider } from '@/components/blog/blog-filters'

const url = 'https://www.torquemade.com/blog'
const title = 'Blog : SEO, CRM et connexion ERP | Torquemade'
const description =
  "Analyses et retours d'expérience sur le référencement, les CRM sur mesure et la synchronisation stock ERP vers e-commerce."

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

export default function BlogPage() {
  return (
    <>
      <NavPill />
      <main className="min-h-screen bg-bg-primary">
        <BlogHero />
        {/* No Suspense boundary here on purpose: BlogList must prerender.
            The provider owns the one component that reads useSearchParams and
            wraps it in its own Suspense, so only that (empty) subtree bails
            out of static rendering. */}
        <BlogFilterProvider>
          <BlogList />
        </BlogFilterProvider>
      </main>
      <Footer />
    </>
  )
}
