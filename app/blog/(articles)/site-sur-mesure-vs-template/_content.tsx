'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

function TableComparaison({ lang }: { lang: 'fr' | 'en' }) {
  const h = lang === 'fr'
    ? ['Critère', 'Template', 'Sur mesure']
    : ['Criterion', 'Template', 'Custom']

  const rows = lang === 'fr'
    ? [
        { col1: 'Design',          col2: "Identique à des milliers d'autres sites",          col3: 'Unique, construit autour de votre identité' },
        { col1: 'Code livré',      col2: 'Lourd, générique, plein de CSS inutilisé',          col3: 'Propre, optimisé, sans ligne superflue' },
        { col1: 'Performances',    col2: 'Variables, souvent pénalisées',                     col3: 'Maximales par construction' },
        { col1: 'SEO technique',   col2: 'Basique, parfois contre-productif',                 col3: 'Structuré pour Google dès le départ' },
        { col1: 'Évolutivité',    col2: 'Limitée par les contraintes du thème',              col3: "Illimitée — vous ajoutez ce dont vous avez besoin" },
        { col1: 'Coût long terme', col2: 'Abonnement + plugins + développeur pour contourner', col3: "Investissement unique, pas de dépendance" },
        { col1: 'Différenciation', col2: "Impossible — le template est public",               col3: "Totale — personne n'a le même site" },
      ]
    : [
        { col1: 'Design',          col2: 'Identical to thousands of other sites',             col3: 'Unique, built around your identity' },
        { col1: 'Code delivered',  col2: 'Heavy, generic, full of unused CSS',                col3: 'Clean, optimized, no superfluous lines' },
        { col1: 'Performance',     col2: 'Variable, often penalized',                         col3: 'Maximum by construction' },
        { col1: 'Technical SEO',   col2: 'Basic, sometimes counterproductive',                col3: 'Structured for Google from day one' },
        { col1: 'Scalability',     col2: 'Limited by theme constraints',                      col3: 'Unlimited — add what you need as you grow' },
        { col1: 'Long-term cost',  col2: 'Subscription + plugins + developer workarounds',    col3: 'One-time investment, no dependency' },
        { col1: 'Differentiation', col2: 'Impossible — the template is public',               col3: "Total — no one else has the same site" },
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

export function SiteSurMesureVsTemplateContent() {
  const lang = useLang()
  return lang === 'fr' ? <ArticleFR lang={lang} /> : <ArticleEN lang={lang} />
}

function ArticleFR({ lang }: { lang: 'fr' | 'en' }) {
  return (
    <>

      <h1 className="blog-article-title">Site web sur mesure vs template : ce que votre client voit vraiment</h1>

      <p>Un template bien choisi peut donner l&apos;illusion d&apos;un site professionnel. Pour quelques dizaines d&apos;euros par mois, on obtient une mise en page propre, des images d&apos;illustration et une structure qui semble cohérente. Le problème ? Votre client, lui, a déjà vu ce site.</p>

      <p>Pas le vôtre en particulier. Mais ce template — sur le site de votre concurrent, d&apos;un artisan dans une autre ville, d&apos;une boutique en Belgique. Le cerveau humain détecte la répétition visuellement avant même d&apos;en avoir conscience.</p>

      <h2>Ce que voit votre client en 3 secondes</h2>

      <p>Les études sur le comportement des utilisateurs web sont constantes : la décision de rester ou de quitter un site se prend en moins de trois secondes. Dans cette fenêtre, votre visiteur ne lit pas — il ressent.</p>

      <p>Un site sur mesure peut être conçu pour provoquer une réaction précise dès le premier regard : confiance, modernité, sérieux, proximité. Chaque choix typographique, chaque espace, chaque couleur est décidé en fonction de votre audience et de votre positionnement.</p>

      <p>Un template, lui, a été conçu pour plaire au plus grand nombre — ce qui signifie qu&apos;il ne parle profondément à personne.</p>

      <h2>Ce que lit Google (et que votre client ne voit pas)</h2>

      <p>La différence entre un template et un site sur mesure ne s&apos;arrête pas au design. Elle commence dans le code.</p>

      <p>Un thème WordPress ou Webflow standard livre des centaines de fichiers CSS et JavaScript dont vous n&apos;utilisez que 10 %. Ce code inutile alourdit la page, ralentit le chargement, et pénalise vos Core Web Vitals — les métriques que Google utilise directement pour classer les sites.</p>

      <p>Un site Next.js construit de zéro ne charge que ce dont il a besoin. Le résultat est un code propre, léger, rapide — et des scores de performance qui se traduisent directement en meilleur positionnement.</p>

      <TableComparaison lang={lang} />

      <h2>Le problème de l&apos;évolutivité</h2>

      <p>Un template est une prison dorée. Au début, il couvre vos besoins. Avec le temps, vous voulez ajouter une fonctionnalité qui n&apos;est pas prévue, modifier un élément que le thème verrouille, intégrer un outil que le template ne supporte pas.</p>

      <p>Vous vous retrouvez alors à payer un développeur pour contourner les contraintes d&apos;un outil qui était censé vous simplifier la vie. Les contournements génèrent de la dette technique. La dette technique ralentit votre site. Et ainsi de suite.</p>

      <p>Un site sur mesure n&apos;a pas ces contraintes. Il est construit autour de vos besoins actuels, avec une architecture qui permet d&apos;ajouter ce dont vous aurez besoin demain.</p>

      <h2>Quand un template est suffisant</h2>

      <p>Soyons honnêtes : un template peut être la bonne réponse dans certains cas.</p>

      <p>Si vous testez une idée, lancez un projet avec un budget très limité, ou avez besoin d&apos;une présence en ligne basique pour valider un marché — un template bien configuré fait le travail. Il serait dommage d&apos;investir dans un site sur mesure pour un projet dont la viabilité n&apos;est pas encore prouvée.</p>

      <p>En revanche, si vous avez une activité établie, des concurrents sérieux, et des ambitions de croissance sur Google — le template devient un plafond, pas un tremplin.</p>

      <h2>Ce que nos clients remarquent après le passage au sur mesure</h2>

      <p>Sans exception, nos clients qui ont remplacé un template par un site sur mesure observent trois choses dans les mois suivant le lancement :</p>

      <ul>
        <li>Une amélioration mesurable de leurs scores Google (Search Console, Core Web Vitals)</li>
        <li>Des retours spontanés de leurs clients sur la qualité perçue du site</li>
        <li>Un taux de rebond en baisse — les visiteurs restent plus longtemps et explorent davantage</li>
      </ul>

      <p>Ce n&apos;est pas de la magie. C&apos;est la conséquence directe d&apos;un site construit pour convertir, pas pour ressembler à tous les autres.</p>

      <hr />

      <p><em>Vous avez actuellement un site sur template et vous vous posez des questions sur la suite ? <Link href="/contact">Contactez-nous</Link> — nous vous donnons une analyse honnête de votre situation actuelle.</em></p>
    </>
  )
}

function ArticleEN({ lang }: { lang: 'fr' | 'en' }) {
  return (
    <>

      <h1 className="blog-article-title">Custom Website vs Template: What Your Client Really Sees</h1>

      <p>A well-chosen template can give the illusion of a professional site. For a few dozen euros a month, you get a clean layout, stock images, and a structure that seems coherent. The problem? Your client has already seen this site.</p>

      <p>Not yours specifically. But this template — on your competitor&apos;s site, a tradesperson in another city, a shop in Belgium. The human brain detects repetition visually before even becoming conscious of it.</p>

      <h2>What Your Client Sees in 3 Seconds</h2>

      <p>Research on web user behavior is consistent: the decision to stay or leave a site is made in under three seconds. In that window, your visitor isn&apos;t reading — they&apos;re feeling.</p>

      <p>A custom site can be designed to provoke a specific reaction from the very first glance: trust, modernity, seriousness, approachability. Every typographic choice, every spacing decision, every color is made based on your audience and positioning.</p>

      <p>A template was designed to appeal to the widest possible audience — which means it speaks deeply to no one.</p>

      <h2>What Google Reads (That Your Client Doesn&apos;t See)</h2>

      <p>The difference between a template and a custom site doesn&apos;t stop at design. It starts in the code.</p>

      <p>A standard WordPress or Webflow theme delivers hundreds of CSS and JavaScript files you only use 10% of. That unnecessary code weighs down the page, slows loading, and penalizes your Core Web Vitals — the metrics Google directly uses to rank sites.</p>

      <p>A Next.js site built from scratch only loads what it needs. The result is clean, lightweight, fast code — and performance scores that translate directly into better rankings.</p>

      <TableComparaison lang={lang} />

      <h2>The Scalability Problem</h2>

      <p>A template is a gilded cage. At first, it covers your needs. Over time, you want to add a feature that isn&apos;t available, modify an element the theme locks, integrate a tool the template doesn&apos;t support.</p>

      <p>You end up paying a developer to work around the constraints of a tool that was supposed to simplify your life. Workarounds create technical debt. Technical debt slows your site. And so on.</p>

      <p>A custom site has none of these constraints. It&apos;s built around your current needs, with an architecture that lets you add whatever you&apos;ll need tomorrow.</p>

      <h2>When a Template Is Enough</h2>

      <p>Let&apos;s be honest: a template can be the right answer in some cases.</p>

      <p>If you&apos;re testing an idea, launching a project with a very limited budget, or need a basic online presence to validate a market — a well-configured template gets the job done. It would be a shame to invest in a custom site for a project whose viability isn&apos;t yet proven.</p>

      <p>On the other hand, if you have an established business, serious competitors, and growth ambitions on Google — a template becomes a ceiling, not a springboard.</p>

      <h2>What Our Clients Notice After Going Custom</h2>

      <p>Without exception, clients who replaced a template with a custom site notice three things in the months following launch:</p>

      <ul>
        <li>A measurable improvement in their Google scores (Search Console, Core Web Vitals)</li>
        <li>Spontaneous feedback from their own clients about the perceived quality of the site</li>
        <li>A lower bounce rate — visitors stay longer and explore more</li>
      </ul>

      <p>It&apos;s not magic. It&apos;s the direct consequence of a site built to convert, not to look like everyone else&apos;s.</p>

      <hr />

      <p><em>You currently have a template site and are wondering about next steps? <Link href="/contact">Contact us</Link> — we&apos;ll give you an honest analysis of your current situation.</em></p>
    </>
  )
}
