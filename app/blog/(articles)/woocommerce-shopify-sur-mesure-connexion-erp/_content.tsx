'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function WoocommerceShopifySurMesureConnexionErpContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">WooCommerce, Shopify, or custom: which solution to connect my ERP?</h1>

      <p>
        The choice of e-commerce platform is often made for the wrong reasons — because
        a competitor uses it, because it looks good in a demo, because setup seems fast.
        The question that actually matters is simpler and more technical: can this platform
        reliably communicate with my inventory system? The answer shapes everything that
        follows.
      </p>

      <p>
        For the overview of connection methods between your stock and your website,
        see our guide:{' '}
        <Link href="/blog/connecter-stock-magasin-site-internet">
          how to connect your store inventory to your website
        </Link>
        .
      </p>

      <h2>WooCommerce</h2>

      <p>
        WooCommerce is a plugin built on WordPress. It powers a large share of small and
        medium e-commerce sites — not because it is the best option on every dimension,
        but because WordPress is already ubiquitous and WooCommerce inherits that
        ecosystem.
      </p>

      <p>
        <strong>How it connects to an ERP.</strong> WooCommerce exposes a REST API that
        allows reading and writing products, orders, and stock levels. Most ERP publishers
        provide a WooCommerce connector, or the connection can be built via a middleware
        layer. The WordPress plugin ecosystem also offers numerous off-the-shelf bridges
        for common ERP and POS systems.
      </p>

      <p>
        <strong>Strengths.</strong> High flexibility: you can modify almost anything
        without being locked into a vendor. Initial cost is relatively low — the core
        is free. Large community, extensive documentation, and a wide range of
        third-party integrations.
      </p>

      <p>
        <strong>Limits.</strong> Maintenance burden is real: WordPress, WooCommerce,
        and each plugin must be updated separately, and incompatibilities between
        versions are frequent. Performance requires careful attention — a slow WordPress
        install is a conversion killer. Costs compound as you add plugins. And ERP
        integrations via plugins are only as reliable as the plugin&apos;s maintenance
        cycle.
      </p>

      <p>
        <strong>Best suited for:</strong> businesses already on WordPress, projects
        with developer resources for ongoing maintenance, and catalogues of moderate
        complexity.
      </p>

      <h2>Shopify</h2>

      <p>
        Shopify is a hosted SaaS platform: the infrastructure, security, and performance
        are managed by Shopify. You pay a monthly subscription and work within the
        constraints of the platform.
      </p>

      <p>
        <strong>How it connects to an ERP.</strong> Shopify has a well-documented API
        and a large app marketplace. Native connectors exist for many ERP and POS systems
        (including Cegid, Lightspeed, and others). For systems without a native app,
        third-party middleware services (like Celigo or Make) are typically used to
        bridge the gap.
      </p>

      <p>
        <strong>Strengths.</strong> Fast time to market — a functional store can be
        operational in days. Infrastructure reliability is high and managed by Shopify.
        The app marketplace covers most standard integration needs. Updates and security
        patches are handled automatically.
      </p>

      <p>
        <strong>Limits.</strong> Monthly costs rise as you add apps. Transaction fees
        apply unless you use Shopify Payments. Customisation has limits — you work
        within what Shopify allows, not what you design from scratch. Some ERP
        integrations only exist via paid third-party apps, adding a dependency on
        external vendors.
      </p>

      <p>
        <strong>Long-term lock-in is a real consideration.</strong> Moving away from
        Shopify once you are embedded is not impossible, but it is a significant project.
        Factor that into the decision.
      </p>

      <p>
        <strong>Best suited for:</strong> businesses that want a reliable, managed
        platform without in-house technical resources, and that need to launch quickly.
      </p>

      <h2>Custom (Next.js, headless)</h2>

      <p>
        A custom-built site — typically using a modern framework like Next.js, connected
        directly to your ERP&apos;s API — is the third path. It is also the most
        frequently misunderstood.
      </p>

      <p>
        <strong>How it connects to an ERP.</strong> Directly, via the ERP&apos;s native
        API, without any intermediary layer. The developer writes the integration
        specifically for your stack — no plugin compatibility matrix, no version
        mismatch risk, no dependency on third-party app maintenance cycles.
      </p>

      <p>
        <strong>Strengths.</strong> No compromises on functionality or architecture.
        Performance can be optimised at every layer. The connection to your ERP is as
        tight as you want — real-time, bidirectional, handling every edge case in your
        specific workflow. No recurring app fees, no platform lock-in, full ownership
        of your codebase.
      </p>

      <p>
        <strong>Limits.</strong> Higher upfront investment. Requires a developer who
        knows what they are doing — both on the web side and on the ERP integration
        side. Ongoing maintenance is your responsibility, not a platform&apos;s.
      </p>

      <p>
        <strong>Best suited for:</strong> businesses with a complex or unusual ERP,
        brands that want to differentiate on the customer experience, and operations
        where the standard platform compromises would be genuinely costly.
      </p>

      <h2>A decision matrix by profile</h2>

      <p>
        <strong>Small retailer starting out, under 500 references, standard ERP or
        POS:</strong> Shopify is the most pragmatic choice. Fast, reliable, manageable
        without technical resources.
      </p>

      <p>
        <strong>Growing retailer, 1,000+ references, existing ERP with a REST API,
        developer resources available:</strong> WooCommerce is viable if you have
        the maintenance bandwidth. Custom is viable if the WooCommerce compromises
        matter to you.
      </p>

      <p>
        <strong>Brand competing on experience, complex multi-channel operations, or
        ERP with no standard connector:</strong> Custom is the right answer. The upfront
        cost is higher; the long-term operational cost is lower.
      </p>

      <h2>The false debate</h2>

      <p>
        The quality of your ERP connection does not fundamentally depend on which
        platform you choose. It depends on the architecture behind the integration —
        whether it is real-time or batch, whether it handles conflicts, whether it
        has a fallback when a system goes down. A well-built WooCommerce integration
        outperforms a poorly built Shopify one every time.
      </p>

      <p>
        The platform choice matters for development cost, maintenance overhead, and
        customisation headroom. The connection quality is an architecture decision,
        not a platform decision.
      </p>

      <p>
        For the technical detail of how real-time sync works, see the dedicated
        article:{' '}
        <Link href="/blog/synchronisation-stock-temps-reel">
          real-time inventory sync: how it works and why it&apos;s essential
        </Link>
        .
      </p>

      <hr />

      <p>
        <em>
          You are choosing a platform and want to make sure your ERP integration will
          work as expected?{' '}
          <Link href="/contact">Contact us</Link> — we audit your ERP, your catalogue
          complexity, and your team&apos;s resources, and recommend the right architecture.
        </em>
      </p>
    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">WooCommerce, Shopify ou sur mesure : quelle solution pour connecter mon ERP ?</h1>

      <p>
        Le choix de la plateforme e-commerce se fait souvent pour de mauvaises raisons —
        parce qu&apos;un concurrent l&apos;utilise, parce que la démo était convaincante,
        parce que la mise en place semble rapide. La vraie question est plus simple et
        plus technique : cette plateforme peut-elle communiquer de façon fiable avec mon
        système de gestion des stocks ? La réponse conditionne tout le reste.
      </p>

      <p>
        Pour le panorama des méthodes de connexion stock ↔ site, voir notre guide :{' '}
        <Link href="/blog/connecter-stock-magasin-site-internet">
          comment connecter votre stock magasin à votre site internet
        </Link>
        .
      </p>

      <h2>WooCommerce</h2>

      <p>
        WooCommerce est un plugin construit sur WordPress. Il propulse une large part
        des sites e-commerce de taille petite et moyenne — non pas parce que c&apos;est
        la meilleure option sur tous les critères, mais parce que WordPress est déjà
        omniprésent et que WooCommerce en hérite l&apos;écosystème.
      </p>

      <p>
        <strong>Comment il se connecte à un ERP.</strong> WooCommerce expose une API
        REST qui permet de lire et d&apos;écrire les produits, les commandes et les
        niveaux de stock. La plupart des éditeurs d&apos;ERP proposent un connecteur
        WooCommerce, ou la connexion peut être construite via une couche middleware.
        L&apos;écosystème de plugins WordPress propose également de nombreux ponts
        prêts à l&apos;emploi pour les ERP et logiciels de caisse les plus répandus.
      </p>

      <p>
        <strong>Forces.</strong> Flexibilité élevée : on peut modifier presque tout
        sans être enfermé dans un cadre éditeur. Le coût initial est relativement
        faible — le cœur est gratuit. Grande communauté, documentation étendue, large
        choix d&apos;intégrations tierces.
      </p>

      <p>
        <strong>Limites.</strong> La charge de maintenance est réelle : WordPress,
        WooCommerce et chaque plugin doivent être mis à jour séparément, et les
        incompatibilités entre versions sont fréquentes. Les performances nécessitent
        une attention particulière — une installation WordPress mal optimisée tue les
        conversions. Les coûts s&apos;accumulent avec les plugins payants. Et les
        intégrations ERP via plugins ne sont fiables que si le plugin est activement
        maintenu.
      </p>

      <p>
        <strong>Profil adapté :</strong> commerces déjà sur WordPress, projets avec
        des ressources développeur pour la maintenance continue, et catalogues de
        complexité modérée.
      </p>

      <h2>Shopify</h2>

      <p>
        Shopify est une plateforme SaaS hébergée : l&apos;infrastructure, la sécurité
        et les performances sont gérées par Shopify. On paie un abonnement mensuel et
        on travaille dans les contraintes de la plateforme.
      </p>

      <p>
        <strong>Comment il se connecte à un ERP.</strong> Shopify dispose d&apos;une
        API bien documentée et d&apos;un marketplace d&apos;applications étendu. Des
        connecteurs natifs existent pour de nombreux ERP et logiciels de caisse (dont
        Cegid, Lightspeed, et d&apos;autres). Pour les systèmes sans app native, des
        services middleware tiers (comme Celigo ou Make) servent généralement de pont.
      </p>

      <p>
        <strong>Forces.</strong> Délai de mise sur le marché rapide — une boutique
        fonctionnelle peut être opérationnelle en quelques jours. La fiabilité de
        l&apos;infrastructure est élevée et gérée par Shopify. Le marketplace couvre
        la plupart des besoins d&apos;intégration standard. Les mises à jour et
        correctifs de sécurité sont appliqués automatiquement.
      </p>

      <p>
        <strong>Limites.</strong> Les coûts mensuels augmentent avec les applications.
        Des frais de transaction s&apos;appliquent sauf si on utilise Shopify Payments.
        La personnalisation a des limites — on travaille dans ce que Shopify permet,
        pas dans ce qu&apos;on conçoit de zéro. Certaines intégrations ERP
        n&apos;existent que via des apps tierces payantes.
      </p>

      <p>
        <strong>Le lock-in à long terme est une considération réelle.</strong> Quitter
        Shopify une fois qu&apos;on y est installé n&apos;est pas impossible, mais c&apos;est
        un projet significatif. À intégrer dans la décision initiale.
      </p>

      <p>
        <strong>Profil adapté :</strong> commerces qui veulent une plateforme fiable
        et gérée sans ressources techniques internes, et qui ont besoin de lancer vite.
      </p>

      <h2>Sur mesure (Next.js, headless)</h2>

      <p>
        Un site développé sur mesure — typiquement avec un framework moderne comme
        Next.js, connecté directement à l&apos;API de votre ERP — est la troisième
        voie. C&apos;est aussi la plus souvent mal comprise.
      </p>

      <p>
        <strong>Comment il se connecte à un ERP.</strong> Directement, via l&apos;API
        native de l&apos;ERP, sans couche intermédiaire. Le développeur écrit
        l&apos;intégration spécifiquement pour votre stack — pas de matrice de
        compatibilité plugin, pas de risque d&apos;incompatibilité de version, pas
        de dépendance sur le cycle de maintenance d&apos;une app tierce.
      </p>

      <p>
        <strong>Forces.</strong> Aucun compromis sur les fonctionnalités ou
        l&apos;architecture. Les performances peuvent être optimisées à chaque couche.
        La connexion à votre ERP est aussi précise que vous le souhaitez — temps réel,
        bidirectionnelle, gérant chaque cas particulier de votre workflow spécifique.
        Pas de frais d&apos;apps récurrents, pas de lock-in plateforme, propriété
        totale du code.
      </p>

      <p>
        <strong>Limites.</strong> Investissement initial plus élevé. Nécessite un
        développeur qui sait ce qu&apos;il fait — à la fois sur la partie web et sur
        l&apos;intégration ERP. La maintenance est votre responsabilité, pas celle
        d&apos;une plateforme.
      </p>

      <p>
        <strong>Profil adapté :</strong> commerces avec un ERP complexe ou atypique,
        marques qui veulent se différencier par l&apos;expérience client, et opérations
        pour lesquelles les compromis des plateformes standard seraient vraiment
        coûteux.
      </p>

      <h2>Tableau de décision selon votre profil</h2>

      <p>
        <strong>Petit commerce qui démarre, moins de 500 références, ERP ou caisse
        standard :</strong> Shopify est le choix le plus pragmatique. Rapide, fiable,
        gérable sans ressources techniques.
      </p>

      <p>
        <strong>Commerce en croissance, 1 000+ références, ERP existant avec une API
        REST, ressources développeur disponibles :</strong> WooCommerce est viable si
        vous avez la capacité de maintenance. Le sur mesure est viable si les compromis
        WooCommerce vous coûtent.
      </p>

      <p>
        <strong>Marque qui joue sur l&apos;expérience, opérations multi-canal
        complexes, ou ERP sans connecteur standard :</strong> le sur mesure est la
        bonne réponse. Le coût initial est plus élevé ; le coût opérationnel à long
        terme est plus faible.
      </p>

      <h2>Le faux débat</h2>

      <p>
        La qualité de votre connexion ERP ne dépend pas fondamentalement de la
        plateforme choisie. Elle dépend de l&apos;architecture derrière
        l&apos;intégration — temps réel ou batch, gestion des conflits, fallback en
        cas de panne. Une intégration WooCommerce bien conçue surpasse une intégration
        Shopify mal conçue à chaque fois.
      </p>

      <p>
        Le choix de plateforme joue sur le coût de développement, la charge de
        maintenance, et la marge de personnalisation. La qualité de la connexion est
        une décision d&apos;architecture, pas une décision de plateforme.
      </p>

      <p>
        Pour le fonctionnement technique du temps réel, voir l&apos;article dédié :{' '}
        <Link href="/blog/synchronisation-stock-temps-reel">
          synchronisation stock en temps réel : comment ça marche et pourquoi
          c&apos;est indispensable
        </Link>
        .
      </p>

      <hr />

      <p>
        <em>
          Vous choisissez une plateforme et voulez vous assurer que votre intégration
          ERP fonctionnera comme prévu ?{' '}
          <Link href="/contact">Contactez-nous</Link> — nous auditons votre ERP, la
          complexité de votre catalogue et les ressources de votre équipe, et vous
          recommandons la bonne architecture.
        </em>
      </p>
    </article>
  )
}
