'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

function TableStructure({ lang }: { lang: 'fr' | 'en' }) {
  const h = lang === 'fr'
    ? ['Élément', 'Erreur fréquente', 'Bonne pratique']
    : ['Element', 'Common mistake', 'Best practice']

  const rows = lang === 'fr'
    ? [
        { col1: 'Architecture des URLs',    col2: '/page?id=42 ou /p/123',                                col3: '/services/creation-site-web' },
        { col1: 'Hiérarchie des titres',   col2: 'Plusieurs H1, H2 utilisés comme titres décoratifs',    col3: 'Un seul H1 par page, H2/H3 structurent le contenu' },
        { col1: 'Maillage interne',         col2: 'Pages isolées sans liens entre elles',                 col3: 'Chaque page pointe vers des pages liées' },
        { col1: 'Nommage des pages',        col2: 'page1.html, untitled, new-page',                       col3: 'Slug descriptif avec le mot-clé cible' },
        { col1: 'Profondeur de navigation', col2: "Contenu à 5+ clics de la page d'accueil",             col3: 'Tout contenu accessible en 3 clics maximum' },
        { col1: 'Métadonnées',             col2: 'Titre et description identiques sur toutes les pages', col3: 'Title et meta description uniques, optimisés par page' },
      ]
    : [
        { col1: 'URL architecture',         col2: '/page?id=42 or /p/123',                               col3: '/services/website-creation' },
        { col1: 'Heading hierarchy',        col2: 'Multiple H1s, H2s used decoratively',                 col3: 'One H1 per page, H2/H3 structure the content' },
        { col1: 'Internal linking',         col2: 'Isolated pages with no links between them',           col3: 'Each page links to related pages' },
        { col1: 'Page naming',              col2: 'page1.html, untitled, new-page',                      col3: 'Descriptive slug with the target keyword' },
        { col1: 'Navigation depth',         col2: 'Content 5+ clicks from the homepage',                col3: 'All content reachable within 3 clicks' },
        { col1: 'Metadata',                 col2: 'Same title and description on every page',            col3: 'Unique, optimized title and meta description per page' },
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

export function StructurerSiteWebSeoContent() {
  const lang = useLang()
  return lang === 'fr' ? <ArticleFR lang={lang} /> : <ArticleEN lang={lang} />
}

function ArticleFR({ lang }: { lang: 'fr' | 'en' }) {
  return (
    <>

      <h1 className="blog-article-title">Comment structurer un site web pour le SEO dès la conception</h1>

      <p>La plupart des propriétaires de sites pensent au SEO après la conception, une fois que le site est en ligne et que le trafic ne vient pas. C&apos;est une erreur coûteuse. L&apos;architecture d&apos;un site conditionne son potentiel SEO bien avant que la première ligne de contenu soit écrite.</p>

      <p>Corriger une mauvaise structure après coup est possible, mais c&apos;est long, risqué et souvent incomplet. Le faire dès le départ ne coûte rien de plus, à condition de savoir quoi regarder.</p>

      <h2>L&apos;architecture des URLs : votre première décision SEO</h2>

      <p>L&apos;URL d&apos;une page est l&apos;un des signaux les plus directs que vous envoyez à Google. Une URL comme <code>/services/creation-site-next-js-bordeaux</code> dit immédiatement à Google de quoi parle la page, pour qui, et où. Une URL comme <code>/page?id=42</code> ne dit rien.</p>

      <p>Les règles de base :</p>
      <ul>
        <li>Utilisez des tirets pour séparer les mots, jamais des underscores</li>
        <li>Incluez le mot-clé cible dans l&apos;URL de chaque page importante</li>
        <li>Restez court et descriptif : évitez les paramètres dynamiques inutiles</li>
        <li>Créez une cohérence logique : <code>/blog/categorie/titre-article</code></li>
      </ul>

      <p>Une fois vos URLs définies et indexées, les changer coûte cher en SEO (redirections, perte de liens entrants). Décidez-en une bonne fois pour toutes avant le lancement.</p>

      <h2>La hiérarchie des pages : dire à Google ce qui compte</h2>

      <p>Google explore votre site comme un lecteur qui parcourt un livre : il cherche la structure, les chapitres, les niveaux d&apos;importance. Cette hiérarchie doit être explicite.</p>

      <p>Concrètement, cela signifie :</p>
      <ul>
        <li>Une page d&apos;accueil qui pointe vers vos pages services principales</li>
        <li>Des pages services qui pointent vers des pages plus spécifiques ou des études de cas</li>
        <li>Des articles de blog qui renvoient vers les pages services pertinentes</li>
      </ul>

      <p>Plus une page reçoit de liens internes depuis d&apos;autres pages de votre site, plus Google lui attribue d&apos;importance. C&apos;est le principe du <strong>PageRank interne</strong> : et il est totalement sous votre contrôle.</p>

      <TableStructure lang={lang} />

      <h2>Les silos thématiques : organiser par sujet, pas par format</h2>

      <p>Une erreur commune est d&apos;organiser un site par type de contenu : &ldquo;Services&rdquo;, &ldquo;Blog&rdquo;, &ldquo;À propos&rdquo;. Cette organisation est logique pour les humains, mais insuffisante pour Google.</p>

      <p>Une structure SEO efficace organise le contenu par <strong>thème</strong> : tous les contenus sur le SEO local se retrouvent liés entre eux, tous les contenus sur le développement Next.js forment un cluster cohérent. Google comprend alors que vous faites autorité sur ces sujets spécifiques.</p>

      <p>Exemple concret pour un studio web :</p>
      <ul>
        <li>Page pilier : &ldquo;Création de site web pour PME locales&rdquo;</li>
        <li>Articles satellites : &ldquo;Pourquoi un site vitrine est essentiel&rdquo;, &ldquo;Site sur mesure vs template&rdquo;, &ldquo;Structure SEO d&apos;un site&rdquo;</li>
        <li>Tous ces contenus se lient les uns aux autres</li>
      </ul>

      <p>Ce maillage thématique renforce l&apos;autorité de la page pilier, qui remonte dans les résultats Google.</p>

      <h2>La profondeur de navigation : trois clics maximum</h2>

      <p>Google accorde moins d&apos;importance aux pages difficiles à atteindre. Si un contenu important se trouve à cinq clics de votre page d&apos;accueil, il sera moins bien indexé que s&apos;il était accessible en deux.</p>

      <p>La règle des trois clics n&apos;est pas absolue, mais elle force une discipline utile : si vous ne pouvez pas accéder à une page importante en trois clics depuis l&apos;accueil, votre architecture mérite d&apos;être revue.</p>

      <h2>Les métadonnées : une page, un sujet, un message</h2>

      <p>Chaque page de votre site doit avoir un <code>title</code> et une <code>meta description</code> uniques. Ces éléments sont ce que Google affiche dans ses résultats, et ce que l&apos;utilisateur lit pour décider de cliquer ou non.</p>

      <p>Un <code>title</code> efficace :</p>
      <ul>
        <li>Contient le mot-clé principal en début de phrase</li>
        <li>Reste sous 60 caractères</li>
        <li>Est différent sur chaque page du site</li>
      </ul>

      <p>Une <code>meta description</code> efficace :</p>
      <ul>
        <li>Résume la page en une ou deux phrases</li>
        <li>Incite au clic avec un bénéfice clair</li>
        <li>Reste sous 155 caractères</li>
      </ul>

      <p>Sur un site Next.js, ces métadonnées sont définies directement dans le code de chaque page, aucun plugin requis, aucun risque d&apos;oubli.</p>

      <h2>Construire la structure avant le contenu</h2>

      <p>Notre approche sur chaque projet : avant d&apos;écrire une seule ligne de contenu, nous définissons l&apos;arborescence complète du site, les URLs cibles, la hiérarchie des pages et le maillage interne prévu. Cette phase prend quelques heures, et elle conditionne les performances SEO des mois suivants.</p>

      <p>Un site bien structuré dès le départ indexe plus vite, se positionne mieux, et résiste mieux aux mises à jour d&apos;algorithme Google. C&apos;est un investissement de conception qui se mesure en résultats concrets dans Search Console.</p>

      <hr />

      <p><em>Vous construisez un nouveau site ou envisagez une refonte ? <Link href="/contact">Contactez-nous</Link>. Nous réalisons l&apos;audit de votre architecture actuelle et vous proposons une structure optimisée.</em></p>
    </>
  )
}

function ArticleEN({ lang }: { lang: 'fr' | 'en' }) {
  return (
    <>

      <h1 className="blog-article-title">How to Structure a Website for SEO from Day One</h1>

      <p>Most site owners think about SEO after the build, once the site is live and traffic isn&apos;t coming. That&apos;s a costly mistake. A site&apos;s architecture determines its SEO potential long before the first line of content is written.</p>

      <p>Fixing a poor structure after the fact is possible, but it&apos;s slow, risky, and often incomplete. Doing it right from the start costs nothing extra, as long as you know what to look for.</p>

      <h2>URL Architecture: Your First SEO Decision</h2>

      <p>A page&apos;s URL is one of the most direct signals you send to Google. A URL like <code>/services/next-js-website-bordeaux</code> immediately tells Google what the page is about, for whom, and where. A URL like <code>/page?id=42</code> says nothing.</p>

      <p>The basic rules:</p>
      <ul>
        <li>Use hyphens to separate words, never underscores</li>
        <li>Include the target keyword in the URL of each important page</li>
        <li>Keep it short and descriptive: avoid unnecessary dynamic parameters</li>
        <li>Create logical consistency: <code>/blog/category/article-title</code></li>
      </ul>

      <p>Once your URLs are defined and indexed, changing them costs dearly in SEO (redirects, lost inbound links). Decide once and for all before launch.</p>

      <h2>Page Hierarchy: Telling Google What Matters</h2>

      <p>Google crawls your site like a reader going through a book: it looks for structure, chapters, levels of importance. That hierarchy must be explicit.</p>

      <p>In practice, this means:</p>
      <ul>
        <li>A homepage that links to your main service pages</li>
        <li>Service pages that link to more specific pages or case studies</li>
        <li>Blog articles that link back to relevant service pages</li>
      </ul>

      <p>The more internal links a page receives from other pages on your site, the more importance Google assigns to it. This is the principle of <strong>internal PageRank</strong>: and it&apos;s entirely within your control.</p>

      <TableStructure lang={lang} />

      <h2>Topic Silos: Organize by Subject, Not by Format</h2>

      <p>A common mistake is organizing a site by content type: &ldquo;Services,&rdquo; &ldquo;Blog,&rdquo; &ldquo;About.&rdquo; That organization makes sense for humans but is insufficient for Google.</p>

      <p>An effective SEO structure organizes content by <strong>topic</strong>: all content about local SEO links to each other; all content about Next.js development forms a coherent cluster. Google then understands that you have authority on these specific subjects.</p>

      <p>Concrete example for a web studio:</p>
      <ul>
        <li>Pillar page: &ldquo;Website creation for local SMEs&rdquo;</li>
        <li>Satellite articles: &ldquo;Why a website is essential,&rdquo; &ldquo;Custom vs template,&rdquo; &ldquo;SEO structure of a site&rdquo;</li>
        <li>All these pieces link to each other</li>
      </ul>

      <p>This topical linking reinforces the authority of the pillar page, which climbs in Google results.</p>

      <h2>Navigation Depth: Three Clicks Maximum</h2>

      <p>Google gives less weight to pages that are hard to reach. If important content sits five clicks from your homepage, it will be indexed less well than if it were accessible in two.</p>

      <p>The three-click rule isn&apos;t absolute, but it enforces a useful discipline: if you can&apos;t reach an important page in three clicks from the homepage, your architecture deserves a rethink.</p>

      <h2>Metadata: One Page, One Topic, One Message</h2>

      <p>Every page on your site needs a unique <code>title</code> and <code>meta description</code>. These are what Google displays in its results, and what users read to decide whether to click.</p>

      <p>An effective <code>title</code>:</p>
      <ul>
        <li>Contains the main keyword early in the phrase</li>
        <li>Stays under 60 characters</li>
        <li>Is different on every page of the site</li>
      </ul>

      <p>An effective <code>meta description</code>:</p>
      <ul>
        <li>Summarizes the page in one or two sentences</li>
        <li>Encourages clicks with a clear benefit</li>
        <li>Stays under 155 characters</li>
      </ul>

      <p>On a Next.js site, these metadata are defined directly in each page&apos;s code, no plugin required, no risk of forgetting.</p>

      <h2>Build the Structure Before the Content</h2>

      <p>Our approach on every project: before writing a single line of content, we define the complete site map, target URLs, page hierarchy, and planned internal linking. This phase takes a few hours, and it determines the SEO performance of the months that follow.</p>

      <p>A well-structured site from the start indexes faster, ranks better, and holds up better against Google algorithm updates. It&apos;s a design investment measured in concrete results in Search Console.</p>

      <hr />

      <p><em>Building a new site or planning a redesign? <Link href="/contact">Contact us</Link>. We&apos;ll audit your current architecture and propose an optimized structure.</em></p>
    </>
  )
}
