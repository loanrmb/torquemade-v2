'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function ImpressionsGoogleContent() {
  const lang = useLang()
  return lang === 'en' ? <ArticleEN /> : <ArticleFR />
}

function ArticleFR() {
  return (
    <article className="blog-article">

      <header className="blog-header">
        <h1 className="blog-article-title">Comment passer de 0 à 800 000 impressions Google sans publicité</h1>
        <p className="blog-intro">
          En janvier 2024, le site de Sprint Motors n&apos;existait pas. Dix-huit mois plus
          tard, il totalise 791 000 impressions organiques sur Google Search, sans un
          seul euro investi en publicité. Ce n&apos;est pas un coup de chance. C&apos;est le
          résultat d&apos;une architecture SEO pensée dès le départ, d&apos;un contenu structuré
          pour répondre à des intentions précises, et d&apos;une exécution technique rigoureuse.
          Voici, sans filtre, la méthode que nous avons appliquée.
        </p>
      </header>

      <nav className="blog-toc" aria-label="Sommaire">
        <p className="blog-toc-title">Dans cet article</p>
        <ol>
          <li><a href="#impressions-cest-quoi">Ce que représentent vraiment 800 000 impressions</a></li>
          <li><a href="#point-de-depart">Le point de départ : zéro, et une stratégie claire</a></li>
          <li><a href="#architecture-seo">L&apos;architecture SEO avant le premier mot de contenu</a></li>
          <li><a href="#recherche-mots-cles">La recherche de mots-clés : volume vs intention</a></li>
          <li><a href="#contenu-qui-classe">Écrire du contenu que Google veut classer</a></li>
          <li><a href="#microsites">Les microsites de marque : multiplier les points d&apos;entrée</a></li>
          <li><a href="#technique">La technique : ce qui accélère ou bloque tout</a></li>
          <li><a href="#patience-et-mesure">Patience et mesure : lire les signaux au bon moment</a></li>
          <li><a href="#conclusion">Ce que ça change pour votre activité</a></li>
        </ol>
      </nav>

      <section id="impressions-cest-quoi">
        <h2>1. Ce que représentent vraiment 800 000 impressions</h2>
        <p>
          Une impression Google, c&apos;est chaque fois que votre site apparaît dans
          les résultats de recherche, que l&apos;utilisateur clique ou non. C&apos;est
          la mesure de votre <strong>visibilité brute</strong> sur le moteur de recherche.
        </p>
        <p>
          791 000 impressions, ça signifie que le nom de Sprint Motors est apparu
          près de 800 000 fois devant des personnes en train de chercher
          activement une moto, un concessionnaire, ou une information liée au secteur
          en Gironde et au-delà. Le taux de clic moyen en SEO tourne autour de 2 à 5 %
          selon les positions. Même à 2 %, c&apos;est plus de 15 000 visites organiques
          qualifiées, des personnes avec une intention réelle.
        </p>
        <p>
          La différence fondamentale avec la publicité : ces impressions continuent
          d&apos;arriver tous les jours, même quand personne ne travaille sur le site.
          Un article bien positionné génère du trafic pendant des mois, parfois des années.
          Une campagne Google Ads s&apos;arrête au premier euro non dépensé.
        </p>
      </section>

      <section id="point-de-depart">
        <h2>2. Le point de départ : zéro, et une stratégie claire</h2>
        <p>
          Sprint Motors est un concessionnaire multimarque basé à Bordeaux.
          Avant notre intervention, ils n&apos;avaient pas de site web : ou plutôt,
          ils avaient une page quasi vide, sans contenu, sans structure,
          invisible sur Google. Zéro backlinks significatifs. Zéro contenu indexé.
        </p>
        <p>
          Ce point de départ invalide l&apos;argument qu&apos;on entend souvent :
          <em>"on ne peut rien faire sans un site qui a déjà de l&apos;autorité."</em>
          Ce n&apos;est pas vrai. Ce qui compte au démarrage, c&apos;est la clarté
          de la stratégie, pas l&apos;historique du domaine.
        </p>
        <p>La stratégie initiale reposait sur trois décisions :</p>
        <ul>
          <li>Construire un site Next.js performant, avec un score Core Web Vitals dans le vert dès le lancement</li>
          <li>Cibler en priorité des requêtes locales à forte intention d&apos;achat, peu concurrentielles à l&apos;échelle nationale</li>
          <li>Créer des microsites de marque séparés pour Cyclone, Voge et Orcal Bordeaux, afin de multiplier les points d&apos;entrée sans diluer le site principal</li>
        </ul>
      </section>

      <section id="architecture-seo">
        <h2>3. L&apos;architecture SEO avant le premier mot de contenu</h2>
        <p>
          L&apos;erreur la plus fréquente en SEO est de commencer à écrire du contenu
          avant d&apos;avoir défini l&apos;architecture du site. Une mauvaise structure
          peut rendre invisible du contenu pourtant excellent.
        </p>

        <h3>La hiérarchie des pages</h3>
        <p>Pour Sprint Motors, nous avons organisé le site en silos thématiques :</p>
        <ul>
          <li>Un silo par marque distribuée (Cyclone, Voge, Orcal, etc.)</li>
          <li>Un silo pour les motos neuves et un pour les occasions</li>
          <li>Des pages locales pour les communes proches de Bordeaux</li>
          <li>Un blog pour les requêtes informationnelles du secteur</li>
        </ul>
        <p>
          Chaque silo a sa propre logique de maillage interne : les pages catégories pointent
          vers les fiches produits, les fiches produits renvoient vers les pages catégories
          et les articles connexes. Google ne perd jamais le fil.
        </p>

        <h3>Les URLs : simples, descriptives, stables</h3>
        <p>
          Une URL comme <code>/motos/cyclone/nt500</code> dit tout à Google.
          Nous n&apos;avons pas changé une seule URL après le lancement, chaque
          modification est une redirection à gérer et un signal de volatilité
          que Google enregistre.
        </p>

        <h3>Le sitemap et le fichier robots.txt</h3>
        <p>
          Le sitemap XML a été généré automatiquement par Next.js et soumis dès
          le premier jour dans Google Search Console. Le fichier robots.txt bloque
          uniquement les pages sans valeur SEO. Rien d&apos;autre.
        </p>
      </section>

      <section id="recherche-mots-cles">
        <h2>4. La recherche de mots-clés : volume vs intention</h2>
        <p>
          Notre approche pour Sprint Motors a été inverse à la majorité des projets SEO :
          cibler d&apos;abord les requêtes à fort taux de conversion, même à faible volume.
        </p>

        <h3>Prioriser les requêtes transactionnelles locales</h3>
        <p>
          &ldquo;Cyclone NT500 Bordeaux&rdquo;, &ldquo;concessionnaire Voge Gironde&rdquo;,
          &ldquo;moto électrique Orcal prix&rdquo;, ces requêtes ont des volumes modestes
          mais une intention d&apos;achat explicite. Quelqu&apos;un qui tape le nom d&apos;un
          modèle précis avec une ville est à deux pas de l&apos;acte d&apos;achat.
        </p>

        <h3>Les requêtes informationnelles comme filet d&apos;entrée</h3>
        <p>
          En parallèle, nous avons ciblé des requêtes de découverte :
          &ldquo;avis Cyclone NT500&rdquo;, &ldquo;quelle moto pour débuter en 2024&rdquo;.
          Ces articles amènent des visiteurs en phase de réflexion et construisent
          l&apos;autorité thématique du site aux yeux de Google.
        </p>

        <h3>La longue traîne : là où les impressions s&apos;accumulent</h3>
        <p>
          La grande majorité des 791 000 impressions vient de centaines de requêtes
          à faible volume individuel. Un site bien structuré capture naturellement
          ces requêtes sans les avoir toutes ciblées explicitement.
        </p>
      </section>

      <section id="contenu-qui-classe">
        <h2>5. Écrire du contenu que Google veut classer</h2>
        <p>
          Google classe le contenu qui répond le mieux à l&apos;intention de recherche
          d&apos;un utilisateur, avec suffisamment de profondeur pour être considéré
          comme une référence sur le sujet.
        </p>

        <h3>Correspondre à l&apos;intention de recherche</h3>
        <p>
          Avant d&apos;écrire une page, la première question est : que veut vraiment
          l&apos;utilisateur qui tape cette requête ? La forme du contenu doit correspondre
          à cette intention, pas à ce qu&apos;on a envie de dire.
        </p>

        <h3>La profondeur thématique</h3>
        <p>
          Pour chaque marque distribuée, nous avons créé non pas une page
          mais un ensemble de pages interconnectées : page marque, pages modèles,
          articles de comparaison, articles d&apos;avis. Google comprend que ce site
          est une ressource complète, pas une page isolée.
        </p>

        <h3>Les balises Title et H1 : précis, pas créatifs</h3>
        <p>
          Pour le SEO, une balise Title doit être descriptive avant d&apos;être poétique.
          &ldquo;Cyclone NT500 : Fiche technique, prix et disponibilité chez Sprint Motors Bordeaux&rdquo;
          est meilleur que &ldquo;La NT500, une moto qui change tout.&rdquo;
        </p>
      </section>

      <section id="microsites">
        <h2>6. Les microsites de marque : multiplier les points d&apos;entrée</h2>
        <p>
          L&apos;une des décisions les plus structurantes du projet Sprint Motors a été
          de créer des microsites séparés pour chaque marque distribuée. Cyclone Bordeaux,
          Voge Bordeaux et Orcal Bordeaux ont chacun leur propre domaine, leur propre contenu,
          leur propre fiche Google Business Profile.
        </p>
        <p>
          L&apos;avantage SEO est direct : sur une requête comme &ldquo;Voge moto Bordeaux&rdquo;,
          Sprint Motors peut potentiellement apparaître deux fois dans les résultats.
          C&apos;est ce qu&apos;on appelle la domination des SERP.
        </p>
        <p>
          Ces microsites pointent également vers le site principal via des liens contextuels,
          ce qui renforce l&apos;autorité de Sprint Motors aux yeux de Google.
        </p>
      </section>

      <section id="technique">
        <h2>7. La technique : ce qui accélère ou bloque tout</h2>
        <p>
          Le SEO technique n&apos;est pas spectaculaire mais il est fondamental.
          Un site lent ou difficile à crawler ne bénéficiera jamais pleinement
          du meilleur contenu du monde.
        </p>

        <h3>Next.js comme avantage structurel</h3>
        <p>
          Le rendu serveur et la génération statique produisent du HTML directement
          indexable par Googlebot. Les images sont automatiquement optimisées,
          le code est découpé par page, et les fonts sont préchargées.
          Résultat : un LCP sous 1,5 seconde sur mobile dès le lancement.
        </p>

        <h3>L&apos;indexation : ne pas laisser Google deviner</h3>
        <p>
          Chaque nouvelle page publiée est immédiatement soumise à l&apos;outil
          d&apos;inspection d&apos;URL de Search Console pour forcer le crawl.
          Sur un site jeune, cette pratique accélère significativement l&apos;indexation.
        </p>

        <h3>Les données structurées</h3>
        <p>
          Les fiches produits intègrent un schema <code>Product</code> avec prix,
          disponibilité et marque. Les pages locales ont un schema <code>LocalBusiness</code>.
          Les articles de blog ont un schema <code>Article</code> avec date de publication.
        </p>
      </section>

      <section id="patience-et-mesure">
        <h2>8. Patience et mesure : lire les signaux au bon moment</h2>
        <p>
          Les premiers résultats significatifs sur Sprint Motors sont apparus après 3 mois.
          La croissance s&apos;est accélérée à partir de 6 mois. Les 791 000 impressions
          sont le cumul de 18 mois de travail continu.
        </p>

        <h3>Les signaux à surveiller en phase de démarrage</h3>
        <p>
          Dans les 3 premiers mois, l&apos;indicateur le plus important n&apos;est pas
          le trafic, c&apos;est l&apos;indexation. Combien de pages sont indexées dans
          Search Console ? Est-ce que le nombre augmente semaine après semaine ?
        </p>

        <h3>Les signaux à surveiller en phase de croissance</h3>
        <p>
          À partir de 3 à 6 mois : les impressions par requête, la position moyenne,
          et l&apos;évolution du CTR. Une page en position 8 qui gagne deux places
          peut doubler son trafic, c&apos;est là que se concentre l&apos;effort
          d&apos;optimisation.
        </p>
      </section>

      <section id="conclusion">
        <h2>Ce que ça change pour votre activité</h2>
        <p>
          791 000 impressions organiques, c&apos;est la preuve qu&apos;une stratégie SEO cohérente,
          appliquée sur la durée, produit des résultats mesurables pour n&apos;importe
          quelle activité locale, sans dépendre d&apos;un budget publicitaire qui s&apos;évapore
          dès qu&apos;on arrête de payer.
        </p>
        <p>
          La méthode n&apos;a rien de secret : architecture pensée pour Google, contenu aligné
          sur les intentions de recherche, technique sans faille, et régularité dans
          l&apos;exécution. Ce que nous faisons pour Sprint Motors, nous pouvons le faire
          pour votre activité.
        </p>
      </section>

      <aside className="blog-cta">
        <p>
          Vous voulez comprendre où en est votre visibilité Google
          et ce qui bloque votre croissance organique ?
        </p>
        <Link href="/contact" className="btn-primary">
          Parler de votre projet
        </Link>
      </aside>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/seo-local-2025-guide">
              SEO local en 2025 : le guide complet pour les commerces de proximité
            </Link>
          </li>
          <li>
            <Link href="/blog/structurer-site-web-seo-conception">
              Comment structurer un site web pour le SEO dès la conception
            </Link>
          </li>
          <li>
            <Link href="/blog/nextjs-plus-rapide-que-wordpress">
              Pourquoi un site Next.js est plus rapide qu&apos;un site WordPress
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )
}

function ArticleEN() {
  return (
    <article className="blog-article">

      <header className="blog-header">
        <h1 className="blog-article-title">How to Go from 0 to 800,000 Google Impressions Without Advertising</h1>
        <p className="blog-intro">
          In January 2024, Sprint Motors&apos; website didn&apos;t exist. Eighteen months later,
          it has accumulated 791,000 organic impressions on Google Search, without a single
          euro spent on advertising. This isn&apos;t luck. It&apos;s the result of an SEO architecture
          designed from day one, content structured to answer precise search intent, and rigorous
          technical execution. Here, without filter, is the method we applied.
        </p>
      </header>

      <nav className="blog-toc" aria-label="Table of contents">
        <p className="blog-toc-title">In this article</p>
        <ol>
          <li><a href="#impressions-cest-quoi">What 800,000 impressions really represent</a></li>
          <li><a href="#point-de-depart">The starting point: zero, and a clear strategy</a></li>
          <li><a href="#architecture-seo">SEO architecture before the first word of content</a></li>
          <li><a href="#recherche-mots-cles">Keyword research: volume vs intent</a></li>
          <li><a href="#contenu-qui-classe">Writing content Google wants to rank</a></li>
          <li><a href="#microsites">Brand microsites: multiplying entry points</a></li>
          <li><a href="#technique">The technical side: what accelerates or blocks everything</a></li>
          <li><a href="#patience-et-mesure">Patience and measurement: reading signals at the right time</a></li>
          <li><a href="#conclusion">What this means for your business</a></li>
        </ol>
      </nav>

      <section id="impressions-cest-quoi">
        <h2>1. What 800,000 Impressions Really Represent</h2>
        <p>
          A Google impression is every time your site appears in search results, whether
          the user clicks or not. It&apos;s the measure of your <strong>raw visibility</strong>
          on the search engine.
        </p>
        <p>
          791,000 impressions means Sprint Motors&apos; name appeared nearly 800,000 times
          in front of people actively searching for a motorbike, a dealer, or industry information
          in Gironde and beyond. The average SEO click-through rate is around 2–5% depending
          on position. Even at 2%, that&apos;s more than 15,000 qualified organic visits:
          people with real intent, not a reconstructed ad audience.
        </p>
        <p>
          The fundamental difference from advertising: these impressions keep arriving every day,
          even when nobody is working on the site. A well-ranked article generates traffic for
          months, sometimes years. A Google Ads campaign stops the moment the budget does.
        </p>
      </section>

      <section id="point-de-depart">
        <h2>2. The Starting Point: Zero, and a Clear Strategy</h2>
        <p>
          Sprint Motors is a multi-brand motorcycle dealer based in Bordeaux. Before our
          involvement, they had no website, or rather, they had a nearly empty page,
          no content, no structure, invisible on Google. Zero significant backlinks.
          Zero indexed content.
        </p>
        <p>
          This starting point invalidates an argument we often hear:
          <em>&ldquo;you can&apos;t do anything without a site that already has authority.&rdquo;</em>
          That&apos;s not true. What matters at the start is the clarity of the strategy,
          not the domain&apos;s history.
        </p>
        <p>The initial strategy rested on three decisions:</p>
        <ul>
          <li>Build a high-performance Next.js site, with green Core Web Vitals scores from day one</li>
          <li>Prioritise local queries with strong purchase intent, low competition at national scale</li>
          <li>Create separate brand microsites for Cyclone, Voge, and Orcal Bordeaux, multiplying entry points without diluting the main site</li>
        </ul>
      </section>

      <section id="architecture-seo">
        <h2>3. SEO Architecture Before the First Word of Content</h2>
        <p>
          The most common SEO mistake is writing content before defining site architecture.
          A poorly structured site can render even excellent content invisible.
        </p>

        <h3>Page hierarchy</h3>
        <p>For Sprint Motors, we organised the site into thematic silos:</p>
        <ul>
          <li>One silo per distributed brand (Cyclone, Voge, Orcal, etc.)</li>
          <li>One silo for new bikes and one for used</li>
          <li>Local pages for communes near Bordeaux</li>
          <li>A blog for sector informational queries</li>
        </ul>
        <p>
          Each silo has its own internal linking logic: category pages link to product listings,
          product listings link back to category pages and related articles. Google never loses
          the thread.
        </p>

        <h3>URLs: simple, descriptive, stable</h3>
        <p>
          A URL like <code>/bikes/cyclone/nt500</code> tells Google everything. We didn&apos;t
          change a single URL after launch, every modification means a redirect to manage
          and a volatility signal Google records.
        </p>

        <h3>Sitemap and robots.txt</h3>
        <p>
          The XML sitemap was automatically generated by Next.js and submitted on day one
          in Google Search Console. The robots.txt blocks only pages with no SEO value.
          Nothing else.
        </p>
      </section>

      <section id="recherche-mots-cles">
        <h2>4. Keyword Research: Volume vs Intent</h2>
        <p>
          Our approach for Sprint Motors was the inverse of most SEO projects: target
          high-conversion queries first, even at low volume.
        </p>

        <h3>Prioritising local transactional queries</h3>
        <p>
          &ldquo;Cyclone NT500 Bordeaux,&rdquo; &ldquo;Voge dealer Gironde,&rdquo;
          &ldquo;Orcal electric motorcycle price&rdquo;, modest volumes but explicit
          purchase intent. Someone typing a specific model name with a city is two steps
          from buying. That traffic is worth ten times generic traffic.
        </p>

        <h3>Informational queries as an entry net</h3>
        <p>
          In parallel, we targeted discovery queries: &ldquo;Cyclone NT500 review,&rdquo;
          &ldquo;best beginner motorcycle 2024.&rdquo; These articles bring visitors in the
          consideration phase and build the site&apos;s topical authority in Google&apos;s eyes.
        </p>

        <h3>The long tail: where impressions accumulate</h3>
        <p>
          The vast majority of 791,000 impressions come from hundreds of individually
          low-volume queries. A well-structured site with coherent topical content naturally
          captures these queries without having explicitly targeted each one.
        </p>
      </section>

      <section id="contenu-qui-classe">
        <h2>5. Writing Content Google Wants to Rank</h2>
        <p>
          Google ranks content that best answers a user&apos;s search intent, with enough
          depth to be considered a reference on the subject.
        </p>

        <h3>Matching search intent</h3>
        <p>
          Before writing a page, the first question is: what does the person typing this
          query actually want? The content format must match that intent, not what we
          want to say.
        </p>

        <h3>Topical depth</h3>
        <p>
          For each distributed brand, we created not one page but an interconnected set:
          brand page, model pages, comparison articles, review articles. Google understands
          this site is a complete resource, not an isolated page trying to rank.
        </p>

        <h3>Title and H1 tags: precise, not creative</h3>
        <p>
          For SEO, a Title tag must be descriptive before it&apos;s poetic.
          &ldquo;Cyclone NT500: Specs, price and availability at Sprint Motors Bordeaux&rdquo;
          outperforms &ldquo;The NT500, a motorbike that changes everything.&rdquo;
        </p>
      </section>

      <section id="microsites">
        <h2>6. Brand Microsites: Multiplying Entry Points</h2>
        <p>
          One of the most structural decisions of the Sprint Motors project was creating
          separate microsites for each distributed brand. Cyclone Bordeaux, Voge Bordeaux,
          and Orcal Bordeaux each have their own domain, their own content, their own
          Google Business Profile listing.
        </p>
        <p>
          The SEO advantage is direct: on a query like &ldquo;Voge motorcycle Bordeaux,&rdquo;
          Sprint Motors can potentially appear twice in results. This is what&apos;s called
          SERP domination.
        </p>
        <p>
          These microsites also link back to the main site via contextual links, reinforcing
          Sprint Motors&apos; authority in Google&apos;s eyes.
        </p>
      </section>

      <section id="technique">
        <h2>7. The Technical Side: What Accelerates or Blocks Everything</h2>
        <p>
          Technical SEO isn&apos;t spectacular but it&apos;s foundational. A slow or hard-to-crawl
          site will never fully benefit from the best content in the world.
        </p>

        <h3>Next.js as a structural advantage</h3>
        <p>
          Server rendering and static generation produce HTML directly indexable by Googlebot,
          unlike a classic React SPA where content is injected by JavaScript after load.
          Images are automatically optimised, code is split per page, and fonts are preloaded.
          Result: an LCP under 1.5 seconds on mobile from day one.
        </p>

        <h3>Indexation: don&apos;t let Google guess</h3>
        <p>
          Every new page published on Sprint Motors is immediately submitted to Search Console&apos;s
          URL inspection tool to force a crawl. On a young site, this practice significantly
          accelerates indexation.
        </p>

        <h3>Structured data</h3>
        <p>
          Product pages integrate a <code>Product</code> schema with price, availability,
          and brand. Local pages have a <code>LocalBusiness</code> schema. Blog articles
          have an <code>Article</code> schema with publication date.
        </p>
      </section>

      <section id="patience-et-mesure">
        <h2>8. Patience and Measurement: Reading Signals at the Right Time</h2>
        <p>
          The first significant results on Sprint Motors appeared after 3 months. Growth
          accelerated from 6 months. The 791,000 impressions are the cumulative result
          of 18 months of continuous work.
        </p>

        <h3>Signals to watch in the launch phase</h3>
        <p>
          In the first 3 months, the most important indicator isn&apos;t traffic, it&apos;s
          indexation. How many pages are indexed in Search Console? Is the number growing
          week by week? If important pages aren&apos;t indexed, understand why before
          producing new ones.
        </p>

        <h3>Signals to watch in the growth phase</h3>
        <p>
          From 3 to 6 months: impressions per query, average position, and CTR evolution.
          A page at position 8 that gains two places can double its traffic, that&apos;s
          where optimisation effort concentrates: improving pages already in the top 10
          rather than creating new ones.
        </p>
      </section>

      <section id="conclusion">
        <h2>What This Means for Your Business</h2>
        <p>
          791,000 organic impressions is proof that a coherent SEO strategy, applied over
          time, produces measurable results for any local business, without depending on
          an advertising budget that evaporates the moment you stop paying.
        </p>
        <p>
          The method has nothing secret: architecture designed for Google, content aligned
          with search intent, flawless technical execution, and consistency. What we do
          for Sprint Motors, we can do for your business, whether it&apos;s a local shop,
          a service provider, or an e-commerce.
        </p>
      </section>

      <aside className="blog-cta">
        <p>
          Want to understand where your Google visibility stands
          and what&apos;s blocking your organic growth?
        </p>
        <Link href="/contact" className="btn-primary">
          Talk about your project
        </Link>
      </aside>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/seo-local-2025-guide">
              Local SEO in 2025: the complete guide for local businesses
            </Link>
          </li>
          <li>
            <Link href="/blog/structurer-site-web-seo-conception">
              How to structure a website for SEO from day one
            </Link>
          </li>
          <li>
            <Link href="/blog/nextjs-plus-rapide-que-wordpress">
              Why a Next.js site is faster than a WordPress site
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )
}
