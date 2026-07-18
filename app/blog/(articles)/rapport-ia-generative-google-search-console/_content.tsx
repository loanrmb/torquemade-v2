'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function RapportIaGenerativeGscContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">Google Search Console&apos;s Generative AI report: how to read it (and why it shows almost nothing in France yet)</h1>

      <p>
        Search Console now has a report called the Generative AI Performance Report.
        It isolates impressions coming from AI Overviews, AI Mode, and generative
        Discover features, data that used to sit buried inside the standard Search
        performance report, mixed in with regular blue-link clicks. If you have been
        wondering how often your pages show up inside an AI-generated answer, this is
        where Google now tells you, at least partially.
      </p>

      <h2>What it measures</h2>

      <p>
        The report breaks impressions down by four dimensions:
      </p>

      <ul>
        <li><strong>Pages.</strong> Which URLs on your site show up inside AI-generated answers.</li>
        <li><strong>Country.</strong> Which market the impression came from.</li>
        <li><strong>Device.</strong> Mobile, desktop, or tablet.</li>
        <li><strong>Date.</strong> How impressions evolve over time.</li>
      </ul>

      <p>
        What it does not include yet matters just as much: no click data, and no
        query data. You can see that your pages are appearing, but not yet which
        question they answered, nor how many clicks they generated from an AI
        answer. That is the key limitation to keep in mind while reading this report.
      </p>

      <p>
        One more nuance worth knowing: if a page appears in an AI answer alongside
        other results from the same site, the whole thing counts as a single
        impression at the graph level, not one impression per result shown.
      </p>

      <h2>Timeline</h2>

      <p>
        Google announced this report on June 3, 2026, on the official Google Search
        Central blog, in a post by Hillel Maoz, Search Ecosystem Engineering Manager,
        and Moshe Samet, Product Manager for Search Console.
      </p>

      <p>
        The initial rollout was limited to a subset of UK sites, then progressively
        expanded to more properties and markets.
      </p>

      <p>
        Google also introduced a separate feature alongside it: a toggle that lets
        site owners block their content from appearing in AI features. One point
        Google made explicit: this choice does not affect ranking in regular organic
        search results. Opting out of AI features is not a hidden SEO penalty.
      </p>

      <h2>Why French sites see almost no data yet</h2>

      <p>
        If your report shows impressions near zero, that is not a configuration
        problem on your end. AI Overviews is expected to roll out in France before
        September 2026 according to Google&apos;s own announcements, the French market
        simply is not covered yet.
      </p>

      <p>
        Whatever handful of impressions you might see are coming from markets where
        the feature is already live, the UK, the US, Belgium, Morocco, depending on
        your international audience, not from your French visitors.
      </p>

      <p>
        You are not doing anything wrong. The feature just is not live in your
        market yet.
      </p>

      <h2>FAQ</h2>

      <h3 className="text-base font-semibold text-text-primary mt-6 mb-2">
        Why don&apos;t I see my French site in this report?
      </h3>
      <p>
        Because Google&apos;s generative AI features (AI Overviews, AI Mode) are not
        live in France yet. The report can only show impressions from markets where
        these features already exist: the UK, the US, Belgium, Morocco, depending on
        your audience. A French site might pick up a handful of impressions from
        visitors in those countries, but the bulk of its domestic traffic is not
        affected yet.
      </p>

      <h3 className="text-base font-semibold text-text-primary mt-6 mb-2">
        Should I worry if impressions are at zero?
      </h3>
      <p>
        No. Zero, or near-zero, impressions simply reflect the fact that AI
        Overviews has not rolled out in France yet, not a technical issue or a
        penalty on your site. The classic Performance report remains the right
        metric to track your current organic visibility.
      </p>

      <h3 className="text-base font-semibold text-text-primary mt-6 mb-2">
        Does this report replace the classic Performance report?
      </h3>
      <p>
        No. The classic Performance report (clicks, impressions, CTR, average
        position for standard search results) keeps working exactly as before. The
        Generative AI report is a separate, complementary report focused only on
        impressions inside AI-generated answers.
      </p>

      <h3 className="text-base font-semibold text-text-primary mt-6 mb-2">
        What should I do while waiting for the France rollout?
      </h3>
      <p>
        While waiting, the best preparation is structuring your content to answer
        your readers&apos; questions directly, with clear, extractable answers. That
        is exactly what we break down in a follow-up article in this series, based
        on real Search Console data.
      </p>

      <hr />

      <p>
        <em>
          Want help structuring your content so it is ready once AI Overviews
          reaches France? Our{' '}
          <Link href="/services/web-dev">SEO &amp; GEO support</Link> covers exactly
          that. In a follow-up article, we break down what actually gets cited by
          Google&apos;s AI, based on real Search Console data.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/google-search-console-metriques">
              Google Search Console: The 5 Metrics to Track Every Week
            </Link>
          </li>
          <li>
            <Link href="/blog/impressions-google-sans-publicite">
              How to Go from 0 to 800,000 Google Impressions Without Advertising
            </Link>
          </li>
          <li>
            <Link href="/blog/intention-recherche-seo">
              Search Intent: Understanding What Users Really Want
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Rapport IA générative dans Google Search Console : comment le lire (et pourquoi il ne dit encore rien en France)</h1>

      <p>
        Search Console propose désormais un rapport appelé le rapport de
        performance IA générative (Generative AI Performance Report). Il isole les
        impressions provenant d&apos;AI Overviews, d&apos;AI Mode et des
        fonctionnalités génératives de Discover, des données qui étaient jusqu&apos;ici
        noyées dans le rapport Performances classique, mélangées aux clics sur les
        résultats traditionnels. Si vous vous demandiez combien de fois vos pages
        apparaissent dans une réponse générée par IA, c&apos;est désormais là que
        Google vous le dit, du moins en partie.
      </p>

      <h2>Ce que le rapport mesure</h2>

      <p>
        Le rapport ventile les impressions selon quatre dimensions :
      </p>

      <ul>
        <li><strong>Pages.</strong> Quelles URL de votre site apparaissent dans des réponses IA.</li>
        <li><strong>Pays.</strong> Dans quel marché l&apos;impression a eu lieu.</li>
        <li><strong>Appareil.</strong> Mobile, ordinateur ou tablette.</li>
        <li><strong>Date.</strong> L&apos;évolution des impressions dans le temps.</li>
      </ul>

      <p>
        Ce qu&apos;il ne contient pas encore compte tout autant : pas de données de
        clics, pas de requêtes. Vous savez que vos pages apparaissent, mais pas
        encore sur quelle question exactement, ni combien de clics elles génèrent
        depuis une réponse IA. C&apos;est la limite principale à garder en tête en
        lisant ce rapport.
      </p>

      <p>
        Autre nuance à connaître : si une page apparaît dans une réponse IA aux
        côtés d&apos;autres résultats provenant du même site, l&apos;ensemble compte
        comme une seule impression au niveau du graphique, pas une impression par
        résultat affiché.
      </p>

      <h2>Calendrier</h2>

      <p>
        Google a annoncé ce rapport le 3 juin 2026, sur le blog officiel Google
        Search Central, dans un billet signé par Hillel Maoz, Search Ecosystem
        Engineering Manager, et Moshe Samet, Product Manager pour Search Console.
      </p>

      <p>
        Le déploiement initial s&apos;est limité à un sous-ensemble de sites au
        Royaume-Uni, avant de s&apos;étendre progressivement à d&apos;autres propriétés
        et marchés.
      </p>

      <p>
        Google a introduit en parallèle une fonctionnalité distincte : un
        interrupteur permettant aux propriétaires de site de bloquer
        l&apos;apparition de leur contenu dans les fonctionnalités IA. Point
        important précisé explicitement par Google : ce choix n&apos;affecte pas le
        classement dans les résultats de recherche organiques classiques. Bloquer
        l&apos;IA générative n&apos;est pas une pénalité SEO déguisée.
      </p>

      <h2>Pourquoi les sites français voient presque aucune donnée</h2>

      <p>
        Si votre rapport affiche des impressions proches de zéro, ce n&apos;est pas
        un problème de configuration de votre côté. AI Overviews devrait être
        déployé en France avant septembre 2026 selon les annonces de Google, le
        marché français n&apos;est tout simplement pas encore couvert.
      </p>

      <p>
        Les quelques impressions que vous voyez éventuellement apparaître
        proviennent de marchés où la fonctionnalité est déjà active, Royaume-Uni,
        États-Unis, Belgique, Maroc, selon la composition de votre audience
        internationale, pas de vos visiteurs français.
      </p>

      <p>
        Vous ne faites rien de travers. La fonctionnalité n&apos;est simplement pas
        encore live sur votre marché.
      </p>

      <h2>FAQ</h2>

      <h3 className="text-base font-semibold text-text-primary mt-6 mb-2">
        Pourquoi je ne vois pas mon site français dans ce rapport ?
      </h3>
      <p>
        Parce que les fonctionnalités IA générative de Google (AI Overviews, AI
        Mode) ne sont pas encore déployées en France. Le rapport ne peut afficher
        que les impressions provenant de marchés où ces fonctionnalités existent
        déjà : Royaume-Uni, États-Unis, Belgique, Maroc, selon votre audience. Un
        site français peut recevoir quelques impressions issues de visiteurs dans
        ces pays, mais l&apos;essentiel de son trafic domestique n&apos;est pas
        encore concerné.
      </p>

      <h3 className="text-base font-semibold text-text-primary mt-6 mb-2">
        Faut-il s&apos;inquiéter si les impressions sont à zéro ?
      </h3>
      <p>
        Non. Des impressions à zéro, ou proches de zéro, reflètent simplement
        l&apos;absence de déploiement d&apos;AI Overviews en France, pas un problème
        technique ni une pénalité sur votre site. Le rapport Performances classique
        reste le bon indicateur pour suivre votre visibilité organique actuelle.
      </p>

      <h3 className="text-base font-semibold text-text-primary mt-6 mb-2">
        Ce rapport remplace-t-il le rapport Performances classique ?
      </h3>
      <p>
        Non. Le rapport Performances classique (clics, impressions, CTR, position
        moyenne pour les résultats de recherche traditionnels) continue de
        fonctionner exactement comme avant. Le rapport IA générative est un rapport
        séparé et complémentaire, focalisé uniquement sur les impressions dans les
        réponses générées par IA.
      </p>

      <h3 className="text-base font-semibold text-text-primary mt-6 mb-2">
        Que faire en attendant le déploiement en France ?
      </h3>
      <p>
        En attendant, la meilleure préparation consiste à structurer votre contenu
        pour qu&apos;il réponde directement aux questions de vos lecteurs, avec des
        réponses claires et extractibles. C&apos;est exactement ce qu&apos;on
        détaille dans un prochain article de cette série, à partir de données
        réelles de Search Console.
      </p>

      <hr />

      <p>
        <em>
          Besoin d&apos;aide pour structurer votre contenu avant l&apos;arrivée
          d&apos;AI Overviews en France ? Notre{' '}
          <Link href="/services/web-dev">accompagnement SEO &amp; GEO</Link> couvre
          exactement ça. Dans un prochain article, nous détaillerons ce qui est
          réellement cité par l&apos;IA de Google, à partir de données réelles de
          Search Console.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/google-search-console-metriques">
              Google Search Console : les 5 métriques à surveiller chaque semaine
            </Link>
          </li>
          <li>
            <Link href="/blog/impressions-google-sans-publicite">
              Comment passer de 0 à 800 000 impressions Google sans publicité
            </Link>
          </li>
          <li>
            <Link href="/blog/intention-recherche-seo">
              Intentions de recherche : comprendre ce que veut vraiment l&apos;utilisateur
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )
}
