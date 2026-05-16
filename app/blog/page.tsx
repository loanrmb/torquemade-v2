import type { Metadata } from 'next'
import { NavPill } from '@/components/nav-pill'
import { Footer } from '@/components/footer'
import { BlogHero } from '@/components/blog/BlogHero'
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
        <BlogHero />
        <BlogList />
      </main>
      <Footer />
    </>
  )
}
