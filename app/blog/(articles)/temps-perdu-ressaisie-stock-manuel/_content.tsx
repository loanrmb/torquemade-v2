'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function TempsPerduRessaisieStockManuelContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">How much time are you losing on manual inventory entry?</h1>

      <p>
        Nobody sits down to calculate it. Yet the hours spent manually updating stock
        (in the POS, on the website, in a spreadsheet) add up fast. This article does
        that calculation for you, and lays out what it actually costs.
      </p>

      <h2>The calculation nobody makes</h2>

      <p>
        Let&apos;s start with the basics. How long does it take to update one product&apos;s
        stock level? Opening the right interface, finding the item, entering the new
        quantity, saving, call it 90 seconds per reference. Not much on its own.
      </p>

      <p>
        Now multiply: 50 references updated per session, twice a week, 52 weeks a year.
        That&apos;s 50 × 2 × 1.5 minutes = 150 minutes per week, 130 hours per year.
        More than three full working weeks, every year, just entering numbers that
        already exist somewhere else.
      </p>

      <p>
        And this calculation only covers the time you&apos;re aware of. It doesn&apos;t
        include hunting for a product you thought you had in stock, cross-checking between
        a spreadsheet and a back-office, or correcting an entry made by a colleague who
        used a different naming convention.
      </p>

      <h2>A concrete example with figures</h2>

      <p>
        Consider a clothing retailer with 500 references, updating stock twice a week
        at 90 seconds per item.
      </p>

      <p>
        500 references × 1.5 min = 750 minutes per session. Two sessions per week:
        1,500 minutes, or 25 hours per week. 25 hours × 52 weeks = 1,300 hours per year.
      </p>

      <p>
        At a gross hourly cost of €18 (minimum wage plus employer contributions),
        that&apos;s roughly <strong>€23,400 per year</strong> in labour cost for a task
        that generates zero direct value. No sale, no customer relationship, no
        merchandising decision: just data transfer between two systems that should
        communicate automatically.
      </p>

      <p>
        For a smaller shop with 200 references and one weekly update: still 260 hours
        per year, or around €4,700. The numbers shrink but the logic holds.
      </p>

      <h2>The hidden costs</h2>

      <p>
        The time cost is the visible part. Manual entry generates a second category
        of losses that are harder to measure but very real.
      </p>

      <p>
        <strong>Entry errors.</strong> A digit transposed, a decimal misplaced, a
        product confused with a similar reference, the stock displayed no longer
        reflects reality. These errors trigger either unsatisfied customers (item shown
        as available, not in stock) or blocked sales (item shown as out of stock,
        still available).
      </p>

      <p>
        <strong>Shrinkage through overselling.</strong> You sell online an item that
        was already sold in-store an hour earlier. You have to cancel the order, issue
        a refund, and manage an unhappy customer. In e-commerce, this type of incident
        directly affects your review score and customer retention.
      </p>

      <p>
        <strong>Time spent searching.</strong> "I thought we had three left." Manual
        stock is never perfectly reliable. The time spent physically verifying something
        you should already know is pure waste.
      </p>

      <h2>What real automation actually costs</h2>

      <p>
        Setting up a real-time synchronisation between your POS system and your
        e-commerce site requires an initial investment. In our experience, for a
        standard setup (one POS, one e-commerce site, one product catalogue), the
        investment is typically between €1,500 and €4,000, depending on the tools
        involved and the complexity of the product catalogue.
      </p>

      <p>
        On a 1,300-hour-per-year base at €18/hour, the payback period is less than
        three months. After that, the system runs on its own, the time is freed up for
        other tasks, and the error rate drops to near zero.
      </p>

      <h2>The threshold: when does manual entry become untenable?</h2>

      <p>
        There is no universal threshold. But there are clear signals that you have
        crossed it.
      </p>

      <p>
        You have dedicated time in your week specifically to stock entry, and it is
        never enough. Your online stock is perpetually approximate. You have already
        had to cancel online orders due to stockouts that shouldn&apos;t have happened.
        A member of your team spends time on this that they could spend on customers.
      </p>

      <p>
        If any of these describe your situation, the manual approach is no longer just
        inefficient, it is actively costing you sales and reputation.
      </p>

      <hr />

      <p>
        <em>
          Want to calculate what manual stock entry is costing you specifically?{' '}
          <Link href="/contact">Contact us</Link>: we analyse your setup and give you
          a concrete ROI estimate for automation.
        </em>
      </p>
    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Combien de temps perdez-vous à ressaisir votre stock manuellement ?</h1>

      <p>
        Personne ne s&apos;asseoit pour le calculer. Pourtant, les heures passées à
        mettre à jour le stock manuellement, dans le logiciel de caisse, sur le site,
        dans un tableau Excel, s&apos;accumulent vite. Cet article fait ce calcul à
        votre place et pose clairement ce que ça coûte.
      </p>

      <h2>Le calcul que personne ne fait</h2>

      <p>
        Partons de la base. Combien de temps faut-il pour mettre à jour le niveau de
        stock d&apos;un produit ? Ouvrir la bonne interface, retrouver le produit,
        saisir la nouvelle quantité, enregistrer, comptez 90 secondes par référence.
        Pas grand chose, pris isolément.
      </p>

      <p>
        Maintenant, multipliez : 50 références mises à jour par session, deux fois par
        semaine, 52 semaines par an. Ça donne 50 × 2 × 1,5 minute = 150 minutes par
        semaine, 130 heures par an. Plus de trois semaines de travail plein, chaque
        année, uniquement pour saisir des chiffres qui existent déjà quelque part.
      </p>

      <p>
        Et ce calcul ne prend en compte que le temps que vous voyez. Il n&apos;inclut
        pas le temps passé à chercher un produit que vous pensiez avoir en stock,
        à faire des vérifications croisées entre un tableur et un back-office, ni à
        corriger une saisie faite par un collègue avec une convention de nommage
        différente.
      </p>

      <h2>Exemple chiffré concret</h2>

      <p>
        Prenons un commerce de prêt-à-porter avec 500 références, qui met à jour son
        stock deux fois par semaine à raison de 90 secondes par article.
      </p>

      <p>
        500 références × 1,5 min = 750 minutes par session. Deux sessions par semaine :
        1 500 minutes, soit 25 heures par semaine. 25 heures × 52 semaines = 1 300
        heures par an.
      </p>

      <p>
        Au coût horaire brut de 18 € (SMIC chargé employeur), ça représente environ
        <strong> 23 400 € par an</strong> de masse salariale pour une tâche qui ne
        génère aucune valeur directe. Pas de vente, pas de relation client, pas de
        décision merchandising: juste un transfert de données entre deux systèmes
        qui devraient communiquer automatiquement.
      </p>

      <p>
        Pour un commerce plus petit avec 200 références et une mise à jour hebdomadaire :
        on tombe à 260 heures par an, soit environ 4 700 €. Les chiffres sont plus
        petits mais la logique est la même.
      </p>

      <h2>Les coûts cachés</h2>

      <p>
        Le coût en temps est la partie visible. La ressaisie manuelle génère une
        deuxième catégorie de pertes, plus difficile à mesurer mais bien réelle.
      </p>

      <p>
        <strong>Les erreurs de saisie.</strong> Un chiffre transposé, une décimale
        déplacée, un produit confondu avec une référence similaire, le stock affiché
        ne reflète plus la réalité. Ces erreurs provoquent soit des clients non servis
        (produit affiché disponible, absent en boutique), soit des ventes bloquées
        (produit affiché épuisé alors qu&apos;il reste des unités).
      </p>

      <p>
        <strong>La démarque par survente.</strong> Vous vendez en ligne un article déjà
        vendu en magasin une heure plus tôt. Vous devez annuler la commande, rembourser,
        gérer un client mécontent. En e-commerce, ce type d&apos;incident impacte
        directement votre note et votre taux de fidélisation.
      </p>

      <p>
        <strong>Le temps de recherche.</strong> "Je pensais qu&apos;on en avait encore
        trois." Un stock tenu manuellement n&apos;est jamais parfaitement fiable. Le
        temps passé à vérifier physiquement ce que vous devriez déjà savoir est
        du temps pur perdu.
      </p>

      <h2>Ce que coûte une vraie automatisation</h2>

      <p>
        Mettre en place une synchronisation temps réel entre votre logiciel de caisse
        et votre site e-commerce nécessite un investissement initial. Dans notre
        expérience, pour une configuration standard (une caisse, un site e-commerce,
        un catalogue produit), l&apos;investissement se situe généralement entre
        1 500 et 4 000 €, selon les outils en présence et la complexité du catalogue.
      </p>

      <p>
        Sur une base de 1 300 heures par an à 18 €/heure, le retour sur investissement
        se calcule en moins de trois mois. Après, le système tourne seul, le temps
        est libéré pour d&apos;autres tâches, et le taux d&apos;erreur tombe
        quasi à zéro.
      </p>

      <h2>Le seuil de bascule</h2>

      <p>
        Il n&apos;y a pas de seuil universel. Mais il y a des signaux clairs qui
        indiquent que vous l&apos;avez franchi.
      </p>

      <p>
        Vous avez du temps dédié dans votre semaine uniquement pour saisir du stock,
        et ce n&apos;est jamais suffisant. Votre stock en ligne est en permanence
        approximatif. Vous avez déjà dû annuler des commandes en ligne à cause de
        ruptures qui n&apos;auraient pas dû se produire. Un membre de votre équipe
        passe du temps sur cette tâche qu&apos;il pourrait consacrer aux clients.
      </p>

      <p>
        Si l&apos;un de ces points vous correspond, la ressaisie manuelle n&apos;est
        plus seulement inefficace, elle vous coûte activement des ventes et
        de la réputation.
      </p>

      <hr />

      <p>
        <em>
          Vous voulez calculer ce que la ressaisie manuelle vous coûte précisément ?{' '}
          <Link href="/contact">Contactez-nous</Link>: nous analysons votre
          configuration et vous donnons une estimation ROI concrète pour l&apos;automatisation.
        </em>
      </p>
    </article>
  )
}
