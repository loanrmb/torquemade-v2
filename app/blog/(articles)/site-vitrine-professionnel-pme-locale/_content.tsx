'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

function TableAvantages({ lang }: { lang: 'fr' | 'en' }) {
  const h = lang === 'fr'
    ? ['Critère', 'Sans site professionnel', 'Avec site vitrine pro']
    : ['Criterion', 'Without a professional site', 'With a pro website']

  const rows = lang === 'fr'
    ? [
        { col1: 'Visibilité Google',     col2: 'Invisible hors bouche-à-oreille',          col3: 'Présent sur les recherches locales 24h/24' },
        { col1: 'Première impression',   col2: 'Pas de présence = doute sur le sérieux',   col3: 'Crédibilité immédiate, image professionnelle' },
        { col1: 'Génération de leads',   col2: 'Uniquement sur recommandation',             col3: 'Formulaire, appel, email — en continu' },
        { col1: 'Disponibilité',         col2: "Aux heures d'ouverture uniquement",         col3: 'Informations accessibles à toute heure' },
        { col1: 'Concurrence',           col2: 'Vos concurrents captent vos clients',       col3: 'Vous apparaissez avant eux sur Google' },
        { col1: "Coût d'acquisition",    col2: 'Publicité payante ou réseau',               col3: 'Trafic organique gratuit sur le long terme' },
      ]
    : [
        { col1: 'Google visibility',     col2: 'Invisible outside word of mouth',           col3: 'Present on local searches 24/7' },
        { col1: 'First impression',      col2: 'No presence = doubt about credibility',     col3: 'Immediate credibility, professional image' },
        { col1: 'Lead generation',       col2: 'Referrals only',                            col3: 'Form, call, email — continuously' },
        { col1: 'Availability',          col2: 'During opening hours only',                 col3: 'Information accessible at any time' },
        { col1: 'Competition',           col2: 'Your competitors capture your clients',     col3: 'You appear before them on Google' },
        { col1: 'Acquisition cost',      col2: 'Paid advertising or networking',            col3: 'Free organic traffic over the long term' },
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

export function SiteVitrineContent() {
  const lang = useLang()
  return lang === 'fr' ? <ArticleFR lang={lang} /> : <ArticleEN lang={lang} />
}

function ArticleFR({ lang }: { lang: 'fr' | 'en' }) {
  return (
    <>

      <h1 className="blog-article-title">Ce qu&apos;un site vitrine professionnel apporte à une PME locale</h1>

      <p>En 2025, 76 % des consommateurs recherchent un commerce ou un prestataire local sur Google avant de le contacter. Si vous n&apos;apparaissez pas dans ces résultats, vous n&apos;existez pas pour eux — peu importe la qualité de votre travail.</p>

      <p>Un site vitrine professionnel n&apos;est pas une dépense de communication. C&apos;est une infrastructure commerciale qui travaille pour vous en permanence.</p>

      <h2>La visibilité locale : être trouvé avant vos concurrents</h2>

      <p>La majorité des PME locales sous-estiment leur potentiel SEO. Une recherche comme &ldquo;plombier Bordeaux&rdquo;, &ldquo;coiffeur Lyon centre&rdquo; ou &ldquo;concessionnaire moto Gironde&rdquo; génère des centaines de recherches mensuelles — et les premiers résultats captent l&apos;essentiel du trafic.</p>

      <p>Un site vitrine bien structuré — avec les bonnes balises, une architecture claire et du contenu optimisé — vous positionne sur ces recherches. Sans site, vous comptez exclusivement sur le bouche-à-oreille et les plateformes tierces qui, elles, prennent une commission.</p>

      <h2>La crédibilité : ce que votre client voit avant de vous appeler</h2>

      <p>Avant de vous contacter, un prospect cherche à se rassurer. Il veut voir vos réalisations, comprendre ce que vous proposez, lire des avis clients, et se faire une idée de votre sérieux.</p>

      <p>Un site vitrine professionnel remplit ce rôle en quelques secondes. Il répond aux questions que votre prospect n&apos;osera pas vous poser directement : est-ce que cette entreprise est fiable ? Est-ce qu&apos;elle travaille avec des clients comme moi ? Est-ce qu&apos;elle peut gérer mon projet ?</p>

      <p>À l&apos;inverse, l&apos;absence de site — ou un site amateur avec un thème générique mal configuré — envoie un signal négatif. Dans un marché concurrentiel, ce signal suffit à perdre un client.</p>

      <TableAvantages lang={lang} />

      <h2>La génération de leads : votre commercial disponible 24h/24</h2>

      <p>Un bon site vitrine ne se contente pas d&apos;informer. Il convertit.</p>

      <p>Un formulaire de contact bien placé, un numéro de téléphone cliquable sur mobile, une page de services claire avec un appel à l&apos;action — ces éléments transforment un visiteur anonyme en prospect qualifié. Sans effort supplémentaire de votre part.</p>

      <p>Nous constatons régulièrement que des PME locales génèrent entre 5 et 20 contacts entrants par mois uniquement via leur site, dans des secteurs aussi variés que l&apos;artisanat, les services à la personne ou la restauration. Ces leads ont un coût d&apos;acquisition quasi nul une fois le site en place.</p>

      <h2>Ce qui distingue un site professionnel d&apos;un site amateur</h2>

      <p>Un site vitrine professionnel, ce n&apos;est pas simplement &ldquo;avoir un site&rdquo;. C&apos;est un site qui :</p>

      <ul>
        <li>Charge en moins d&apos;une seconde sur mobile (Google pénalise les sites lents)</li>
        <li>Est structuré pour le SEO local dès sa conception</li>
        <li>Présente vos services de façon claire et orientée bénéfices client</li>
        <li>Contient des preuves sociales : avis, réalisations, chiffres concrets</li>
        <li>Dirige le visiteur vers une action précise : appeler, envoyer un message, prendre rendez-vous</li>
      </ul>

      <p>Un constructeur de site gratuit peut techniquement créer une page web. Mais il ne peut pas rivaliser avec un site construit autour de vos objectifs commerciaux spécifiques, optimisé pour vos mots-clés locaux, et conçu pour convertir votre audience.</p>

      <h2>Le retour sur investissement</h2>

      <p>Un site vitrine professionnel représente un investissement ponctuel. Le trafic organique qu&apos;il génère, lui, est gratuit et durable. Nos clients voient généralement leurs premiers résultats SEO entre 3 et 6 mois après le lancement — et ces résultats s&apos;accumulent avec le temps.</p>

      <p>Rapporté sur 3 ans, le coût d&apos;un site bien fait est souvent inférieur à 3 mois de budget publicitaire pour un résultat équivalent.</p>

      <hr />

      <p><em>Vous êtes une PME locale et vous souhaitez savoir ce qu&apos;un site vitrine pourrait vous apporter concrètement ? <Link href="/contact">Contactez-nous</Link> — nous analysons votre marché et votre concurrence locale gratuitement.</em></p>
    </>
  )
}

function ArticleEN({ lang }: { lang: 'fr' | 'en' }) {
  return (
    <>

      <h1 className="blog-article-title">What a Professional Website Brings to a Local SME</h1>

      <p>In 2025, 76% of consumers search for a local business or service provider on Google before contacting them. If you don&apos;t appear in those results, you don&apos;t exist for them — regardless of the quality of your work.</p>

      <p>A professional website isn&apos;t a communication expense. It&apos;s a commercial infrastructure that works for you around the clock.</p>

      <h2>Local Visibility: Being Found Before Your Competitors</h2>

      <p>Most local SMEs underestimate their SEO potential. A search like &ldquo;plumber Bordeaux,&rdquo; &ldquo;hairdresser Lyon centre,&rdquo; or &ldquo;motorcycle dealer Gironde&rdquo; generates hundreds of monthly searches — and the top results capture most of the traffic.</p>

      <p>A well-structured website — with the right tags, a clear architecture, and optimized content — positions you for these searches. Without a site, you rely exclusively on word of mouth and third-party platforms that take a commission.</p>

      <h2>Credibility: What Your Client Sees Before Calling You</h2>

      <p>Before contacting you, a prospect wants to reassure themselves. They want to see your work, understand what you offer, read client reviews, and get a sense of your reliability.</p>

      <p>A professional website fulfills this role in seconds. It answers the questions your prospect won&apos;t ask you directly: is this business trustworthy? Do they work with clients like me? Can they handle my project?</p>

      <p>Conversely, no website — or an amateur site with a poorly configured generic theme — sends a negative signal. In a competitive market, that signal is enough to lose a client.</p>

      <TableAvantages lang={lang} />

      <h2>Lead Generation: Your Salesperson Available 24/7</h2>

      <p>A good website doesn&apos;t just inform. It converts.</p>

      <p>A well-placed contact form, a clickable phone number on mobile, a clear services page with a call to action — these elements turn anonymous visitors into qualified prospects. Without any extra effort on your part.</p>

      <p>We regularly see local SMEs generate between 5 and 20 inbound contacts per month through their site alone, across sectors as varied as trades, personal services, and hospitality. These leads have near-zero acquisition cost once the site is in place.</p>

      <h2>What Sets a Professional Site Apart from an Amateur One</h2>

      <p>A professional website isn&apos;t just &ldquo;having a site.&rdquo; It&apos;s a site that:</p>

      <ul>
        <li>Loads in under a second on mobile (Google penalizes slow sites)</li>
        <li>Is structured for local SEO from the ground up</li>
        <li>Presents your services clearly and in terms of client benefits</li>
        <li>Contains social proof: reviews, case studies, concrete numbers</li>
        <li>Directs visitors toward a specific action: call, send a message, book an appointment</li>
      </ul>

      <p>A free website builder can technically create a web page. But it can&apos;t compete with a site built around your specific business objectives, optimized for your local keywords, and designed to convert your audience.</p>

      <h2>Return on Investment</h2>

      <p>A professional website is a one-time investment. The organic traffic it generates, however, is free and lasting. Our clients typically see their first SEO results 3 to 6 months after launch — and those results compound over time.</p>

      <p>Spread over 3 years, the cost of a well-built site is often less than 3 months of advertising budget for an equivalent result.</p>

      <hr />

      <p><em>You&apos;re a local SME and want to know what a website could concretely bring you? <Link href="/contact">Contact us</Link> — we&apos;ll analyze your market and local competition for free.</em></p>
    </>
  )
}
