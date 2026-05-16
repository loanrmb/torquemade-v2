import type { Metadata } from 'next'
import { posts } from '@/lib/blog'
import { PostCard } from '@/components/blog/PostCard'

export const metadata: Metadata = {
  title: 'Blog — Torquemade',
  description: 'Ressources et analyses pour les professionnels du web, du CRM et du SEO. Sans jargon inutile.',
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ─── Hero ─────────────────────────────────────── */}
      <section className="border-b border-black px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-6 font-mono text-[10px] uppercase tracking-widest opacity-40">
            Blog
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Ressources pour<br />
            les professionnels<br />
            du web et du CRM.
          </h1>
          <p className="max-w-md font-mono text-sm opacity-40">
            Stratégies, analyses et retours d&apos;expérience — sans jargon inutile.
          </p>
        </div>
      </section>

      {/* ─── Posts grid ───────────────────────────────── */}
      <section className="px-6 py-16 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          {posts.length === 0 ? (
            <p className="font-mono text-sm opacity-40">Bientôt disponible.</p>
          ) : (
            <div className="grid grid-cols-1 gap-px border border-black bg-black md:grid-cols-2">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

    </main>
  )
}
