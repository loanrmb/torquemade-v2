'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function PreuvesLitigePaiementContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">What Evidence Do You Need to Win a Payment Dispute Over a Live Animal?</h1>

      <p>
        When a customer disputes a payment on a live animal, whoever reviews it decides based
        on documentation, not sympathy. Your job is to hand them a file that answers, without
        gaps, three questions: what exactly was sold, in what condition it left, and that it
        reached the buyer. This is a records problem, and the shops that win are the ones that
        capture those records automatically, not the ones with the best story.
      </p>

      <h2>Evidence beats assertion, every time</h2>

      <p>
        A written statement that you "always ship healthy animals" carries almost no weight in a
        dispute review. What carries weight is specific, verifiable, timestamped artifacts tied
        to the exact transaction. The distinction is everything: assertion is what you say,
        evidence is what the record shows. Build the record and the story tells itself.
      </p>

      <h2>The core file: four linked artifacts</h2>

      <ul>
        <li><strong>Specimen identity.</strong> A unique record tying the order to one individual animal: its ID, listing photo, and status history. This proves precisely what the customer bought, not a generic species.</li>
        <li><strong>Condition at dispatch.</strong> A timestamped photo of that specimen and its packaging, captured at the moment it was prepared to send.</li>
        <li><strong>Proof of delivery.</strong> A record that the parcel reached the recipient, bound to the order so it can't be mistaken for a different shipment.</li>
        <li><strong>A coherent timeline.</strong> The sequence of timestamps (listed, sold, packed, delivered), so a reviewer can follow the chain without finding a hole.</li>
      </ul>

      <h2>Linkage is what makes evidence hold</h2>

      <p>
        Twenty loose photos prove nothing if none is verifiably tied to the disputed order. The
        strength of a file comes from <strong>linkage</strong>: every artifact bound to the same
        order identifier, each carrying a trustworthy timestamp. A photo taken "recently" is
        weak; one captured at pack time and automatically attached to that order is strong. Aim
        for a chain where each link references the next, leaving no unexplained gap.
      </p>

      <h2>Capture at the moment, not after the notification</h2>

      <p>
        The most common reason shops lose is timing. They try to assemble evidence <em>after</em>
        the dispute notification, days later, from memory and a cluttered inbox. By then the
        packing photo was never taken and the delivery record is buried. The reliable approach is
        to make evidence a byproduct of routine operations: the photo is captured when the order
        is packed, the delivery is logged on receipt, everything filed against the order as it
        happens. When the dispute arrives, the file already exists.
      </p>

      <h2>Package it into one document</h2>

      <p>
        Reviewers want a single, readable document, not a pile of attachments and links. A system
        that compiles the specimen record, condition photo, delivery proof, and timeline into one
        PDF turns hours of searching into a one-click export, and a clean submission is easier to
        rule in your favor. The retention rule is simple: keep every artifact, linked to its
        order, for at least as long as a dispute can be raised against that transaction.
      </p>

      <p>
        This is exactly what <strong>TankLogic</strong> builds for you: each sale captures the
        condition photo and delivery proof against the specimen, then assembles the evidence PDF
        automatically. You walk into a dispute with a complete, linked file instead of a memory.
      </p>

      <hr />

      <p>
        <em>
          Want the evidence file built automatically for every live sale?{' '}
          <Link href="/tanklogic">See how TankLogic does it</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/prouver-poisson-arrive-vivant-retrofacturation">
              How do you prove a fish arrived alive to fight a chargeback?
            </Link>
          </li>
          <li>
            <Link href="/blog/automatiser-suivi-mortalite-stock-en-ligne">
              How do you automate mortality tracking for your online fish inventory?
            </Link>
          </li>
          <li>
            <Link href="/blog/synchroniser-stock-aquariophilie-site-ecommerce">
              How do you sync live fish and coral inventory with your online store?
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Quelles preuves conserver pour gagner un litige de paiement sur un poisson vivant ?</h1>

      <p>
        Quand un client conteste un paiement sur un animal vivant, celui qui l'examine tranche
        sur pièces, pas sur la sympathie. Votre travail est de lui remettre un dossier qui répond,
        sans trou, à trois questions : ce qui a été vendu exactement, dans quel état c'est parti,
        et que c'est bien arrivé chez l'acheteur. C'est un problème d'enregistrements, et les
        boutiques qui gagnent sont celles qui capturent ces enregistrements automatiquement, pas
        celles qui ont le meilleur récit.
      </p>

      <h2>La preuve l'emporte sur l'affirmation, à chaque fois</h2>

      <p>
        Une déclaration écrite affirmant que vous « expédiez toujours des animaux en bonne
        santé » ne pèse presque rien dans l'examen d'un litige. Ce qui pèse, ce sont des artefacts
        précis, vérifiables et horodatés, liés à la transaction exacte. La distinction fait tout :
        l'affirmation, c'est ce que vous dites ; la preuve, c'est ce que l'enregistrement montre.
        Constituez l'enregistrement et le récit se raconte tout seul.
      </p>

      <h2>Le dossier de base : quatre artefacts liés</h2>

      <ul>
        <li><strong>Identité du spécimen.</strong> Une fiche unique reliant la commande à un animal individuel, son identifiant, sa photo d'annonce, son historique de statut. Ça prouve précisément ce que le client a acheté, pas une espèce générique.</li>
        <li><strong>État au départ.</strong> Une photo horodatée de ce spécimen et de son conditionnement, capturée au moment de la préparation à l'envoi.</li>
        <li><strong>Preuve de livraison.</strong> Un enregistrement que le colis a atteint le destinataire, lié à la commande pour ne pas être confondu avec un autre envoi.</li>
        <li><strong>Une chronologie cohérente.</strong> La séquence d'horodatages (mis en ligne, vendu, emballé, livré), pour qu'un examinateur suive la chaîne sans trouver de trou.</li>
      </ul>

      <h2>Le lien, c'est ce qui fait tenir la preuve</h2>

      <p>
        Vingt photos en vrac ne prouvent rien si aucune n'est reliable de façon vérifiable à la
        commande contestée. La force d'un dossier vient du <strong>lien</strong> : chaque artefact
        attaché au même identifiant de commande, chacun portant un horodatage fiable. Une photo
        prise « récemment » est faible ; une capturée à l'emballage et attachée automatiquement à
        cette commande est forte. Visez une chaîne où chaque maillon référence le suivant, sans
        aucun trou inexpliqué.
      </p>

      <h2>Capturez sur l'instant, pas après la notification</h2>

      <p>
        La raison la plus fréquente de perdre, c'est le timing. On tente d'assembler des preuves
        <em> après</em> la notification de litige, des jours plus tard, de mémoire et depuis une
        boîte mail encombrée. À ce moment-là, la photo d'emballage n'a jamais été prise et la
        preuve de livraison est enfouie. L'approche fiable est de faire de la preuve un
        sous-produit des opérations de routine : la photo est capturée à l'emballage, la livraison
        journalisée à réception, tout classé sous la commande au fil de l'eau. Quand le litige
        arrive, le dossier existe déjà.
      </p>

      <h2>Mettez-le en un seul document</h2>

      <p>
        Les examinateurs veulent un document unique et lisible, pas un tas de pièces jointes et de
        liens. Un système qui compile la fiche du spécimen, la photo d'état, la preuve de livraison
        et la chronologie dans un seul PDF transforme des heures de recherche en un export en un
        clic, et une soumission propre est plus facile à trancher en votre faveur. La règle de
        conservation est simple : gardez chaque artefact, lié à sa commande, au moins aussi
        longtemps qu'un litige peut être ouvert sur cette transaction.
      </p>

      <p>
        C'est exactement ce que <strong>TankLogic</strong> constitue pour vous : chaque vente
        capture la photo d'état et la preuve de livraison contre le spécimen, puis assemble le PDF
        de preuve automatiquement. Vous entrez dans un litige avec un dossier complet et lié, pas
        avec un souvenir.
      </p>

      <hr />

      <p>
        <em>
          Vous voulez le dossier de preuve constitué automatiquement pour chaque vente de vivant ?{' '}
          <Link href="/tanklogic">Voyez comment TankLogic le fait</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/prouver-poisson-arrive-vivant-retrofacturation">
              Comment prouver qu'un poisson est arrivé vivant pour contester une rétrofacturation ?
            </Link>
          </li>
          <li>
            <Link href="/blog/automatiser-suivi-mortalite-stock-en-ligne">
              Comment automatiser le suivi de mortalité pour mon stock en ligne ?
            </Link>
          </li>
          <li>
            <Link href="/blog/synchroniser-stock-aquariophilie-site-ecommerce">
              Comment synchroniser le stock de ma boutique aquariophilie avec mon site e-commerce ?
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )
}
