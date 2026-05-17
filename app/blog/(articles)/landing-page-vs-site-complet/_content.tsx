'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

function TableComparaison({ lang }: { lang: 'fr' | 'en' }) {
  const h = lang === 'fr'
    ? ['Critère', 'Landing page', 'Site complet']
    : ['Criterion', 'Landing page', 'Full site']

  const rows = lang === 'fr'
    ? [
        { col1: 'Objectif principal',    col2: "Une action unique : acheter, s'inscrire, appeler",        col3: 'Informer, convaincre, convertir sur plusieurs sujets' },
        { col1: 'Délai de mise en ligne', col2: '3 à 7 jours',                                            col3: '2 à 6 semaines' },
        { col1: 'SEO organique',         col2: 'Très limité — une seule page indexée',                    col3: 'Fort potentiel — plusieurs pages sur plusieurs mots-clés' },
        { col1: 'Taux de conversion',    col2: "Élevé — pas de distraction, focus total",                 col3: "Variable — dépend de l'architecture et des CTAs" },
        { col1: 'Budget',                col2: 'Plus accessible',                                          col3: 'Investissement plus important' },
        { col1: 'Évolutivité',           col2: 'Limitée par nature',                                      col3: 'Illimitée — on ajoute des pages au besoin' },
        { col1: "Cas d'usage idéal",     col2: 'Campagne publicitaire, lancement produit, validation',    col3: 'Activité établie, SEO prioritaire, plusieurs services' },
      ]
    : [
        { col1: 'Main objective',        col2: 'One single action: buy, sign up, call',                   col3: 'Inform, convince, convert across multiple topics' },
        { col1: 'Time to launch',        col2: '3 to 7 days',                                             col3: '2 to 6 weeks' },
        { col1: 'Organic SEO',           col2: 'Very limited — only one page indexed',                    col3: 'Strong potential — multiple pages on multiple keywords' },
        { col1: 'Conversion rate',       col2: 'High — no distractions, full focus',                      col3: 'Variable — depends on architecture and CTAs' },
        { col1: 'Budget',                col2: 'More accessible',                                          col3: 'Larger investment' },
        { col1: 'Scalability',           col2: 'Limited by nature',                                       col3: 'Unlimited — add pages as needed' },
        { col1: 'Ideal use case',        col2: 'Ad campaign, product launch, concept validation',         col3: 'Established business, SEO-first, multiple services' },
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

export function LandingPageVsSiteCompletContent() {
  const lang = useLang()
  return lang === 'fr' ? <ArticleFR lang={lang} /> : <ArticleEN lang={lang} />
}

function ArticleFR({ lang }: { lang: 'fr' | 'en' }) {
  return (
    <>

      <h1 className="blog-article-title">Landing page vs site complet : quand opter pour quelle solution ?</h1>

      <p>La question revient régulièrement en début de projet : est-ce qu&apos;il nous faut une landing page ou un site complet ? Les deux peuvent sembler interchangeables — une page web, c&apos;est une page web. Mais ils répondent à des logiques différentes, servent des objectifs différents, et s&apos;adressent à des stades de développement différents.</p>

      <p>Voici comment trancher.</p>

      <h2>Ce qu&apos;est vraiment une landing page</h2>

      <p>Une landing page est une page unique conçue pour obtenir <strong>une action précise</strong> d&apos;un visiteur : remplir un formulaire, acheter un produit, réserver une date, télécharger un guide. Tout le contenu de la page est orienté vers cette action. Il n&apos;y a pas de menu de navigation qui distrait, pas de liens vers d&apos;autres sections — juste un parcours linéaire vers la conversion.</p>

      <p>C&apos;est pourquoi les landing pages ont généralement des taux de conversion supérieurs aux pages d&apos;un site classique. L&apos;absence de distractions force l&apos;attention du visiteur vers ce que vous voulez qu&apos;il fasse.</p>

      <h2>Ce qu&apos;un site complet apporte en plus</h2>

      <p>Un site complet est une infrastructure. Il peut accueillir plusieurs services, plusieurs pages de contenu, un blog, des études de cas, une page à propos. Chaque page peut se positionner sur un mot-clé différent dans Google — ce qu&apos;une landing page seule ne peut pas faire.</p>

      <p>Un site complet bien structuré génère du trafic organique sur le long terme. Il répond aux questions de visiteurs à différents stades de leur réflexion : ceux qui cherchent à comprendre, ceux qui comparent des options, ceux qui sont prêts à acheter. Une landing page ne s&apos;adresse qu&apos;aux derniers.</p>

      <TableComparaison lang={lang} />

      <h2>Les cas où la landing page est le bon choix</h2>

      <p><strong>Vous lancez une campagne publicitaire.</strong> Google Ads ou Meta Ads envoient du trafic payant sur une page précise. Une landing page dédiée, sans navigation, maximise le retour sur dépense publicitaire. Envoyer ce trafic sur votre page d&apos;accueil est l&apos;une des erreurs les plus coûteuses en publicité digitale.</p>

      <p><strong>Vous validez un concept.</strong> Avant d&apos;investir dans un site complet, une landing page permet de tester si une offre intéresse réellement votre marché. Si elle convertit, vous avez la preuve que ça vaut la peine d&apos;aller plus loin. Si elle ne convertit pas, vous avez appris quelque chose d&apos;important pour un coût limité.</p>

      <p><strong>Vous lancez un produit spécifique.</strong> Un événement, une formation, une offre saisonnière — une landing page dédiée est plus efficace qu&apos;une page enterrée dans un site existant.</p>

      <h2>Les cas où le site complet s&apos;impose</h2>

      <p><strong>Vous voulez du trafic organique.</strong> Le SEO repose sur la multiplication des pages indexées. Un site avec vingt pages bien optimisées peut se positionner sur vingt requêtes différentes. Une landing page unique, non.</p>

      <p><strong>Vous avez plusieurs services ou offres.</strong> Si vous proposez plusieurs prestations à des audiences différentes, un site complet permet de parler à chacune d&apos;elles de façon adaptée.</p>

      <p><strong>Vous construisez une image de marque.</strong> La crédibilité d&apos;une entreprise établie se construit dans la durée — avec une page à propos, des réalisations, des témoignages, un blog. Une landing page seule ne peut pas porter tout cela.</p>

      <h2>L&apos;approche hybride : commencer par une landing, évoluer vers un site</h2>

      <p>C&apos;est souvent la trajectoire la plus sensée pour une activité en démarrage. On commence par une landing page qui valide l&apos;offre et génère les premiers clients via la publicité. Une fois l&apos;activité stabilisée, on investit dans un site complet qui prend le relais sur le SEO.</p>

      <p>Les deux ne sont pas en opposition — ils sont séquentiels.</p>

      <p>Chez Torquemade, nous avons accompagné des clients dans ces deux phases. Le timing entre les deux dépend d&apos;un seul facteur : est-ce que vous avez encore besoin de valider, ou est-ce que vous cherchez à scaler ?</p>

      <hr />

      <p><em>Vous ne savez pas ce dont vous avez besoin pour votre projet ? <Link href="/contact">Contactez-nous</Link> — nous vous donnons une recommandation claire en 30 minutes.</em></p>
    </>
  )
}

function ArticleEN({ lang }: { lang: 'fr' | 'en' }) {
  return (
    <>

      <h1 className="blog-article-title">Landing Page vs Full Site: When to Choose Which?</h1>

      <p>The question comes up regularly at the start of a project: do we need a landing page or a full site? The two can seem interchangeable — a web page is a web page. But they follow different logic, serve different objectives, and suit different stages of development.</p>

      <p>Here&apos;s how to decide.</p>

      <h2>What a Landing Page Really Is</h2>

      <p>A landing page is a single page designed to get <strong>one specific action</strong> from a visitor: fill out a form, buy a product, book a date, download a guide. All the content on the page is oriented toward that action. There&apos;s no distracting navigation menu, no links to other sections — just a linear path to conversion.</p>

      <p>That&apos;s why landing pages generally have higher conversion rates than pages on a standard site. The absence of distractions forces the visitor&apos;s attention toward what you want them to do.</p>

      <h2>What a Full Site Adds</h2>

      <p>A full site is an infrastructure. It can host multiple services, multiple content pages, a blog, case studies, an about page. Each page can rank for a different keyword in Google — something a single landing page can&apos;t do.</p>

      <p>A well-structured full site generates organic traffic over the long term. It answers questions from visitors at different stages of their decision-making: those looking to understand, those comparing options, those ready to buy. A landing page only speaks to the last group.</p>

      <TableComparaison lang={lang} />

      <h2>When a Landing Page Is the Right Choice</h2>

      <p><strong>You&apos;re running an ad campaign.</strong> Google Ads or Meta Ads send paid traffic to a specific page. A dedicated landing page, without navigation, maximizes return on ad spend. Sending that traffic to your homepage is one of the most costly mistakes in digital advertising.</p>

      <p><strong>You&apos;re validating a concept.</strong> Before investing in a full site, a landing page lets you test whether an offer genuinely interests your market. If it converts, you have proof it&apos;s worth going further. If it doesn&apos;t, you&apos;ve learned something important at limited cost.</p>

      <p><strong>You&apos;re launching a specific product.</strong> An event, a training, a seasonal offer — a dedicated landing page is more effective than a page buried inside an existing site.</p>

      <h2>When a Full Site Is Necessary</h2>

      <p><strong>You want organic traffic.</strong> SEO relies on multiplying indexed pages. A site with twenty well-optimized pages can rank for twenty different queries. A single landing page cannot.</p>

      <p><strong>You have multiple services or offers.</strong> If you offer several services to different audiences, a full site lets you speak to each of them in a tailored way.</p>

      <p><strong>You&apos;re building a brand.</strong> The credibility of an established business is built over time — with an about page, case studies, testimonials, a blog. A landing page alone can&apos;t carry all of that.</p>

      <h2>The Hybrid Approach: Start with a Landing, Evolve to a Full Site</h2>

      <p>This is often the most sensible path for a new business. Start with a landing page that validates the offer and brings in the first clients through advertising. Once the business is stable, invest in a full site that takes over on SEO.</p>

      <p>The two aren&apos;t in opposition — they&apos;re sequential.</p>

      <p>At Torquemade, we&apos;ve supported clients through both phases. The timing between the two depends on one factor: do you still need to validate, or are you looking to scale?</p>

      <hr />

      <p><em>Not sure what your project needs? <Link href="/contact">Contact us</Link> — we&apos;ll give you a clear recommendation in 30 minutes.</em></p>
    </>
  )
}
