import { NavPill } from '@/components/nav-pill'
import { Footer } from '@/components/footer'

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavPill />
      <div className="min-h-screen bg-bg-primary">

        {/* Retour blog */}
        <div className="pt-28 pb-6 px-6 md:px-12 lg:px-24" style={{ borderBottom: '1px solid hsl(var(--border-subtle))' }}>
          
            href="/blog"
            className="font-mono text-[10px] uppercase tracking-widest opacity-40 transition-opacity hover:opacity-100"
            style={{ color: 'hsl(var(--text-primary))' }}
          >
            {'←'} Blog
          </a>
        </div>

        {/* Corps de l'article */}
        <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          {children}
        </article>

        {/* CTA */}
        <div className="px-6 py-16 md:px-12 lg:px-24 bg-black">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-white opacity-40">
              Un projet ?
            </p>
            <h2 className="mb-8 text-2xl font-bold leading-snug md:text-3xl text-white">
              Parlons de votre site web ou de votre CRM.
            </h2>
            
              href="/contact"
              className="inline-block border border-white px-6 py-3 font-mono text-xs uppercase tracking-widest text-white transition-colors duration-200 hover:bg-white hover:text-black"
            >
              Prendre contact {'→'}
            </a>
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}
