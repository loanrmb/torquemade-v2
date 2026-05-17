'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

function TableMobile({ lang }: { lang: 'fr' | 'en' }) {
  const h = lang === 'fr'
    ? ['Critère', 'Desktop', 'Mobile']
    : ['Criterion', 'Desktop', 'Mobile']

  const rows = lang === 'fr'
    ? [
        { col1: 'Indexation Google',       col2: 'Secondaire depuis 2023',             col3: 'Prioritaire — Mobile-First Indexing actif' },
        { col1: 'Part du trafic web',      col2: '37 % du trafic mondial',             col3: '63 % du trafic mondial' },
        { col1: 'Taux de rebond',          col2: 'Moyen : 45 %',                       col3: 'Moyen : 60 % si non optimisé' },
        { col1: 'Taux de conversion',      col2: 'Référence historique',               col3: "-30 % si le site n'est pas adapté" },
        { col1: 'Vitesse de chargement',   col2: 'Connexion souvent stable',           col3: 'Réseau variable, exige légèreté maximale' },
        { col1: 'Expérience de navigation', col2: 'Curseur, hover, grand écran',       col3: 'Tactile, pouce, petit écran — logique différente' },
      ]
    : [
        { col1: 'Google indexing',         col2: 'Secondary since 2023',               col3: 'Primary — Mobile-First Indexing active' },
        { col1: 'Share of web traffic',    col2: '37% of global traffic',              col3: '63% of global traffic' },
        { col1: 'Bounce rate',             col2: 'Average: 45%',                       col3: 'Average: 60% if not optimized' },
        { col1: 'Conversion rate',         col2: 'Historical benchmark',               col3: '-30% if site is not mobile-adapted' },
        { col1: 'Load speed',              col2: 'Connection usually stable',          col3: 'Variable network, demands maximum lightness' },
        { col1: 'Navigation experience',   col2: 'Cursor, hover, large screen',       col3: 'Touch, thumb, small screen — different logic' },
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

export function SiteMobileFirstContent() {
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
        <span className="opacity-30">Mars 2025</span>
        <span className="opacity-20">·</span>
        <span className="opacity-30">4 min de lecture</span>
      </div>

      <h1 className="blog-article-title">Pourquoi votre site doit être mobile-first en 2025</h1>

      <p>Il y a dix ans, concevoir un site pour desktop puis &ldquo;l&apos;adapter&rdquo; pour mobile était une pratique acceptable. En 2025, c&apos;est une erreur stratégique. Le mobile n&apos;est plus un format secondaire — c&apos;est le format principal, pour vos visiteurs comme pour Google.</p>

      <h2>Ce que Google a changé en 2023</h2>

      <p>Depuis juillet 2024, Google a finalisé son passage au <strong>Mobile-First Indexing</strong> pour l&apos;ensemble du web. Ce que cela signifie concrètement : quand Google explore et évalue votre site, il le fait avec un crawler mobile. C&apos;est la version mobile de vos pages qui détermine votre positionnement — pas la version desktop.</p>

      <p>Si votre version mobile est incomplète, lente, ou difficile à utiliser, votre SEO en souffre directement — même pour les utilisateurs qui vous trouvent sur ordinateur.</p>

      <h2>63 % de votre trafic vient du mobile</h2>

      <p>Les chiffres sont stables depuis plusieurs années : entre 60 et 65 % du trafic web mondial provient d&apos;appareils mobiles. Pour certains secteurs — restauration, services locaux, e-commerce de proximité — ce chiffre dépasse 75 %.</p>

      <p>Vos prospects cherchent &ldquo;plombier urgence Bordeaux&rdquo; depuis leur téléphone à 22h. Ils regardent votre carte depuis un mobile en déplacement. Ils comparent vos tarifs depuis leur canapé avec un smartphone. Si votre site ne fonctionne pas parfaitement dans ces conditions, vous les perdez.</p>

      <TableMobile lang={lang} />

      <h2>Mobile-first vs mobile-friendly : une différence fondamentale</h2>

      <p>Un site <strong>mobile-friendly</strong> est un site desktop adapté pour mobile — souvent via des media queries CSS qui réduisent la taille des éléments. Le résultat est fonctionnel, mais pas optimal.</p>

      <p>Un site <strong>mobile-first</strong> est conçu en partant du mobile comme référence, puis enrichi pour desktop. Cette approche force des décisions de conception différentes :</p>

      <ul>
        <li>La navigation est pensée pour le pouce, pas pour le curseur</li>
        <li>Les appels à l&apos;action sont larges, accessibles, visibles sans scroll</li>
        <li>Le contenu est hiérarchisé pour un écran étroit — l&apos;essentiel d&apos;abord</li>
        <li>Les images sont dimensionnées pour des connexions mobiles variables</li>
        <li>Les formulaires sont optimisés pour la saisie tactile</li>
      </ul>

      <p>Le résultat n&apos;est pas seulement &ldquo;ça marche sur mobile&rdquo; — c&apos;est une expérience conçue pour convertir sur mobile.</p>

      <h2>Les pièges classiques à éviter</h2>

      <p><strong>Les boutons trop petits.</strong> Google recommande une taille minimale de 48x48 px pour les éléments interactifs sur mobile. Un bouton de 20 px sur mobile génère des erreurs de clic et frustre l&apos;utilisateur.</p>

      <p><strong>Le texte trop petit.</strong> Une taille de police inférieure à 16 px force l&apos;utilisateur à zoomer — ce qui déclenche un signal négatif dans les Core Web Vitals (Cumulative Layout Shift).</p>

      <p><strong>Les pop-ups intrusives.</strong> Google pénalise explicitement les interstitiels qui masquent le contenu sur mobile. Une pop-up qui couvre l&apos;écran entier sur smartphone peut vous faire perdre des positions.</p>

      <p><strong>Les éléments non redimensionnés.</strong> Tableaux, images, vidéos qui débordent de l&apos;écran sur mobile sont l&apos;un des signaux les plus pénalisants pour le Mobile-First Indexing.</p>

      <p><strong>La lenteur sur réseau mobile.</strong> Une connexion 4G en zone périurbaine est deux à trois fois plus lente qu&apos;une fibre desktop. Un site qui charge en 2 secondes sur fibre peut prendre 6 secondes sur 4G — et déclencher un taux de rebond élevé.</p>

      <h2>Ce que mobile-first implique dans notre approche</h2>

      <p>Sur chaque site que nous construisons, la conception commence sur mobile. Les maquettes sont validées sur 375 px de large avant d&apos;être adaptées pour les écrans plus larges. Tailwind CSS — notre outil de style — est structuré autour des breakpoints mobiles par défaut, ce qui force cette discipline à chaque composant.</p>

      <p>Les résultats sont mesurables : nos sites obtiennent systématiquement des scores Mobile supérieurs à 90 dans PageSpeed Insights, et les Core Web Vitals sont dans le vert dès le lancement.</p>

      <h2>Tester votre site maintenant</h2>

      <p>Deux tests rapides pour évaluer votre situation actuelle :</p>

      <ul>
        <li><strong>Google PageSpeed Insights</strong> (pagespeed.web.dev) — entrez votre URL et regardez le score Mobile en premier, pas Desktop</li>
        <li><strong>Test de compatibilité mobile Google</strong> — search.google.com/test/mobile-friendly — Google vous dit explicitement si votre site est considéré comme mobile-friendly</li>
      </ul>

      <p>Si votre score Mobile est inférieur à 70 ou si des problèmes sont identifiés, chaque jour sans correction est une opportunité SEO perdue.</p>

      <hr />

      <p><em>Votre site n&apos;est pas optimisé pour mobile ? <Link href="/contact">Contactez-nous</Link> — nous analysons votre situation et vous proposons un plan d&apos;action adapté à votre budget.</em></p>
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
        <span className="opacity-30">March 2025</span>
        <span className="opacity-20">·</span>
        <span className="opacity-30">4 min read</span>
      </div>

      <h1 className="blog-article-title">Why Your Site Must Be Mobile-First in 2025</h1>

      <p>Ten years ago, designing a site for desktop then &ldquo;adapting&rdquo; it for mobile was acceptable practice. In 2025, it&apos;s a strategic mistake. Mobile is no longer a secondary format — it&apos;s the primary one, for your visitors and for Google.</p>

      <h2>What Google Changed in 2023</h2>

      <p>Since July 2024, Google has completed its transition to <strong>Mobile-First Indexing</strong> across the entire web. What this means in practice: when Google crawls and evaluates your site, it does so with a mobile crawler. It&apos;s the mobile version of your pages that determines your rankings — not the desktop version.</p>

      <p>If your mobile version is incomplete, slow, or difficult to use, your SEO suffers directly — even for users who find you on a computer.</p>

      <h2>63% of Your Traffic Comes from Mobile</h2>

      <p>The numbers have been stable for years: between 60 and 65% of global web traffic comes from mobile devices. For some sectors — restaurants, local services, proximity e-commerce — that figure exceeds 75%.</p>

      <p>Your prospects search &ldquo;emergency plumber Bordeaux&rdquo; from their phone at 10pm. They check your map from their mobile on the go. They compare your rates from the couch with a smartphone. If your site doesn&apos;t work perfectly in those conditions, you lose them.</p>

      <TableMobile lang={lang} />

      <h2>Mobile-First vs Mobile-Friendly: A Fundamental Difference</h2>

      <p>A <strong>mobile-friendly</strong> site is a desktop site adapted for mobile — often through CSS media queries that shrink elements. The result is functional, but not optimal.</p>

      <p>A <strong>mobile-first</strong> site is designed starting from mobile as the reference, then enhanced for desktop. This approach forces different design decisions:</p>

      <ul>
        <li>Navigation designed for the thumb, not the cursor</li>
        <li>CTAs that are wide, accessible, visible without scrolling</li>
        <li>Content prioritized for a narrow screen — the essentials first</li>
        <li>Images sized for variable mobile connections</li>
        <li>Forms optimized for touch input</li>
      </ul>

      <p>The result isn&apos;t just &ldquo;it works on mobile&rdquo; — it&apos;s an experience designed to convert on mobile.</p>

      <h2>Classic Pitfalls to Avoid</h2>

      <p><strong>Buttons that are too small.</strong> Google recommends a minimum size of 48x48px for interactive elements on mobile. A 20px button on mobile causes click errors and frustrates users.</p>

      <p><strong>Text that is too small.</strong> A font size below 16px forces the user to zoom — which triggers a negative signal in Core Web Vitals (Cumulative Layout Shift).</p>

      <p><strong>Intrusive pop-ups.</strong> Google explicitly penalizes interstitials that hide content on mobile. A pop-up covering the full screen on a smartphone can cost you rankings.</p>

      <p><strong>Non-responsive elements.</strong> Tables, images, and videos that overflow the screen on mobile are one of the most penalizing signals for Mobile-First Indexing.</p>

      <p><strong>Slowness on mobile networks.</strong> A 4G connection in a suburban area is two to three times slower than a desktop fiber connection. A site that loads in 2 seconds on fiber can take 6 seconds on 4G — triggering a high bounce rate.</p>

      <h2>What Mobile-First Means in Our Approach</h2>

      <p>On every site we build, design starts on mobile. Mockups are validated at 375px wide before being adapted for larger screens. Tailwind CSS — our styling tool — is structured around mobile breakpoints by default, which enforces this discipline at every component.</p>

      <p>The results are measurable: our sites consistently achieve Mobile scores above 90 in PageSpeed Insights, with Core Web Vitals in the green from day one.</p>

      <h2>Test Your Site Now</h2>

      <p>Two quick tests to assess your current situation:</p>

      <ul>
        <li><strong>Google PageSpeed Insights</strong> (pagespeed.web.dev) — enter your URL and look at the Mobile score first, not Desktop</li>
        <li><strong>Google Mobile-Friendly Test</strong> — search.google.com/test/mobile-friendly — Google explicitly tells you whether your site is considered mobile-friendly</li>
      </ul>

      <p>If your Mobile score is below 70 or issues are identified, every day without a fix is a lost SEO opportunity.</p>

      <hr />

      <p><em>Your site isn&apos;t optimized for mobile? <Link href="/contact">Contact us</Link> — we&apos;ll analyze your situation and propose an action plan suited to your budget.</em></p>
    </>
  )
}
