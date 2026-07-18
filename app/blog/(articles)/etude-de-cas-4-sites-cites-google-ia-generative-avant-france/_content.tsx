'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'
import { BlogUpdatedLine } from '@/components/blog-updated-line'

export function EtudeCasQuatreSitesContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">Case study: 4 sites cited by Google&apos;s generative AI before the model reaches France</h1>

      <BlogUpdatedLine slug="etude-de-cas-4-sites-cites-google-ia-generative-avant-france" />

      <p>
        Four independently run websites, covering an e-commerce dealership, a tourist VTC
        service, a brand blog, and a regional motorcycle blog, were all found to be cited in
        Google&apos;s generative AI answers in under 3 months of tracking, based on Google
        Search Console&apos;s Generative AI Performance report. Together, these four sites
        total 1,544 AI impressions (660 + 558 + 218 + 108).
      </p>

      <h2>Sprint Motors (sprintmotors.com)</h2>

      <p>
        660 impressions in under 3 months. Unlike the other three sites, a product page
        dominates: the Voge SR4 Max 400cc listing alone draws 190 impressions (29% of the
        total), ahead of the Voge SR1 (84) and the Hyosung GV 300 S (64). Together these
        three product pages account for more than half the site&apos;s total AI visibility.
        This shows a well-structured product page, with specs presented clearly like a direct
        answer, can be cited as heavily as an editorial article.
      </p>
      <p>
        Geography is the most dispersed and least French-speaking of the four sites:
        Philippines (61), India (35), Belgium (32), United States (31), Morocco (29), Malaysia
        (26); France sits at 4 impressions, under 1% of the total. Mobile dominates strongly
        (389 vs 258 on desktop), consistent with markets where mobile search is the default.
      </p>

      <h2>BordeauxRide (bordeauxride.com)</h2>

      <p>
        558 impressions in under 3 months, and the most commercially qualified of the four:
        the United States (112) and United Kingdom (107) alone account for more than a third
        of the total, matching exactly the English-speaking tourist audience a Bordeaux VTC
        service targets. But the concentration on a single page is extreme: the
        English-language article &quot;Is there Uber in Bordeaux&quot; captures 395
        impressions alone, 71% of the site&apos;s entire AI visibility. Its French and English
        variants of &quot;VTC vs Uber Bordeaux&quot; follow far behind (41 and 29
        respectively).
      </p>
      <p>
        This is the site where the signal is both the strongest and the most fragile, since a
        single page carries almost all of the site&apos;s AI visibility. Notably, this is the
        only one of the four sites where desktop impressions (305) exceed mobile (238),
        suggesting research done ahead of a trip rather than on the move. France sits at 16
        impressions, roughly 3% of the total.
      </p>

      <h2>Voge Bordeaux (vogebordeaux.fr)</h2>

      <p>
        218 impressions in under 3 months, with a concentration pattern nearly identical to
        BordeauxRide but on editorial content: the article &quot;Voge, quelle origine, la
        marque chinoise devenue référence en Europe&quot; captures 152 impressions, 70% of the
        site&apos;s total. Geography here skews French-speaking outside France: Morocco (80),
        Belgium (40), Madagascar (22), Switzerland (18), markets where Google&apos;s
        generative AI already answers in French ahead of France itself (France: 2 impressions,
        under 1%).
      </p>
      <p>
        Product pages are nearly invisible in this report (1 to 2 impressions each); on this
        site specifically, editorial content is effectively the only thing visible to the AI.
      </p>

      <h2>MotoPassion65 (motopassion65.com)</h2>

      <p>
        108 impressions in under 3 months, the smallest volume of the four but structurally
        the healthiest: no single page dominates. The article &quot;Top 5 moto trail
        Pyrénées&quot; leads with 21 impressions (19% of the total, far below the 70%+
        concentration seen on the two previous sites), closely followed by a product page
        (Voge SR4 Max 400cc, 11 impressions) and another editorial article (&quot;Voge
        DS900X&quot;, 10 impressions).
      </p>
      <p>
        This is the only one of the four sites where editorial and product content coexist in
        the ranking rather than one type dominating entirely. Geography mirrors Voge Bordeaux
        (Morocco, Belgium, Switzerland, Algeria); France again residual at 3 impressions,
        roughly 3%.
      </p>

      <h2>What these four sites have in common</h2>

      <ul>
        <li>
          On three of the four sites, a single editorial article captures 70% or more of all
          AI-generated impressions. Concentration on one strong question-answering page is the
          norm here, not the exception.
        </li>
        <li>
          Sprint Motors is the counter-example, and it matters: the same principle extends to
          product pages when they are structured clearly enough to function as a direct
          answer.
        </li>
        <li>
          The one constant across all four, regardless of vertical or content type: France
          sits between under 1% and roughly 3% of total impressions on every single site. That
          consistency points to a rollout availability constraint, not a content quality
          problem.
        </li>
      </ul>

      <p>
        If your own Search Console numbers look similarly small for France, we cover why in{' '}
        <Link href="/blog/rapport-ia-generative-google-search-console">
          our explainer on Search Console&apos;s Generative AI report
        </Link>
        . And for the underlying mechanism these four cases illustrate, meaning what actually
        determines whether a page gets cited, see{' '}
        <Link href="/blog/comment-apparaitre-reponses-google-ia-generative">
          our analysis of what gets cited and why
        </Link>
        .
      </p>

      <h2>What this means going forward</h2>

      <p>
        These four sites are not exceptional cases: they show what already happens on markets
        where AI Overviews are live, applied to ordinary small business content. Our{' '}
        <Link href="/blog/ai-overviews-france-checklist-avant-deploiement">
          seven-point checklist
        </Link>{' '}
        covers the concrete steps to prepare a site for the same outcome, from structuring
        pages around one explicit question to adding FAQ schema where it genuinely applies.
      </p>

      <p>
        Right now, all four sites are already building a citation history in markets where AI
        Overviews are live, months before Google is expected to roll the feature out in
        France, before September 2026. When that happens, they will not be starting from zero
        like most of their competitors.
      </p>

      <h2>FAQ</h2>

      <h3 className="text-base font-semibold text-text-primary mt-6 mb-2">
        Were these sites specifically optimized for generative AI?
      </h3>
      <p>
        No. None of the four were rebuilt or rewritten for AI citation specifically. Their
        content was already structured around clear, direct answers to specific questions, the
        kind of structure that has always served regular SEO. That structure turns out to be
        exactly what Google&apos;s generative AI extracts and cites.
      </p>

      <h3 className="text-base font-semibold text-text-primary mt-6 mb-2">
        Why does a single page capture so many impressions on some sites?
      </h3>
      <p>
        On three of the four sites, one article answers one specific question thoroughly
        enough to become the clear, extractable passage for that question, so it gets pulled
        into the AI answer far more often than any other page. It is a concentration effect,
        not a fluke: the page that answers a question most directly tends to absorb most of
        the citations for it.
      </p>

      <h3 className="text-base font-semibold text-text-primary mt-6 mb-2">
        Do these impressions translate into visits?
      </h3>
      <p>
        This cannot be measured directly yet. The Generative AI Performance report currently
        tracks impressions, not clicks tied specifically to AI answers, a limitation we detail
        in{' '}
        <Link href="/blog/rapport-ia-generative-google-search-console">
          our explainer on the report
        </Link>
        .
      </p>

      <h3 className="text-base font-semibold text-text-primary mt-6 mb-2">
        Can my site get the same results?
      </h3>
      <p>
        The pattern held across four unrelated sites in different verticals, which suggests it
        is not luck. Structuring your strongest pages around direct answers, per our{' '}
        <Link href="/blog/ai-overviews-france-checklist-avant-deploiement">checklist</Link>,
        is the concrete starting point. Results will likely appear first on international
        traffic, since France&apos;s own AI Overviews rollout has not happened yet.
      </p>

      <hr />

      <p>
        <em>
          Want to know what your own Search Console Generative AI report is already showing?
          We run this exact audit, the same process behind these four case studies, on any
          site. Our{' '}
          <Link href="/services/web-dev">SEO &amp; GEO support</Link> covers it end to end.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/rapport-ia-generative-google-search-console">
              Google Search Console&apos;s Generative AI report: how to read it
            </Link>
          </li>
          <li>
            <Link href="/blog/comment-apparaitre-reponses-google-ia-generative">
              How to appear in Google&apos;s generative AI answers
            </Link>
          </li>
          <li>
            <Link href="/blog/ai-overviews-france-checklist-avant-deploiement">
              AI Overviews are coming to France before September 2026: what to prepare now
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Étude de cas : 4 sites cités par Google IA générative avant l&apos;arrivée du modèle en France</h1>

      <BlogUpdatedLine slug="etude-de-cas-4-sites-cites-google-ia-generative-avant-france" />

      <p>
        Quatre sites web gérés indépendamment, une concession moto e-commerce, un service VTC
        touristique, un blog de marque et un blog moto régional, ont tous été cités dans les
        réponses IA générative de Google en moins de 3 mois de suivi, d&apos;après le rapport
        Performance IA générative de Google Search Console. Ensemble, ces quatre sites
        totalisent 1 544 impressions IA (660 + 558 + 218 + 108).
      </p>

      <h2>Sprint Motors (sprintmotors.com)</h2>

      <p>
        660 impressions en moins de 3 mois. Contrairement aux trois autres sites, c&apos;est
        une fiche produit qui domine : la fiche Voge SR4 Max 400cc capte à elle seule 190
        impressions (29% du total), devant la Voge SR1 (84) et la Hyosung GV 300 S (64).
        Ensemble, ces trois fiches produit représentent plus de la moitié de la visibilité IA
        totale du site. Ça démontre qu&apos;une fiche produit bien structurée, avec des
        caractéristiques présentées clairement comme une réponse directe, peut être citée
        aussi fréquemment qu&apos;un article éditorial.
      </p>
      <p>
        La géographie est la plus dispersée et la moins francophone des quatre sites :
        Philippines (61), Inde (35), Belgique (32), États-Unis (31), Maroc (29), Malaisie (26)
        ; la France se situe à 4 impressions, moins de 1% du total. Le mobile domine
        nettement (389 contre 258 sur desktop), cohérent avec des marchés où la recherche
        mobile est la norme par défaut.
      </p>

      <h2>BordeauxRide (bordeauxride.com)</h2>

      <p>
        558 impressions en moins de 3 mois, et le site le plus qualifié commercialement des
        quatre : les États-Unis (112) et le Royaume-Uni (107) représentent à eux seuls plus
        d&apos;un tiers du total, exactement en ligne avec l&apos;audience touristique
        anglophone que vise un service VTC à Bordeaux. Mais la concentration sur une seule page
        est extrême : l&apos;article en anglais &laquo; Is there Uber in Bordeaux &raquo;
        capte à lui seul 395 impressions, soit 71% de toute la visibilité IA du site. Ses
        variantes françaises et anglaises de &laquo; VTC vs Uber Bordeaux &raquo; suivent
        loin derrière (41 et 29 respectivement).
      </p>
      <p>
        C&apos;est le site où le signal est à la fois le plus fort et le plus fragile,
        puisqu&apos;une seule page porte presque toute la visibilité IA du site. Fait notable,
        c&apos;est le seul des quatre sites où les impressions desktop (305) dépassent le
        mobile (238), ce qui suggère une recherche faite en amont d&apos;un voyage plutôt qu&apos;en
        déplacement. La France se situe à 16 impressions, environ 3% du total.
      </p>

      <h2>Voge Bordeaux (vogebordeaux.fr)</h2>

      <p>
        218 impressions en moins de 3 mois, avec un schéma de concentration presque identique
        à BordeauxRide mais sur du contenu éditorial : l&apos;article &laquo; Voge, quelle
        origine, la marque chinoise devenue référence en Europe &raquo; capte 152 impressions,
        70% du total du site. La géographie penche ici vers des marchés francophones hors
        France : Maroc (80), Belgique (40), Madagascar (22), Suisse (18), des marchés où
        l&apos;IA générative de Google répond déjà en français avant la France elle-même
        (France : 2 impressions, moins de 1%).
      </p>
      <p>
        Les fiches produit sont quasiment invisibles dans ce rapport (1 à 2 impressions
        chacune) ; sur ce site en particulier, le contenu éditorial est pratiquement la seule
        chose visible pour l&apos;IA.
      </p>

      <h2>MotoPassion65 (motopassion65.com)</h2>

      <p>
        108 impressions en moins de 3 mois, le plus petit volume des quatre mais le plus sain
        structurellement : aucune page ne domine. L&apos;article &laquo; Top 5 moto trail
        Pyrénées &raquo; arrive en tête avec 21 impressions (19% du total, très loin des
        concentrations de plus de 70% observées sur les deux sites précédents), suivi de près
        par une fiche produit (Voge SR4 Max 400cc, 11 impressions) et un autre article
        éditorial (&laquo; Voge DS900X &raquo;, 10 impressions).
      </p>
      <p>
        C&apos;est le seul des quatre sites où contenu éditorial et fiches produit coexistent
        dans le classement plutôt qu&apos;un seul type ne domine entièrement. La géographie
        reflète celle de Voge Bordeaux (Maroc, Belgique, Suisse, Algérie) ; la France reste
        résiduelle à 3 impressions, environ 3%.
      </p>

      <h2>Ce que ces quatre sites ont en commun</h2>

      <ul>
        <li>
          Sur trois des quatre sites, un seul article éditorial capte 70% ou plus de toutes
          les impressions générées par l&apos;IA. La concentration sur une page qui répond
          fortement à une question est ici la norme, pas l&apos;exception.
        </li>
        <li>
          Sprint Motors est le contre-exemple, et c&apos;est important : le même principe
          s&apos;étend aux fiches produit dès qu&apos;elles sont structurées assez clairement
          pour fonctionner comme une réponse directe.
        </li>
        <li>
          La seule constante sur les quatre, quel que soit le secteur ou le type de contenu :
          la France se situe entre moins de 1% et environ 3% du total des impressions, sur
          chaque site sans exception. Cette régularité pointe vers une contrainte de
          disponibilité du déploiement, pas vers un problème de qualité de contenu.
        </li>
      </ul>

      <p>
        Si vos propres chiffres Search Console pour la France semblent tout aussi faibles,
        nous expliquons pourquoi dans{' '}
        <Link href="/blog/rapport-ia-generative-google-search-console">
          notre article sur le rapport IA générative de Search Console
        </Link>
        . Et pour comprendre le mécanisme que ces quatre cas illustrent, c&apos;est-à-dire ce
        qui détermine réellement si une page est citée, consultez{' '}
        <Link href="/blog/comment-apparaitre-reponses-google-ia-generative">
          notre analyse de ce qui est cité et pourquoi
        </Link>
        .
      </p>

      <h2>Ce que ça change pour la suite</h2>

      <p>
        Ces quatre sites ne sont pas des cas exceptionnels : ils montrent ce qui se passe déjà
        sur les marchés où les AI Overviews sont actifs, appliqué à du contenu ordinaire de
        petites entreprises. Notre{' '}
        <Link href="/blog/ai-overviews-france-checklist-avant-deploiement">
          checklist en sept points
        </Link>{' '}
        couvre les étapes concrètes pour préparer un site au même résultat, de la structuration
        des pages autour d&apos;une question explicite jusqu&apos;à l&apos;ajout d&apos;un
        schema FAQ là où il s&apos;applique réellement.
      </p>

      <p>
        Dès maintenant, ces quatre sites construisent déjà un historique de citations sur des
        marchés où les AI Overviews sont actifs, des mois avant que Google ne déploie la
        fonctionnalité en France, attendue avant septembre 2026. Quand ça arrivera, ils ne
        partiront pas de zéro comme la plupart de leurs concurrents.
      </p>

      <h2>FAQ</h2>

      <h3 className="text-base font-semibold text-text-primary mt-6 mb-2">
        Ces sites ont-ils été optimisés spécifiquement pour l&apos;IA générative ?
      </h3>
      <p>
        Non. Aucun des quatre n&apos;a été refait ou réécrit spécifiquement pour être cité par
        l&apos;IA. Leur contenu était déjà structuré autour de réponses claires et directes à
        des questions précises, le type de structure qui a toujours servi le SEO classique.
        Cette structure s&apos;avère être exactement ce que l&apos;IA générative de Google
        extrait et cite.
      </p>

      <h3 className="text-base font-semibold text-text-primary mt-6 mb-2">
        Pourquoi une seule page capte-t-elle autant d&apos;impressions sur certains sites ?
      </h3>
      <p>
        Sur trois des quatre sites, un article répond à une question précise de manière assez
        complète pour devenir le passage clair et extractible pour cette question, donc il est
        repris dans la réponse IA bien plus souvent que les autres pages. C&apos;est un effet
        de concentration, pas un hasard : la page qui répond le plus directement à une question
        absorbe généralement la majorité des citations qui s&apos;y rapportent.
      </p>

      <h3 className="text-base font-semibold text-text-primary mt-6 mb-2">
        Ces impressions se traduisent-elles en visites ?
      </h3>
      <p>
        Ça ne peut pas encore être mesuré directement. Le rapport Performance IA générative
        mesure aujourd&apos;hui des impressions, pas des clics spécifiquement rattachés aux
        réponses IA, une limite que nous détaillons dans{' '}
        <Link href="/blog/rapport-ia-generative-google-search-console">
          notre article sur ce rapport
        </Link>
        .
      </p>

      <h3 className="text-base font-semibold text-text-primary mt-6 mb-2">
        Mon site peut-il obtenir les mêmes résultats ?
      </h3>
      <p>
        Le schéma se répète sur quatre sites indépendants et de secteurs différents, ce qui
        suggère que ce n&apos;est pas un coup de chance. Structurer vos pages les plus fortes
        autour de réponses directes, selon notre{' '}
        <Link href="/blog/ai-overviews-france-checklist-avant-deploiement">checklist</Link>,
        est le point de départ concret. Les résultats apparaîtront probablement d&apos;abord
        sur le trafic international, puisque le déploiement des AI Overviews en France
        n&apos;a pas encore eu lieu.
      </p>

      <hr />

      <p>
        <em>
          Vous voulez savoir ce que votre propre rapport IA générative de Search Console
          montre déjà ? Nous menons exactement cet audit, le même processus derrière ces
          quatre études de cas, sur n&apos;importe quel site. Notre{' '}
          <Link href="/services/web-dev">accompagnement SEO &amp; GEO</Link> le couvre de bout
          en bout.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/rapport-ia-generative-google-search-console">
              Rapport IA générative dans Google Search Console : comment le lire
            </Link>
          </li>
          <li>
            <Link href="/blog/comment-apparaitre-reponses-google-ia-generative">
              Comment apparaître dans les réponses IA générative de Google ?
            </Link>
          </li>
          <li>
            <Link href="/blog/ai-overviews-france-checklist-avant-deploiement">
              AI Overviews arrivent en France avant septembre 2026 : ce qu&apos;il faut avoir
              fait avant
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )
}
