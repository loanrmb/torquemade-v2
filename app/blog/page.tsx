import type { Metadata } from 'next'
import { NavPill } from '@/components/nav-pill'
import { Footer } from '@/components/footer'
import { BlogList } from '@/components/blog/BlogList'

export const metadata: Metadata = {
  title: 'Blog — Torquemade',
  description: 'Ressources et analyses pour les professionnels du web, du CRM et du SEO.',
}

export default function BlogPage() {
  return (
    <>
      <NavPill />
      <main className="min-h-screen bg-bg-primary">

        {/* Hero — centré */}
        <section className="pt-36 pb-16 px-6 text-center">
          <p className="font-mono text-[10px] uppercase tracking-widest opacity-40 mb-4">Blog</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6" style={{ color: 'hsl(var(--text-primary))' }}>
            Dernières ressources.
          </h1>
          <p className="font-mono text-sm opacity-40 max-w-sm mx-auto">
            Stratégies, analyses et retours d&apos;expérience — sans jargon inutile.
          </p>
        </section>

        {/* Liste filtrée — client component */}
        <BlogList />

      </main>
      <Footer />
    </>
  )
}
