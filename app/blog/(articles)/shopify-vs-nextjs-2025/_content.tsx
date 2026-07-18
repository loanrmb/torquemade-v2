'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

function TableComparaison({ lang }: { lang: 'fr' | 'en' }) {
  const h = lang === 'fr'
    ? ['Critère', 'Shopify', 'Next.js']
    : ['Criterion', 'Shopify', 'Next.js']

  const rows = lang === 'fr'
    ? [
        { col1: 'Mise en ligne',      col2: 'Quelques jours',                    col3: 'Plusieurs semaines' },
        { col1: 'Coût mensuel',       col2: '29 $–299 $ + abonnement apps',      col3: 'Hébergement uniquement (~20 $/mois)' },
        { col1: 'Commission ventes',  col2: '0,5 % à 2 %',                       col3: '0 %' },
        { col1: 'Design',             col2: 'Thème + limitations',               col3: 'Pixel-perfect, aucune contrainte' },
        { col1: 'SEO technique',      col2: 'Bon (limité par le thème)',         col3: 'Excellent (contrôle total)' },
        { col1: 'Performances',       col2: 'Variables selon le thème',          col3: 'Maximales (SSG / SSR natif)' },
        { col1: 'Maintenance',        col2: 'Gérée par Shopify',                 col3: 'Développeur requis' },
      ]
    : [
        { col1: 'Time to launch',     col2: 'A few days',                        col3: 'Several weeks' },
        { col1: 'Monthly cost',       col2: '$29–$299 + app subscriptions',      col3: 'Hosting only (~$20/month)' },
        { col1: 'Sales commission',   col2: '0.5% to 2%',                        col3: '0%' },
        { col1: 'Design',             col2: 'Theme + limitations',               col3: 'Pixel-perfect, no constraints' },
        { col1: 'Technical SEO',      col2: 'Good (limited by theme)',           col3: 'Excellent (full control)' },
        { col1: 'Performance',        col2: 'Variable by theme',                 col3: 'Maximum (native SSG / SSR)' },
        { col1: 'Maintenance',        col2: 'Managed by Shopify',                col3: 'Developer required' },
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

function TableDecision({ lang }: { lang: 'fr' | 'en' }) {
  const shopifyLabel = lang === 'fr' ? 'Choisissez Shopify si…' : 'Choose Shopify if…'
  const nextjsLabel  = lang === 'fr' ? 'Choisissez Next.js si…' : 'Choose Next.js if…'

  const shopifyItems = lang === 'fr'
    ? ['Budget serré ou projet de test', 'Lancement en quelques jours', 'Catalogue de produits standards', "Pas de développeur dans l'équipe"]
    : ['Tight budget or test project', 'Launch within days', 'Standard product catalog', 'No developer on the team']

  const nextjsItems = lang === 'fr'
    ? ['Design sur mesure, identité forte', 'SEO prioritaire, vision long terme', 'Modèle de vente spécifique', 'Volume de ventes > 5 000 €/mois']
    : ['Custom design, strong brand identity', 'SEO-first, long-term vision', 'Specific sales model', 'Sales volume > €5,000/month']

  return (
    <div className="my-12 grid grid-cols-1 md:grid-cols-2 border border-black overflow-hidden">
      <div className="p-6 bg-white" style={{ borderBottom: '1px solid black' }}>
        <p className="font-mono text-[10px] uppercase tracking-widest mb-5 opacity-50">{shopifyLabel}</p>
        <ul className="space-y-3 text-sm">
          {shopifyItems.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="font-mono text-xs mt-0.5 opacity-40">, </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 bg-black text-white" style={{ borderLeft: '1px solid black' }}>
        <p className="font-mono text-[10px] uppercase tracking-widest mb-5 opacity-50">{nextjsLabel}</p>
        <ul className="space-y-3 text-sm">
          {nextjsItems.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="font-mono text-xs mt-0.5 opacity-40">, </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function ShopifyVsNextjsContent() {
  const lang = useLang()
  return lang === 'fr' ? <ArticleFR lang={lang} /> : <ArticleEN lang={lang} />
}

function ArticleFR({ lang }: { lang: 'fr' | 'en' }) {
  return (
    <>

      <h1 className="blog-article-title">Shopify vs Next.js : lequel choisir pour votre commerce en 2026 ?</h1>

      <p>La question revient dans presque toutes nos conversations avec des clients e-commerce. Shopify ou Next.js ? Les deux permettent de vendre en ligne, mais ils ne s&apos;adressent pas aux mêmes projets, ni aux mêmes ambitions.</p>

      <p>Voici notre comparaison directe, sans jargon inutile.</p>

      <TableComparaison lang={lang} />

      <h2>Shopify : vendre vite, sans développeur</h2>

      <p>Shopify est une plateforme SaaS pensée pour lancer rapidement une boutique en ligne. Abonnement mensuel, thème prêt à l&apos;emploi, produits ajoutés en quelques clics, vous pouvez être opérationnel en quelques jours.</p>

      <p><strong>Ses points forts :</strong></p>
      <ul>
        <li>Gestion des paiements, des stocks et des expéditions intégrée nativement</li>
        <li>Plus de 2 000 applications disponibles dans l&apos;App Store Shopify</li>
        <li>Sécurité et mises à jour gérées par la plateforme, sans intervention technique</li>
        <li>Idéal pour les marchands qui veulent se concentrer sur la vente, pas sur le code</li>
      </ul>

      <p><strong>Ses limites :</strong></p>
      <ul>
        <li>Abonnement mensuel de 29 $ à 299 $ auquel s&apos;ajoute une commission sur chaque vente (jusqu&apos;à 2 %)</li>
        <li>Personnalisation du design limitée sans développeur Shopify spécialisé</li>
        <li>Dépendance totale à la plateforme : si Shopify change ses conditions, vous suivez</li>
        <li>SEO technique parfois bridé par les contraintes imposées par le thème</li>
      </ul>

      <h2>Next.js : performer, sans compromis</h2>

      <p>Next.js est un framework React open-source qui permet de construire un site e-commerce entièrement sur mesure. Aucun thème, aucune commission, aucune contrainte imposée par un tiers.</p>

      <p><strong>Ses points forts :</strong></p>
      <ul>
        <li>Performances maximales : génération statique, rendu serveur, optimisation d&apos;images native</li>
        <li>SEO technique irréprochable dès la conception, structure HTML propre, Core Web Vitals, métadonnées maîtrisées</li>
        <li>Design pixel-perfect, adapté exactement à votre identité visuelle</li>
        <li>Zéro commission sur les ventes : vous intégrez Stripe directement, sans intermédiaire</li>
        <li>Évolutif et stable : de 10 à 100 000 visiteurs sans changer de plateforme</li>
      </ul>

      <p><strong>Ses limites :</strong></p>
      <ul>
        <li>Nécessite un développeur pour la création initiale et la maintenance</li>
        <li>Délai de mise en ligne plus long, plusieurs semaines, pas quelques jours</li>
        <li>Stocks, paiements et logistique doivent être connectés via API</li>
      </ul>

      <TableDecision lang={lang} />

      <h2>Le calcul que personne ne fait</h2>

      <p>Sur 10 000 € de ventes mensuelles, la commission Shopify représente entre 50 € et 200 € par mois. Sur trois ans, c&apos;est potentiellement le coût d&apos;un site Next.js sur mesure, développé une fois, sans commission à perpétuité.</p>

      <p>C&apos;est la raison pour laquelle la grande majorité de nos clients e-commerce choisissent Next.js après notre première conversation. Non pas parce que c&apos;est plus technique, mais parce que c&apos;est plus rentable à moyen terme.</p>

      <p><strong>Si votre volume dépasse les 5 000 € de ventes mensuelles, le calcul penche clairement vers Next.js.</strong></p>

      <h2>Notre position</h2>

      <p>Nous développons les deux solutions selon les besoins du projet. Pour un artisan qui veut tester sa première boutique avec 30 références, Shopify est souvent la réponse pragmatique. Pour un commerce établi qui veut dominer son marché local sur Google et maximiser ses marges, Next.js s&apos;impose presque systématiquement.</p>

      <p>Dans les deux cas, l&apos;objectif reste le même : un site qui vous amène des clients, pas un site vitrine qui dort.</p>

      <hr />

      <p><em>Vous hésitez entre les deux pour votre projet ? <Link href="/contact">Contactez-nous</Link>. Nous vous donnons une recommandation claire en 30 minutes.</em></p>
    </>
  )
}

function ArticleEN({ lang }: { lang: 'fr' | 'en' }) {
  return (
    <>

      <h1 className="blog-article-title">Shopify vs Next.js: Which to Choose for Your Online Store in 2026?</h1>

      <p>The question comes up in nearly every conversation we have with e-commerce clients. Shopify or Next.js? Both let you sell online, but they&apos;re not built for the same projects or the same ambitions.</p>

      <p>Here&apos;s our direct comparison, without unnecessary jargon.</p>

      <TableComparaison lang={lang} />

      <h2>Shopify: Sell Fast, No Developer Needed</h2>

      <p>Shopify is a SaaS platform built to launch an online store quickly. Monthly subscription, ready-to-use theme, products added in a few clicks, you can be up and running within days.</p>

      <p><strong>Its strengths:</strong></p>
      <ul>
        <li>Payments, inventory, and shipping management built in natively</li>
        <li>Over 2,000 apps available in the Shopify App Store</li>
        <li>Security and updates managed by the platform, no technical intervention needed</li>
        <li>Ideal for merchants who want to focus on selling, not on code</li>
      </ul>

      <p><strong>Its limitations:</strong></p>
      <ul>
        <li>Monthly subscription from $29 to $299, plus a commission on every sale (up to 2%)</li>
        <li>Limited design customization without a specialist Shopify developer</li>
        <li>Full platform dependency: if Shopify changes its terms, you follow</li>
        <li>Technical SEO sometimes constrained by theme limitations</li>
      </ul>

      <h2>Next.js: Maximum Performance, No Compromises</h2>

      <p>Next.js is an open-source React framework for building a fully custom e-commerce site. No themes, no commissions, no constraints imposed by a third party.</p>

      <p><strong>Its strengths:</strong></p>
      <ul>
        <li>Maximum performance: static generation, server rendering, native image optimization</li>
        <li>Impeccable technical SEO from day one, clean HTML structure, Core Web Vitals, controlled metadata</li>
        <li>Pixel-perfect design, tailored exactly to your visual identity</li>
        <li>Zero sales commission: integrate Stripe directly, no middleman</li>
        <li>Scalable and stable: from 10 to 100,000 visitors without changing platforms</li>
      </ul>

      <p><strong>Its limitations:</strong></p>
      <ul>
        <li>Requires a developer for initial build and ongoing maintenance</li>
        <li>Longer time to launch: several weeks, not a few days</li>
        <li>Inventory, payments, and logistics must be connected via API</li>
      </ul>

      <TableDecision lang={lang} />

      <h2>The Calculation Nobody Does</h2>

      <p>On €10,000 in monthly sales, Shopify&apos;s commission amounts to €50 to €200 per month. Over three years, that&apos;s potentially the cost of a custom Next.js site, built once, with no ongoing commission.</p>

      <p>That&apos;s why the vast majority of our e-commerce clients choose Next.js after our first conversation. Not because it&apos;s more technical, but because it&apos;s more profitable in the medium term.</p>

      <p><strong>If your volume exceeds €5,000 in monthly sales, the math clearly favors Next.js.</strong></p>

      <h2>Our Take</h2>

      <p>We build both solutions depending on what the project needs. For a craftsperson testing their first store with 30 products, Shopify is often the pragmatic answer. For an established business looking to dominate its local market on Google and maximize margins, Next.js is almost always the answer.</p>

      <p>In both cases, the goal is the same: a site that brings you clients, not a brochure site that just sits there.</p>

      <hr />

      <p><em>Unsure which is right for your project? <Link href="/contact">Contact us</Link>, we&apos;ll give you a clear recommendation in 30 minutes.</em></p>
    </>
  )
}
