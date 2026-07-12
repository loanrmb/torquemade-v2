'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'
import { BlogUpdatedLine } from '@/components/blog-updated-line'

export function AutomatiserSuiviMortaliteContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">How Do You Automate Mortality Tracking for Your Online Fish Inventory?</h1>

      <BlogUpdatedLine slug="automatiser-suivi-mortalite-stock-en-ligne" />

      <p>
        For a shop selling live animals online, mortality isn't a side task: it's the single
        most important event in your inventory system. A death that isn't recorded instantly
        becomes a phantom listing, an order you can't fulfill, and often a chargeback. Yet most
        shops still track it in a spreadsheet updated whenever someone remembers. Here's how to
        make mortality an automatic, real-time event instead.
      </p>

      <h2>Why manual mortality tracking always leaks</h2>

      <p>
        The problem with a spreadsheet or a whiteboard is latency. A fish dies overnight, gets
        noted "later," and in the meantime the online listing still says available. Someone
        buys it. Now you're refunding or fighting a dispute over an animal that no longer
        exists. The gap between the death and the record is exactly where the money leaks, and
        with manual tracking that gap is measured in hours or days, every single time.
      </p>

      <h2>The prerequisite: one record per specimen</h2>

      <p>
        You can't automate mortality on a quantity counter. "12 in stock" gives you nothing to
        mark as dead, which of the twelve? Automation requires that each animal is already its
        own record with a status field. Once that's true, mortality becomes a simple state
        transition on one specific record: <em>available → deceased</em>. Everything downstream
        keys off that transition.
      </p>

      <h2>What "automated" actually means here</h2>

      <ul>
        <li><strong>One action, everywhere.</strong> Marking a specimen deceased (from your phone, at the tank) updates the master record and immediately propagates to every sales channel.</li>
        <li><strong>Real-time removal.</strong> The transition fires an event that pulls the listing offline in seconds, closing the window where it could still be bought.</li>
        <li><strong>No reconciliation.</strong> Because there's no shared counter, there's nothing to manually adjust and nothing to re-sync at each day's close.</li>
        <li><strong>A timestamp.</strong> The death is logged with a time, feeding both your loss reporting and any future dispute evidence.</li>
      </ul>

      <h2>The event flow, step by step</h2>

      <ol>
        <li>You flip a specimen to "deceased" in the system (ideally mobile, at the point of observation).</li>
        <li>The master record updates and emits a status-change event.</li>
        <li>The sync layer pushes that change to Shopify via the Admin API; the product is unpublished.</li>
        <li>The event is timestamped and stored, so you have a mortality history, useful for loss analysis, supplier discussions, and disputes.</li>
      </ol>

      <h2>The bonus: mortality data you can actually use</h2>

      <p>
        Once mortality is a structured event instead of a scribble, it becomes analyzable. You
        can see loss rates by species, by supplier, by acclimation batch, turning a painful
        cost into a signal you can act on. A spreadsheet updated erratically gives you none of
        that; an automated, timestamped log gives you all of it as a side effect.
      </p>

      <p>
        This is a core part of what <strong>TankLogic</strong> does: mortality is a first-class
        event that removes the exact unit from sale in real time and logs it, so your online
        stock is never selling an animal that's already gone.
      </p>

      <hr />

      <p>
        <em>
          Still tracking losses in a spreadsheet?{' '}
          <Link href="/tanklogic">See how TankLogic makes mortality a real-time event</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/synchroniser-stock-aquariophilie-site-ecommerce">
              How do you sync live fish and coral inventory with your online store?
            </Link>
          </li>
          <li>
            <Link href="/blog/prouver-poisson-arrive-vivant-retrofacturation">
              How do you prove a fish arrived alive to fight a chargeback?
            </Link>
          </li>
          <li>
            <Link href="/blog/erp-specialise-boutique-poissons-coraux">
              Is there ERP software built specifically for fish and coral shops?
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Comment automatiser le suivi de mortalité pour mon stock en ligne ?</h1>

      <BlogUpdatedLine slug="automatiser-suivi-mortalite-stock-en-ligne" />

      <p>
        Pour une boutique qui vend des animaux vivants en ligne, la mortalité n'est pas une
        tâche annexe: c'est l'événement le plus important de votre système d'inventaire. Une
        mort non enregistrée instantanément devient une annonce fantôme, une commande
        inexécutable, et souvent une rétrofacturation. Pourtant, la plupart des boutiques la
        suivent encore dans un tableur mis à jour quand quelqu'un y pense. Voici comment faire de
        la mortalité un événement automatique et en temps réel.
      </p>

      <h2>Pourquoi le suivi manuel de mortalité fuit toujours</h2>

      <p>
        Le problème d'un tableur ou d'un tableau blanc, c'est la latence. Un poisson meurt dans
        la nuit, il est noté « plus tard », et pendant ce temps l'annonce en ligne affiche
        toujours « disponible ». Quelqu'un l'achète. Vous voilà à rembourser ou à contester un
        litige sur un animal qui n'existe plus. L'écart entre la mort et l'enregistrement, c'est
        exactement là que l'argent fuit, et en suivi manuel, cet écart se mesure en heures ou en
        jours, à chaque fois.
      </p>

      <h2>Le prérequis : une fiche par spécimen</h2>

      <p>
        On ne peut pas automatiser la mortalité sur un compteur de quantité. « 12 en stock » ne
        vous donne rien à marquer comme mort, lequel des douze ? L'automatisation exige que
        chaque animal soit déjà sa propre fiche avec un champ de statut. Une fois cela vrai, la
        mortalité devient une simple transition d'état sur une fiche précise :
        <em> disponible → décédé</em>. Tout ce qui suit s'articule sur cette transition.
      </p>

      <h2>Ce que « automatisé » veut vraiment dire ici</h2>

      <ul>
        <li><strong>Une action, partout.</strong> Marquer un spécimen décédé (depuis votre téléphone, devant l'aquarium) met à jour la fiche maître et se propage immédiatement à tous les canaux de vente.</li>
        <li><strong>Retrait en temps réel.</strong> La transition déclenche un événement qui retire l'annonce en secondes, fermant la fenêtre où elle pourrait encore être achetée.</li>
        <li><strong>Aucune réconciliation.</strong> Comme il n'y a pas de compteur partagé, il n'y a rien à ajuster manuellement ni à re-synchroniser en fin de journée.</li>
        <li><strong>Un horodatage.</strong> La mort est journalisée avec une heure, alimentant à la fois votre reporting de pertes et toute preuve de litige future.</li>
      </ul>

      <h2>Le flux d'événements, étape par étape</h2>

      <ol>
        <li>Vous basculez un spécimen en « décédé » dans le système (idéalement mobile, au point d'observation).</li>
        <li>La fiche maître se met à jour et émet un événement de changement de statut.</li>
        <li>La couche de synchro pousse ce changement vers Shopify via l'Admin API ; le produit est dépublié.</li>
        <li>L'événement est horodaté et stocké : vous avez un historique de mortalité, utile pour l'analyse de pertes, les échanges fournisseurs et les litiges.</li>
      </ol>

      <h2>Le bonus : des données de mortalité réellement exploitables</h2>

      <p>
        Une fois la mortalité transformée en événement structuré plutôt qu'en gribouillage, elle
        devient analysable. Vous pouvez voir les taux de perte par espèce, par fournisseur, par
        lot d'acclimatation, transformant un coût pénible en un signal sur lequel agir. Un
        tableur mis à jour de façon erratique ne vous donne rien de tout ça ; un journal
        automatisé et horodaté vous le donne tout, en effet de bord.
      </p>

      <p>
        C'est un élément central de ce que fait <strong>TankLogic</strong> : la mortalité est un
        événement de premier rang qui retire l'unité exacte de la vente en temps réel et la
        journalise, pour que votre stock en ligne ne vende jamais un animal déjà parti.
      </p>

      <hr />

      <p>
        <em>
          Vous suivez encore vos pertes dans un tableur ?{' '}
          <Link href="/tanklogic">Voyez comment TankLogic fait de la mortalité un événement temps réel</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/synchroniser-stock-aquariophilie-site-ecommerce">
              Comment synchroniser le stock de ma boutique aquariophilie avec mon site e-commerce ?
            </Link>
          </li>
          <li>
            <Link href="/blog/prouver-poisson-arrive-vivant-retrofacturation">
              Comment prouver qu'un poisson est arrivé vivant pour contester une rétrofacturation ?
            </Link>
          </li>
          <li>
            <Link href="/blog/erp-specialise-boutique-poissons-coraux">
              Existe-t-il un ERP spécialisé pour les boutiques de poissons et coraux ?
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )
}
