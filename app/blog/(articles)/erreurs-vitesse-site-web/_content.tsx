'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

function TableErreurs({ lang }: { lang: 'fr' | 'en' }) {
  const h = lang === 'fr'
    ? ['Erreur', 'Impact', 'Correction']
    : ['Error', 'Impact', 'Fix']

  const rows = lang === 'fr'
    ? [
        { col1: 'Images non optimisées',             col2: 'Très élevé', col3: "Convertir en WebP, dimensionner au bon format, lazy loading" },
        { col1: 'Trop de plugins / scripts tiers',   col2: 'Élevé',      col3: "Auditer et supprimer tout ce qui n'est pas indispensable" },
        { col1: 'Hébergement mutualisé bas de gamme', col2: 'Élevé',     col3: "Passer sur un VPS ou un CDN statique (Vercel, Netlify)" },
        { col1: 'Pas de mise en cache',              col2: 'Élevé',      col3: "Activer le cache serveur ou utiliser un générateur statique" },
        { col1: 'CSS et JS non minifiés',            col2: 'Moyen',      col3: "Bundler moderne (Next.js, Vite) le fait automatiquement" },
        { col1: 'Polices web mal chargées',          col2: 'Moyen',      col3: "Précharger les polices critiques, limiter les variantes" },
        { col1: 'Redirects en chaîne',               col2: 'Moyen',      col3: "Aller directement à l'URL finale, supprimer les redirects inutiles" },
      ]
    : [
        { col1: 'Unoptimized images',                col2: 'Very high',  col3: "Convert to WebP, resize to display dimensions, enable lazy loading" },
        { col1: 'Too many plugins / third-party scripts', col2: 'High',  col3: "Audit and remove everything that isn't essential" },
        { col1: 'Low-end shared hosting',            col2: 'High',       col3: "Switch to a VPS or static CDN (Vercel, Netlify)" },
        { col1: 'No caching',                        col2: 'High',       col3: "Enable server cache or use a static site generator" },
        { col1: 'Unminified CSS and JS',             col2: 'Medium',     col3: "Modern bundlers (Next.js, Vite) handle this automatically" },
        { col1: 'Poorly loaded web fonts',           col2: 'Medium',     col3: "Preload critical fonts, limit variants" },
        { col1: 'Redirect chains',                   col2: 'Medium',     col3: "Point directly to the final URL, remove unnecessary redirects" },
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

export function ErreursVitesseContent() {
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
        <span className="opacity-30">Février 2025</span>
        <span className="opacity-20">·</span>
        <span className="opacity-30">5 min de lecture</span>
      </div>

      <h1 className="blog-article-title">Les 7 erreurs qui plombent la vitesse d&apos;un site web</h1>

      <p>Un site lent perd sur tous les fronts : Google le pénalise dans ses classements, les visiteurs le quittent avant même de l&apos;avoir vu, et les conversions chutent à chaque seconde de chargement supplémentaire. Pourtant, dans la grande majorité des cas, les causes sont identifiables et corrigeables.</p>

      <p>Voici les sept erreurs que nous retrouvons systématiquement lors de nos audits — et comment les éliminer.</p>

      <TableErreurs lang={lang} />

      <h2>1. Des images non optimisées</h2>

      <p>C&apos;est de loin la cause la plus fréquente de lenteur. Une photo uploadée directement depuis un appareil photo peut peser 4 à 8 Mo. Sur une page avec cinq images, c&apos;est 40 Mo à télécharger avant que la page soit utilisable.</p>

      <p>La correction est simple : convertir toutes les images en <strong>WebP</strong> (30 à 50 % plus léger que JPEG à qualité équivalente), les redimensionner aux dimensions exactes où elles s&apos;affichent, et activer le <strong>lazy loading</strong> pour ne charger que les images visibles à l&apos;écran.</p>

      <p>Sur Next.js, le composant <code>&lt;Image /&gt;</code> fait tout cela automatiquement. Sur WordPress, il faut un plugin dédié et une discipline manuelle.</p>

      <h2>2. Trop de plugins et de scripts tiers</h2>

      <p>Chaque plugin WordPress, chaque widget de chat, chaque pixel de tracking ajoute du JavaScript qui s&apos;exécute au chargement de la page. Dix plugins raisonnables peuvent facilement ajouter 500 ms de temps de chargement.</p>

      <p>L&apos;exercice utile : ouvrir l&apos;onglet Network de votre navigateur et regarder combien de requêtes se lancent au chargement. Si vous en voyez plus de cinquante, il y a de la marge. Tout script tiers qui n&apos;est pas directement lié à votre activité mérite d&apos;être supprimé.</p>

      <h2>3. Un hébergement sous-dimensionné</h2>

      <p>Un hébergement mutualisé à 3 € par mois partage les ressources serveur entre des centaines de sites. Quand l&apos;un d&apos;eux reçoit un pic de trafic, tout le monde ralentit. Le Time to First Byte — le temps avant que le serveur réponde — peut dépasser la seconde.</p>

      <p>La solution la plus efficace à long terme : quitter l&apos;hébergement dynamique pour un déploiement statique sur CDN (Vercel, Cloudflare Pages). Le site est servi depuis le nœud le plus proche du visiteur, le TTFB tombe sous 50 ms.</p>

      <h2>4. Aucune mise en cache</h2>

      <p>Sans cache, le serveur recalcule chaque page à chaque visite. Avec un cache correctement configuré, la page est servie depuis la mémoire — instantanément.</p>

      <p>Sur WordPress, un plugin de cache (WP Rocket, LiteSpeed Cache) est indispensable. Sur Next.js, la génération statique fait office de cache permanent : les pages sont pré-calculées une fois et servies directement sans aucun traitement serveur.</p>

      <h2>5. CSS et JavaScript non minifiés</h2>

      <p>En développement, le code est lisible — avec des espaces, des commentaires, des sauts de ligne. En production, tout cela est inutile et représente des kilooctets téléchargés pour rien.</p>

      <p>La minification supprime ces caractères superflus et réduit la taille des fichiers de 20 à 40 %. Les outils modernes (Next.js, Vite, Webpack) le font automatiquement à la compilation — il n&apos;y a rien à configurer si le projet est bien construit.</p>

      <h2>6. Des polices web mal gérées</h2>

      <p>Les polices Google Fonts ou Adobe Fonts sont souvent chargées de façon naïve : le navigateur attend que le fichier de police soit téléchargé avant d&apos;afficher le texte, provoquant un <strong>Flash Of Invisible Text</strong> visible par l&apos;utilisateur et pénalisé par Google.</p>

      <p>La bonne pratique : précharger les polices critiques avec <code>&lt;link rel=&quot;preload&quot;&gt;</code>, utiliser <code>font-display: swap</code> pour afficher immédiatement une police de secours, et limiter le nombre de variantes chargées (poids, styles).</p>

      <p>Sur Torquemade, nous utilisons Geist, hébergé en local — aucune requête externe, aucune latence réseau liée aux polices.</p>

      <h2>7. Des redirections en chaîne</h2>

      <p>Chaque redirection ajoute un aller-retour réseau. Une chaîne de type <code>ancienne-url</code> → <code>url-intermédiaire</code> → <code>url-finale</code> peut ajouter 300 à 600 ms invisibles pour l&apos;utilisateur, mais mesurés par Google.</p>

      <p>L&apos;audit est simple : utiliser un outil comme Screaming Frog ou Redirect Checker pour cartographier toutes les redirections du site. Toute redirection qui passe par plus d&apos;une étape doit être corrigée pour pointer directement vers la destination finale.</p>

      <h2>Mesurer avant de corriger</h2>

      <p>Avant tout correctif, deux outils gratuits donnent un état des lieux précis : <strong>Google PageSpeed Insights</strong> (analyse une URL et donne un score sur 100 avec les problèmes détectés) et <strong>Google Search Console</strong> (identifie les pages avec de mauvais Core Web Vitals à l&apos;échelle du site entier).</p>

      <p>Ces deux sources suffisent pour prioriser les corrections et mesurer leur impact une fois appliquées.</p>

      <hr />

      <p><em>Votre site est lent et vous ne savez pas par où commencer ? <Link href="/contact">Contactez-nous</Link> — nous réalisons un audit de performance complet et vous proposons un plan d&apos;action concret.</em></p>
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
        <span className="opacity-30">February 2025</span>
        <span className="opacity-20">·</span>
        <span className="opacity-30">5 min read</span>
      </div>

      <h1 className="blog-article-title">The 7 Mistakes That Kill Your Website&apos;s Speed</h1>

      <p>A slow site loses on every front: Google penalizes it in rankings, visitors leave before they&apos;ve even seen it, and conversions drop with every extra second of load time. Yet in the vast majority of cases, the causes are identifiable and fixable.</p>

      <p>Here are the seven mistakes we find consistently during our audits — and how to eliminate them.</p>

      <TableErreurs lang={lang} />

      <h2>1. Unoptimized Images</h2>

      <p>This is by far the most common cause of slowness. A photo uploaded directly from a camera can weigh 4 to 8 MB. On a page with five images, that&apos;s 40 MB to download before the page is usable.</p>

      <p>The fix is straightforward: convert all images to <strong>WebP</strong> (30 to 50% lighter than JPEG at equivalent quality), resize them to the exact dimensions where they display, and enable <strong>lazy loading</strong> to only load images visible on screen.</p>

      <p>On Next.js, the <code>&lt;Image /&gt;</code> component handles all of this automatically. On WordPress, it requires a dedicated plugin and manual discipline.</p>

      <h2>2. Too Many Plugins and Third-Party Scripts</h2>

      <p>Every WordPress plugin, every chat widget, every tracking pixel adds JavaScript that runs at page load. Ten reasonable plugins can easily add 500ms of load time.</p>

      <p>A useful exercise: open your browser&apos;s Network tab and count how many requests fire on load. If you see more than fifty, there&apos;s room to cut. Any third-party script not directly tied to your business deserves to be removed.</p>

      <h2>3. Underpowered Hosting</h2>

      <p>A €3/month shared hosting plan shares server resources across hundreds of sites. When one of them gets a traffic spike, everyone slows down. Time to First Byte — the time before the server responds — can exceed one second.</p>

      <p>The most effective long-term solution: leave dynamic hosting for static deployment on a CDN (Vercel, Cloudflare Pages). The site is served from the node closest to the visitor, and TTFB drops below 50ms.</p>

      <h2>4. No Caching</h2>

      <p>Without a cache, the server recalculates every page on every visit. With a properly configured cache, pages are served from memory — instantly.</p>

      <p>On WordPress, a cache plugin (WP Rocket, LiteSpeed Cache) is essential. On Next.js, static generation acts as a permanent cache: pages are pre-computed once and served directly without any server processing.</p>

      <h2>5. Unminified CSS and JavaScript</h2>

      <p>In development, code is readable — with spaces, comments, line breaks. In production, all of that is unnecessary and represents kilobytes downloaded for nothing.</p>

      <p>Minification removes these superfluous characters and reduces file sizes by 20 to 40%. Modern tools (Next.js, Vite, Webpack) do this automatically at build time — there&apos;s nothing to configure if the project is well set up.</p>

      <h2>6. Poorly Managed Web Fonts</h2>

      <p>Google Fonts or Adobe Fonts are often loaded naively: the browser waits for the font file to download before displaying text, causing a <strong>Flash Of Invisible Text</strong> visible to users and penalized by Google.</p>

      <p>Best practice: preload critical fonts with <code>&lt;link rel=&quot;preload&quot;&gt;</code>, use <code>font-display: swap</code> to immediately display a fallback font, and limit the number of variants loaded (weights, styles).</p>

      <p>At Torquemade, we use Geist, hosted locally — no external requests, no network latency from fonts.</p>

      <h2>7. Redirect Chains</h2>

      <p>Every redirect adds a network round trip. A chain like <code>old-url</code> → <code>intermediate-url</code> → <code>final-url</code> can add 300 to 600ms invisible to the user, but measured by Google.</p>

      <p>The audit is simple: use a tool like Screaming Frog or Redirect Checker to map all redirects on the site. Any redirect that goes through more than one step must be corrected to point directly to the final destination.</p>

      <h2>Measure Before You Fix</h2>

      <p>Before any fix, two free tools give a precise picture: <strong>Google PageSpeed Insights</strong> (analyzes a URL and gives a score out of 100 with detected issues) and <strong>Google Search Console</strong> (identifies pages with poor Core Web Vitals across the entire site).</p>

      <p>These two sources are enough to prioritize fixes and measure their impact once applied.</p>

      <hr />

      <p><em>Your site is slow and you don&apos;t know where to start? <Link href="/contact">Contact us</Link> — we conduct a full performance audit and give you a concrete action plan.</em></p>
    </>
  )
}
