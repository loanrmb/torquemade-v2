'use client'

import { NavPill } from '@/components/nav-pill'
import { Footer } from '@/components/footer'
import { useLang } from '@/components/app-provider'

/* ─── Shared style tokens ─────────────────────────────────────────────── */

const h2: React.CSSProperties = {
  fontSize: '0.6875rem',
  fontWeight: 600,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'hsl(var(--text-primary))',
  opacity: 0.45,
  marginTop: '2.75rem',
  marginBottom: '0.625rem',
}

const p: React.CSSProperties = {
  color: 'hsl(var(--text-secondary))',
  fontSize: '0.9375rem',
  lineHeight: 1.75,
  marginBottom: '0.375rem',
}

const a: React.CSSProperties = {
  color: 'hsl(var(--text-primary))',
  textDecoration: 'underline',
  textUnderlineOffset: '3px',
}

/* ─── Component ───────────────────────────────────────────────────────── */

export function MentionsLegalesContent() {
  const lang = useLang()
  const fr = lang === 'fr'

  return (
    <>
      <NavPill />

      <main
        style={{
          maxWidth: 720,
          margin: '0 auto',
          padding: '120px 24px 80px',
          color: 'hsl(var(--text-primary))',
        }}
      >
        {/* ── Page title ── */}
        <h1
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            color: 'hsl(var(--text-primary))',
            marginBottom: '3rem',
            paddingBottom: '1.5rem',
            borderBottom: '1px solid hsl(var(--border-subtle))',
          }}
        >
          {fr ? 'Mentions légales' : 'Legal Notice'}
        </h1>

        {/* 1 ── Éditeur du site / Publisher */}
        <section>
          <h2 style={h2}>{fr ? 'Éditeur du site' : 'Publisher'}</h2>
          <p style={p}>REMBEAU Loan</p>
          <p style={p}>{fr ? 'Développeur web indépendant' : 'Independent web developer'}</p>
          <p style={p}>Bordeaux, France</p>
          <p style={p}>
            <a href="mailto:loanswipe@gmail.com" style={a}>loanswipe@gmail.com</a>
          </p>
          <p style={p}>+33&nbsp;6&nbsp;73&nbsp;81&nbsp;22&nbsp;54</p>
        </section>

        {/* 2 ── Hébergement / Hosting */}
        <section>
          <h2 style={h2}>{fr ? 'Hébergement' : 'Hosting'}</h2>
          <p style={p}>Vercel Inc.</p>
          <p style={p}>340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
          <p style={p}>
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={a}>
              vercel.com
            </a>
          </p>
        </section>

        {/* 3 ── Propriété intellectuelle / Intellectual Property */}
        <section>
          <h2 style={h2}>{fr ? 'Propriété intellectuelle' : 'Intellectual Property'}</h2>
          <p style={p}>
            {fr
              ? 'Le contenu de ce site (textes, visuels, code source) est la propriété exclusive de REMBEAU Loan. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable.'
              : 'All content on this website (text, visuals, source code) is the exclusive property of REMBEAU Loan. Any reproduction, even partial, is prohibited without prior written authorisation.'}
          </p>
        </section>

        {/* 4 ── Données personnelles / Personal Data */}
        <section>
          <h2 style={h2}>{fr ? 'Données personnelles' : 'Personal Data'}</h2>
          <p style={p}>
            {fr
              ? 'Les informations collectées via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes et ne sont transmises à aucun tiers.'
              : 'Information collected via the contact form is used solely to respond to your enquiries and is not shared with any third party.'}
          </p>
          <p style={p}>
            {fr ? (
              <>
                Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification
                et de suppression de vos données. Pour l&apos;exercer&nbsp;:{' '}
                <a href="mailto:loanswipe@gmail.com" style={a}>loanswipe@gmail.com</a>.
              </>
            ) : (
              <>
                In accordance with GDPR, you have the right to access, correct and delete your
                personal data. To exercise these rights:{' '}
                <a href="mailto:loanswipe@gmail.com" style={a}>loanswipe@gmail.com</a>.
              </>
            )}
          </p>
        </section>

        {/* 5 ── Cookies & traceurs / Cookies & Tracking */}
        <section>
          <h2 style={h2}>{fr ? 'Cookies & traceurs' : 'Cookies & Tracking'}</h2>
          <p style={p}>
            {fr
              ? "Ce site n'utilise aucun cookie de suivi. Il n'intègre ni Google Analytics, ni pixel Meta, ni aucun autre outil de collecte de données de navigation."
              : 'This website uses no tracking cookies. It does not integrate Google Analytics, Meta Pixel, or any other navigation data collection tool.'}
          </p>
        </section>

        {/* 6 ── Responsabilité / Liability */}
        <section>
          <h2 style={h2}>{fr ? 'Responsabilité' : 'Liability'}</h2>
          <p style={p}>
            {fr
              ? "Les informations publiées sur ce site sont maintenues à jour dans la mesure du possible. Les liens vers des sites externes n'engagent pas la responsabilité de Torquemade, qui n'en contrôle pas le contenu."
              : "The information published on this website is kept up to date as far as possible. Links to external websites are beyond Torquemade's control and do not engage its liability."}
          </p>
        </section>
      </main>

      <Footer />
    </>
  )
}
