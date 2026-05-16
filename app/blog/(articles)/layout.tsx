export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">

      {/* ─── Back nav ─────────────────────────────────── */}
      <div className="border-b border-black px-6 py-5 md:px-12 lg:px-24">
        <a
          href="/blog"
          className="font-mono text-[10px] uppercase tracking-widest opacity-40 transition-opacity hover:opacity-100"
        >
          ← Blog
        </a>
      </div>

      {/* ─── Article body ─────────────────────────────── */}
      <article className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        {children}
      </article>

      {/* ─── CTA footer ───────────────────────────────── */}
      <div className="border-t border-black bg-black px-6 py-16 text-white md:px-12 lg:px-24">
        <div className="mx-auto max-w-2xl">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-widest opacity-40">
            Un projet ?
          </p>
          <h2 className="mb-8 text-2xl font-bold leading-snug md:text-3xl">
            Parlons de votre site web ou de votre CRM.
          </h2>
          <a
            href="/contact"
            className="inline-block border border-white px-6 py-3 font-mono text-xs uppercase tracking-widest transition-colors duration-200 hover:bg-white hover:text-black"
          >
            Prendre contact →
          </a>
        </div>
      </div>

    </div>
  )
}
