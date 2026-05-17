'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

function TablePerformance({ lang }: { lang: 'fr' | 'en' }) {
  const h = lang === 'fr'
    ? ['Critère', 'WordPress', 'Next.js']
    : ['Criterion', 'WordPress', 'Next.js']

  const rows = lang === 'fr'
    ? [
        { col1: 'Génération des pages',      col2: 'À chaque requête (PHP + BDD)',          col3: 'En amont, une seule fois (SSG)' },
        { col1: 'Time to First Byte',         col2: '300 ms – 1 500 ms',                    col3: '20 ms – 80 ms' },
        { col1: 'Largest Contentful Paint',   col2: 'Souvent > 2,5 s',                      col3: 'Régulièrement < 1 s' },
        { col1: 'Serveur requis',             col2: 'PHP + MySQL en permanence',             col3: 'CDN statique (pas de serveur actif)' },
        { col1: 'Mise en cache',              col2: 'Plugin tiers (WP Rocket, etc.)',        col3: 'Native, automatique' },
        { col1: 'Scalabilité',               col2: 'Limité par le serveur PHP',             col3: 'Illimitée via CDN edge' },
        { col1: 'Score Core Web Vitals',      col2: 'Variable, souvent moyen',              col3: 'Excellent par défaut' },
      ]
    : [
        { col1: 'Page generation',            col2: 'On every request (PHP + DB)',           col3: 'Once at build time (SSG)' },
        { col1: 'Time to First Byte',         col2: '300ms – 1,500ms',                      col3: '20ms – 80ms' },
        { col1: 'Largest Contentful Paint',   col2: 'Often > 2.5s',                         col3: 'Regularly < 1s' },
        { col1: 'Server required',            col2: 'PHP + MySQL always running',           col3: 'Static CDN (no active server)' },
        { col1: 'Caching',                    col2: 'Third-party plugin (WP Rocket, etc.)', col3: 'Native, automatic' },
        { col1: 'Scalability',               col2: 'Limited by PHP server',                col3: 'Unlimited via CDN edge' },
        { col1: 'Core Web Vitals score',      col2: 'Variable, often average',             col3: 'Excellent by default' },
      ]

  return (
    <div className="my-12 overflow-x-auto border border-black">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-black text-white">
            {h.map((label, i) => (
              <th key={i} className="p-3 text-left font-mono text-[10px] uppercase tracking-widest"
                style={i > 0 ? { borderLeft: '1px solid rgba(255,255,255,0.15)' } : {}}>
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ borderTop: '1px solid black', background: i % 2 === 1 ? '#fafafa' : 'white' }}>
              <td className="p-3 font-mono text-xs font-medium">{row.col1}</td>
              <td className="p-3 text-xs" style={{ borderLeft: '1px solid black' }}>{row.col2}</td>
              <td className="p-3 text-xs font-medium" style={{ borderLeft: '1px solid black' }}>{row.col3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function NextjsVsWordpressContent() {
  const lang = useLang()
  return lang === 'fr' ? <ArticleFR lang={lang} /> : <ArticleEN lang={lang} />
}

function ArticleFR({ lang }: { lang: 'fr' | 'en' }) {
  return (
    <>
      <div className="mb-12 flex flex-wrap items-center gap-3 pb-8 font-mono text-[10px] uppercase tracking-widest"
        style={{ borderBottom: '1px solid hsl(var(--border-subtle))' }}>
        <span className="opacity-40">Web &amp; Développement</span>
        <span className="opacity-20">·</span>
        <span className="opacity-30">Janvier 2025</span>
        <span className="opacity-20">·</span>
        <span className="opacity-30">4 min de lecture</span>
      </div>

      <h1 className="blog-article-title">Pourquoi un site Next.js est plus rapide qu&apos;un site WordPress</h1>

      <p>La vitesse d&apos;un site web n&apos;est pas qu&apos;une question de confort utilisateur. Google la mesure, la note, et s&apos;en sert pour décider qui apparaît en premier dans les résultats de recherche. Un site lent perd sur deux tableaux : le SEO et la conversion.</p>

      <p>WordPress domine encore 43 % du web. Mais cette popularité ne dit rien sur les performances — et la comparaison avec Next.js est sans appel.</p>

      <h2>Comment WordPress génère une page</h2>

      <p>Quand un visiteur arrive sur un site WordPress, voici ce qui se passe en coulisses :</p>

      <ul>
        <li>Le serveur reçoit la requête</li>
        <li>PHP s&apos;exécute et interroge la base de données MySQL</li>
        <li>WordPress assemble le HTML à partir du thème et des données récupérées</li>
        <li>Le résultat est envoyé au navigateur</li>
      </ul>

      <p>Ce processus se répète <strong>à chaque visite, pour chaque page</strong>. Sur un hébergement mutualisé standard, cela prend entre 300 ms et 1 500 ms avant que le premier octet soit envoyé au navigateur. Sans compter les plugins qui s&apos;accumulent, les requêtes BDD qui s&apos;alourdissent, et les pics de trafic qui font tomber le serveur.</p>

      <h2>Comment Next.js génère une page</h2>

      <p>Next.js adopte une approche radicalement différente. Les pages sont générées <strong>une seule fois</strong>, au moment du build — pas à chaque visite. Le résultat : des fichiers HTML statiques, déployés directement sur un CDN mondial.</p>

      <p>Quand un visiteur arrive sur un site Next.js :</p>

      <ul>
        <li>Sa requête atteint le nœud CDN le plus proche (souvent à quelques kilomètres)</li>
        <li>Le fichier HTML pré-généré est retourné immédiatement</li>
        <li>Aucun PHP, aucune base de données, aucune latence serveur</li>
      </ul>

      <p>Le Time to First Byte (TTFB) — la métrique qui mesure ce délai — passe de plusieurs centaines de millisecondes à <strong>moins de 80 ms</strong>. C&apos;est une différence que les utilisateurs ressentent et que Google mesure.</p>

      <TablePerformance lang={lang} />

      <h2>Ce que ça change concrètement</h2>

      <p><strong>Sur le SEO</strong>, Google utilise les Core Web Vitals comme signal de classement depuis 2021. Un site WordPress non optimisé score rarement bien sur le LCP et le TTFB. Un site Next.js correctement construit obtient des scores excellents par défaut, sans plugin de cache ni configuration complexe.</p>

      <p><strong>Sur la conversion</strong>, chaque seconde de chargement supplémentaire réduit le taux de conversion. Les données de Google montrent qu&apos;un délai de 3 secondes augmente le taux de rebond de 32 %. Sur un site e-commerce ou une landing page, c&apos;est directement mesurable en chiffre d&apos;affaires.</p>

      <p><strong>Sur la stabilité</strong>, un site WordPress sous fort trafic nécessite un hébergement puissant et coûteux pour tenir. Un site Next.js sur CDN absorbe 10 ou 100 000 visiteurs simultanés sans configuration supplémentaire — le CDN scale automatiquement.</p>

      <h2>WordPress reste pertinent, mais pas pour les performances</h2>

      <p>WordPress excelle pour certains cas : blogs avec de nombreux contributeurs, sites nécessitant un back-office éditorial accessible à des non-développeurs, projets avec un budget très contraint.</p>

      <p>Mais si la performance, le SEO et la fiabilité sont des priorités — et ils devraient l&apos;être pour tout commerce ou service local — Next.js est l&apos;option qui s&apos;impose.</p>

      <p>Nous l&apos;utilisons sur tous nos projets. Pas par dogmatisme technique, mais parce que les résultats sont systématiquement meilleurs : des sites qui chargent en moins d&apos;une seconde, des scores Core Web Vitals dans le vert, et un SEO qui performe dès le lancement.</p>

      <hr />

      <p><em>Votre site actuel est lent ? <Link href="/contact">Contactez-nous</Link> — nous analysons vos performances et vous proposons une feuille de route claire.</em></p>
    </>
  )
}

function ArticleEN({ lang }: { lang: 'fr' | 'en' }) {
  return (
    <>
      <div className="mb-12 flex flex-wrap items-center gap-3 pb-8 font-mono text-[10px] uppercase tracking-widest"
        style={{ borderBottom: '1px solid hsl(var(--border-subtle))' }}>
        <span className="opacity-40">Web &amp; Development</span>
        <span className="opacity-20">·</span>
        <span className="opacity-30">January 2025</span>
        <span className="opacity-20">·</span>
        <span className="opacity-30">4 min read</span>
      </div>

      <h1 className="blog-article-title">Why a Next.js Site Is Faster Than a WordPress Site</h1>

      <p>Website speed isn&apos;t just a matter of user comfort. Google measures it, scores it, and uses it to decide who appears first in search results. A slow site loses on two fronts: SEO and conversion.</p>

      <p>WordPress still powers 43% of the web. But that popularity says nothing about performance — and the comparison with Next.js is unambiguous.</p>

      <h2>How WordPress Generates a Page</h2>

      <p>When a visitor lands on a WordPress site, here&apos;s what happens behind the scenes:</p>

      <ul>
        <li>The server receives the request</li>
        <li>PHP executes and queries the MySQL database</li>
        <li>WordPress assembles the HTML from the theme and retrieved data</li>
        <li>The result is sent to the browser</li>
      </ul>

      <p>This process repeats <strong>on every visit, for every page</strong>. On standard shared hosting, this takes between 300ms and 1,500ms before the first byte is sent to the browser — before accounting for accumulating plugins, heavier DB queries, and traffic spikes that bring the server down.</p>

      <h2>How Next.js Generates a Page</h2>

      <p>Next.js takes a radically different approach. Pages are generated <strong>once</strong>, at build time — not on every visit. The result: static HTML files, deployed directly on a global CDN.</p>

      <p>When a visitor lands on a Next.js site:</p>

      <ul>
        <li>Their request reaches the nearest CDN node (often just a few kilometers away)</li>
        <li>The pre-generated HTML file is returned immediately</li>
        <li>No PHP, no database, no server latency</li>
      </ul>

      <p>Time to First Byte (TTFB) — the metric that measures this delay — drops from hundreds of milliseconds to <strong>under 80ms</strong>. That&apos;s a difference users feel and Google measures.</p>

      <TablePerformance lang={lang} />

      <h2>What This Changes in Practice</h2>

      <p><strong>For SEO</strong>, Google has used Core Web Vitals as a ranking signal since 2021. An unoptimized WordPress site rarely scores well on LCP and TTFB. A properly built Next.js site achieves excellent scores by default — no cache plugin, no complex configuration.</p>

      <p><strong>For conversion</strong>, every additional second of load time reduces conversion rates. Google&apos;s data shows that a 3-second delay increases bounce rate by 32%. On an e-commerce site or landing page, that&apos;s directly measurable in revenue.</p>

      <p><strong>For stability</strong>, a WordPress site under heavy traffic needs powerful, expensive hosting to hold up. A Next.js site on CDN handles 10 or 100,000 simultaneous visitors without additional configuration — the CDN scales automatically.</p>

      <h2>WordPress Is Still Relevant — Just Not for Performance</h2>

      <p>WordPress excels in specific cases: blogs with many contributors, sites requiring an editorial back-office accessible to non-developers, projects with very tight budgets.</p>

      <p>But if performance, SEO, and reliability are priorities — and they should be for any local business or service — Next.js is the clear choice.</p>

      <p>We use it on all our projects. Not out of technical dogmatism, but because the results are consistently better: sites that load in under a second, green Core Web Vitals scores, and SEO that performs from day one.</p>

      <hr />

      <p><em>Your current site is slow? <Link href="/contact">Contact us</Link> — we&apos;ll analyze your performance and give you a clear roadmap.</em></p>
    </>
  )
}
