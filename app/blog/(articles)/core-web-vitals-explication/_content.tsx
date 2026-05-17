'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

// ─── Shared table components ──────────────────────────────────────────────────

function TableMetriques({ lang }: { lang: 'fr' | 'en' }) {
  const h = lang === 'fr'
    ? ['Métrique', "Ce qu'elle mesure", 'Bon', 'Mauvais']
    : ['Metric', 'What it measures', 'Good', 'Poor']

  const rows = lang === 'fr'
    ? [
        { col1: 'LCP — Largest Contentful Paint', col2: 'Temps avant que le plus grand élément visible soit chargé', col3: '< 2,5 s', col4: '> 4 s' },
        { col1: 'INP — Interaction to Next Paint',  col2: "Délai entre une action utilisateur et la réponse visuelle",  col3: '< 200 ms', col4: '> 500 ms' },
        { col1: 'CLS — Cumulative Layout Shift',    col2: "Stabilité visuelle — les éléments bougent-ils pendant le chargement ?", col3: '< 0,1', col4: '> 0,25' },
      ]
    : [
        { col1: 'LCP — Largest Contentful Paint', col2: 'Time before the largest visible element is loaded',          col3: '< 2.5s',   col4: '> 4s' },
        { col1: 'INP — Interaction to Next Paint',  col2: 'Delay between a user action and the visual response',        col3: '< 200ms',  col4: '> 500ms' },
        { col1: 'CLS — Cumulative Layout Shift',    col2: 'Visual stability — do elements move during loading?',        col3: '< 0.1',    col4: '> 0.25' },
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
              <td className="p-3 text-xs" style={{ borderLeft: '1px solid black' }}>{row.col4}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function TableCauses({ lang }: { lang: 'fr' | 'en' }) {
  const h = lang === 'fr'
    ? ['Problème', 'Causes fréquentes', 'Corrections']
    : ['Issue', 'Common causes', 'Fixes']

  const rows = lang === 'fr'
    ? [
        { col1: 'LCP élevé',  col2: 'Image hero non optimisée, serveur lent, CSS bloquant',          col3: 'WebP + preload, CDN statique, supprimer CSS inutilisé' },
        { col1: 'INP élevé',  col2: 'JavaScript lourd exécuté au clic, trop de listeners',            col3: 'Code splitting, différer le JS non critique' },
        { col1: 'CLS élevé',  col2: 'Images sans dimensions, polices qui se chargent tard, publicités', col3: 'Définir width/height sur toutes les images, font-display: swap' },
      ]
    : [
        { col1: 'High LCP',   col2: 'Unoptimized hero image, slow server, render-blocking CSS',       col3: 'WebP + preload, static CDN, remove unused CSS' },
        { col1: 'High INP',   col2: 'Heavy JavaScript on click, too many event listeners',            col3: 'Code splitting, defer non-critical JS' },
        { col1: 'High CLS',   col2: 'Images without dimensions, late-loading fonts, ads',             col3: 'Set width/height on all images, font-display: swap' },
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
              <td className="p-3 text-xs" style={{ borderLeft: '1px solid black' }}>{row.col3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function CoreWebVitalsContent() {
  const lang = useLang()
  return lang === 'fr' ? <ArticleFR lang={lang} /> : <ArticleEN lang={lang} />
}

// ─── French version ───────────────────────────────────────────────────────────

function ArticleFR({ lang }: { lang: 'fr' | 'en' }) {
  return (
    <>
      <div className="mb-12 flex flex-wrap items-center gap-3 pb-8 font-mono text-[10px] uppercase tracking-widest"
        style={{ borderBottom: '1px solid hsl(var(--border-subtle))' }}>
        <span className="opacity-40">Web &amp; Développement</span>
        <span className="opacity-20">·</span>
        <span className="opacity-30">Mars 2025</span>
        <span className="opacity-20">·</span>
        <span className="opacity-30">5 min de lecture</span>
      </div>

      <h1 className="blog-article-title">Core Web Vitals : ce que Google mesure vraiment sur votre site</h1>

      <p>Depuis 2021, Google intègre les Core Web Vitals dans son algorithme de classement. Ce ne sont pas des métriques techniques abstraites réservées aux développeurs — ce sont des mesures directes de l&apos;expérience que vos visiteurs ont sur votre site. Et Google les utilise pour décider si vous méritez d&apos;apparaître en haut de ses résultats.</p>

      <p>Trois métriques composent les Core Web Vitals. Chacune mesure un aspect précis de ce que ressent un utilisateur réel.</p>

      <TableMetriques lang={lang} />

      <h2>LCP — Largest Contentful Paint : la vitesse perçue</h2>

      <p>Le LCP mesure le temps qu&apos;il faut pour que <strong>le plus grand élément visible</strong> de la page soit affiché — typiquement l&apos;image principale, le titre hero, ou une vidéo. C&apos;est ce que l&apos;utilisateur perçoit comme &ldquo;la page a chargé&rdquo;.</p>

      <p>Un LCP sous 2,5 secondes est considéré comme bon. Au-delà de 4 secondes, c&apos;est mauvais — et Google le note en conséquence.</p>

      <p>Les coupables les plus fréquents d&apos;un mauvais LCP :</p>

      <ul>
        <li>Une image hero volumineuse non convertie en WebP</li>
        <li>Un hébergement lent avec un TTFB élevé</li>
        <li>Des feuilles de style CSS qui bloquent le rendu</li>
      </ul>

      <p>Sur un site Next.js correctement configuré, le LCP est naturellement bas : les pages sont pré-générées, servies depuis un CDN, et le composant <code>&lt;Image /&gt;</code> optimise automatiquement les images.</p>

      <h2>INP — Interaction to Next Paint : la réactivité</h2>

      <p>L&apos;INP a remplacé le FID (First Input Delay) en mars 2024. Il mesure le délai entre n&apos;importe quelle interaction utilisateur — clic, tap, frappe clavier — et la réponse visuelle de la page.</p>

      <p>Un site avec un INP élevé donne une impression de lenteur, de &ldquo;lag&rdquo;, même si la page s&apos;est chargée rapidement. C&apos;est l&apos;équivalent d&apos;une application qui répond en retard à chaque action.</p>

      <p>Les causes habituelles :</p>

      <ul>
        <li>Du JavaScript lourd exécuté au moment d&apos;un clic</li>
        <li>Trop d&apos;event listeners actifs simultanément</li>
        <li>Du code tiers (analytics, chat, publicités) qui monopolise le thread principal</li>
      </ul>

      <h2>CLS — Cumulative Layout Shift : la stabilité visuelle</h2>

      <p>Le CLS mesure à quel point les éléments de la page <strong>bougent pendant le chargement</strong>. Vous avez tous vécu cette expérience : vous allez cliquer sur un bouton, et à la dernière milliseconde une image se charge et décale tout le contenu — vous cliquez sur autre chose.</p>

      <p>Ce phénomène est pénalisé par Google, et pour de bonnes raisons : il génère des erreurs de clic et frustre les utilisateurs.</p>

      <p>Les causes les plus fréquentes de CLS élevé :</p>

      <ul>
        <li>Des images sans attributs <code>width</code> et <code>height</code> définis — le navigateur ne réserve pas l&apos;espace avant le chargement</li>
        <li>Des polices web qui remplacent une police de secours après chargement</li>
        <li>Des publicités ou embeds dont la taille n&apos;est pas connue à l&apos;avance</li>
      </ul>

      <TableCauses lang={lang} />

      <h2>Comment mesurer vos Core Web Vitals</h2>

      <p>Deux sources complémentaires donnent une image complète :</p>

      <p><strong>PageSpeed Insights</strong> (pagespeed.web.dev) analyse une URL spécifique et donne les scores LCP, INP et CLS mesurés sur de vraies visites utilisateurs (données du Chrome User Experience Report). C&apos;est ce que Google voit réellement.</p>

      <p><strong>Google Search Console</strong> — section &ldquo;Expérience&rdquo; puis &ldquo;Signaux Web essentiels&rdquo; — donne une vue globale sur l&apos;ensemble du site, avec les pages classées en &ldquo;Bonnes&rdquo;, &ldquo;À améliorer&rdquo; et &ldquo;Mauvaises&rdquo;. C&apos;est le point de départ pour prioriser les corrections.</p>

      <h2>Core Web Vitals et classement Google : ce qu&apos;il faut retenir</h2>

      <p>Les Core Web Vitals sont un <strong>signal de classement parmi d&apos;autres</strong> — ils ne compensent pas un contenu pauvre ou un manque de backlinks. Mais à contenu équivalent entre deux sites concurrents, celui qui a de meilleurs Core Web Vitals prend l&apos;avantage.</p>

      <p>Dans des marchés locaux concurrentiels — artisans, commerçants, prestataires de services — où le contenu des sites se ressemble souvent, les performances techniques peuvent faire la différence entre la première et la troisième position.</p>

      <p>Nos sites obtiennent systématiquement des scores Core Web Vitals dans le vert dès le lancement. Ce n&apos;est pas un bonus — c&apos;est une exigence de base.</p>

      <hr />

      <p><em>Vos Core Web Vitals sont dans le rouge ? <Link href="/contact">Contactez-nous</Link> — nous identifions les causes et vous proposons un plan de correction priorisé.</em></p>
    </>
  )
}

// ─── English version ──────────────────────────────────────────────────────────

function ArticleEN({ lang }: { lang: 'fr' | 'en' }) {
  return (
    <>
      <div className="mb-12 flex flex-wrap items-center gap-3 pb-8 font-mono text-[10px] uppercase tracking-widest"
        style={{ borderBottom: '1px solid hsl(var(--border-subtle))' }}>
        <span className="opacity-40">Web &amp; Development</span>
        <span className="opacity-20">·</span>
        <span className="opacity-30">March 2025</span>
        <span className="opacity-20">·</span>
        <span className="opacity-30">5 min read</span>
      </div>

      <h1 className="blog-article-title">Core Web Vitals: What Google Really Measures on Your Site</h1>

      <p>Since 2021, Google has integrated Core Web Vitals into its ranking algorithm. These are not abstract technical metrics reserved for developers — they are direct measures of the experience your visitors have on your site. And Google uses them to decide whether you deserve to appear at the top of its results.</p>

      <p>Three metrics make up Core Web Vitals. Each measures a specific aspect of what a real user experiences.</p>

      <TableMetriques lang={lang} />

      <h2>LCP — Largest Contentful Paint: Perceived Speed</h2>

      <p>LCP measures the time it takes for <strong>the largest visible element</strong> on the page to display — typically the main image, the hero title, or a video. This is what the user perceives as &ldquo;the page has loaded.&rdquo;</p>

      <p>An LCP under 2.5 seconds is considered good. Beyond 4 seconds, it&apos;s poor — and Google scores it accordingly.</p>

      <p>The most common culprits for poor LCP:</p>

      <ul>
        <li>A large hero image not converted to WebP</li>
        <li>Slow hosting with a high TTFB</li>
        <li>CSS stylesheets blocking rendering</li>
      </ul>

      <p>On a properly configured Next.js site, LCP is naturally low: pages are pre-generated, served from a CDN, and the <code>&lt;Image /&gt;</code> component automatically optimizes images.</p>

      <h2>INP — Interaction to Next Paint: Responsiveness</h2>

      <p>INP replaced FID (First Input Delay) in March 2024. It measures the delay between any user interaction — click, tap, keystroke — and the page&apos;s visual response.</p>

      <p>A site with a high INP feels slow, &ldquo;laggy,&rdquo; even if the page loaded quickly. It&apos;s the equivalent of an app that responds late to every action.</p>

      <p>Common causes:</p>

      <ul>
        <li>Heavy JavaScript executed on click</li>
        <li>Too many active event listeners simultaneously</li>
        <li>Third-party code (analytics, chat, ads) monopolizing the main thread</li>
      </ul>

      <h2>CLS — Cumulative Layout Shift: Visual Stability</h2>

      <p>CLS measures how much page elements <strong>move during loading</strong>. You&apos;ve all experienced this: you&apos;re about to click a button, and at the last millisecond an image loads and shifts all the content — you click on something else.</p>

      <p>This is penalized by Google, and for good reason: it causes click errors and frustrates users.</p>

      <p>The most common causes of high CLS:</p>

      <ul>
        <li>Images without defined <code>width</code> and <code>height</code> attributes — the browser doesn&apos;t reserve space before loading</li>
        <li>Web fonts that replace a fallback font after loading</li>
        <li>Ads or embeds whose size isn&apos;t known in advance</li>
      </ul>

      <TableCauses lang={lang} />

      <h2>How to Measure Your Core Web Vitals</h2>

      <p>Two complementary sources give a complete picture:</p>

      <p><strong>PageSpeed Insights</strong> (pagespeed.web.dev) analyzes a specific URL and gives LCP, INP, and CLS scores measured on real user visits (data from the Chrome User Experience Report). This is what Google actually sees.</p>

      <p><strong>Google Search Console</strong> — &ldquo;Experience&rdquo; section then &ldquo;Core Web Vitals&rdquo; — gives a global view across the entire site, with pages categorized as &ldquo;Good,&rdquo; &ldquo;Needs improvement,&rdquo; and &ldquo;Poor.&rdquo; This is the starting point for prioritizing fixes.</p>

      <h2>Core Web Vitals and Google Ranking: Key Takeaways</h2>

      <p>Core Web Vitals are <strong>one ranking signal among many</strong> — they don&apos;t compensate for thin content or a lack of backlinks. But with equivalent content between two competing sites, the one with better Core Web Vitals gains the advantage.</p>

      <p>In competitive local markets — tradespeople, retailers, service providers — where site content often looks similar, technical performance can make the difference between first and third position.</p>

      <p>Our sites consistently achieve green Core Web Vitals scores from launch. This isn&apos;t a bonus — it&apos;s a baseline requirement.</p>

      <hr />

      <p><em>Are your Core Web Vitals in the red? <Link href="/contact">Contact us</Link> — we identify the causes and provide a prioritized correction plan.</em></p>
    </>
  )
}
