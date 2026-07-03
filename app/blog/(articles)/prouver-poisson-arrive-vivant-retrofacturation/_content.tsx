'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function ProuverPoissonArriveVivantContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">How Do You Prove a Fish Arrived Alive to Fight a Chargeback?</h1>

      <p>
        A chargeback on a live animal is won or lost on one thing: the quality of your
        evidence file. Not your good faith, not your reputation, the documented, timestamped
        chain that shows a specific specimen left your hands in good condition and reached the
        buyer. This is a data problem, and it's solvable if you capture the right records at
        the right moments instead of scrambling to reconstruct them after the dispute lands.
      </p>

      <h2>Why "we always ship healthy stock" doesn't win</h2>

      <p>
        When a buyer disputes a charge, the reviewer isn't weighing your general practices.
        They're looking for specific, verifiable artifacts tied to <em>this</em> order. If
        your only response is a written assurance, you have an assertion, not evidence. The
        shops that win consistently are the ones that turned each shipment into a small,
        automatic dossier, captured as part of the workflow, not as an afterthought.
      </p>

      <h2>The four records that make the case</h2>

      <ul>
        <li><strong>The specimen record.</strong> A unique ID tying the order to one individual animal, with its listing photo and status history. This proves what was sold, the exact specimen, not "a fish."</li>
        <li><strong>The packing photo.</strong> A timestamped image of that specimen and its packaging at dispatch. This is your condition-at-send proof, and the timestamp anchors it to the order.</li>
        <li><strong>Delivery proof.</strong> A record that the parcel reached the buyer, ideally tied back to the order via a scannable code so it can't be confused with another shipment.</li>
        <li><strong>The event trail.</strong> The timestamps of listing, sale, pack, and delivery in sequence, a coherent timeline a reviewer can follow.</li>
      </ul>

      <h2>Why timing and linkage matter more than volume</h2>

      <p>
        A folder of twenty loose photos doesn't help if none is provably tied to the order in
        question. What wins is <strong>linkage</strong>: every artifact bound to the same order
        ID, each carrying a trustworthy timestamp. A packing photo taken "sometime this week"
        is weak; one captured at pack time and attached to the order automatically is strong.
        The goal is a chain where each link references the next, so a reviewer can't find a gap.
      </p>

      <h2>Capture it in the workflow, not after the dispute</h2>

      <p>
        The reason most shops lose is timing: they try to assemble evidence <em>after</em> a
        chargeback notification, days or weeks later, from memory and a messy inbox. By then the
        packing photo is gone and the delivery record is buried. The fix is to make evidence
        capture a byproduct of normal operations: the photo is taken when the order is packed,
        the delivery scan is logged on receipt, and everything is filed against the order the
        moment it happens. When a dispute arrives, the file already exists.
      </p>

      <h2>Turning records into a submittable file</h2>

      <p>
        The last step is packaging. A reviewer wants one coherent document, not a link dump.
        A system that assembles the specimen record, packing photo, delivery proof, and
        timeline into a single PDF turns hours of digging into a one-click export, and makes
        your submission easy to read, which itself improves your odds.
      </p>

      <p>
        This is what <strong>TankLogic</strong> automates: every specimen sale captures the
        packing photo and delivery proof, and generates the chargeback evidence PDF for you.
        You fight the dispute with a file, not a memory.
      </p>

      <hr />

      <p>
        <em>
          Losing disputes on live shipments?{' '}
          <Link href="/tanklogic">See how TankLogic builds the evidence file automatically</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/preuves-litige-paiement-poisson-vivant">
              What evidence do you need to win a payment dispute over a live animal?
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
      <h1 className="blog-article-title">Comment prouver qu'un poisson est arrivé vivant pour contester une rétrofacturation ?</h1>

      <p>
        Une rétrofacturation sur un animal vivant se gagne ou se perd sur une seule chose : la
        qualité de votre dossier de preuve. Pas votre bonne foi, pas votre réputation: la chaîne
        documentée et horodatée qui montre qu'un spécimen précis a quitté vos mains en bon état
        et a atteint l'acheteur. C'est un problème de données, et il se résout si vous capturez
        les bons enregistrements aux bons moments, au lieu de les reconstituer en panique une fois
        le litige tombé.
      </p>

      <h2>Pourquoi « on expédie toujours des animaux en bonne santé » ne suffit pas</h2>

      <p>
        Quand un acheteur conteste un paiement, l'examinateur ne juge pas vos pratiques
        générales. Il cherche des artefacts précis et vérifiables liés à <em>cette</em> commande.
        Si votre seule réponse est une assurance écrite, vous avez une affirmation, pas une
        preuve. Les boutiques qui gagnent régulièrement sont celles qui ont transformé chaque
        expédition en un petit dossier automatique, capturé au fil du workflow, pas après coup.
      </p>

      <h2>Les quatre enregistrements qui font le dossier</h2>

      <ul>
        <li><strong>La fiche du spécimen.</strong> Un identifiant unique qui relie la commande à un animal individuel, avec sa photo d'annonce et son historique de statut. Ça prouve ce qui a été vendu, le spécimen exact, pas « un poisson ».</li>
        <li><strong>La photo d'emballage.</strong> Une image horodatée de ce spécimen et de son conditionnement au départ. C'est votre preuve d'état à l'envoi, et l'horodatage l'ancre à la commande.</li>
        <li><strong>La preuve de livraison.</strong> Un enregistrement que le colis a atteint l'acheteur, idéalement relié à la commande par un code scannable pour ne pas être confondu avec un autre envoi.</li>
        <li><strong>La piste d'événements.</strong> Les horodatages de mise en ligne, vente, emballage et livraison en séquence, une chronologie cohérente qu'un examinateur peut suivre.</li>
      </ul>

      <h2>Pourquoi le moment et le lien comptent plus que le volume</h2>

      <p>
        Un dossier de vingt photos en vrac n'aide pas si aucune n'est reliable de façon prouvée à
        la commande en question. Ce qui gagne, c'est le <strong>lien</strong> : chaque artefact
        attaché au même identifiant de commande, chacun portant un horodatage fiable. Une photo
        d'emballage prise « dans la semaine » est faible ; une capturée au moment de l'emballage et
        attachée automatiquement à la commande est forte. L'objectif est une chaîne où chaque
        maillon référence le suivant, pour qu'un examinateur ne trouve aucun trou.
      </p>

      <h2>Capturez dans le workflow, pas après le litige</h2>

      <p>
        Si la plupart des boutiques perdent, c'est une question de timing : elles tentent
        d'assembler des preuves <em>après</em> la notification de rétrofacturation, des jours ou
        des semaines plus tard, de mémoire et depuis une boîte mail en désordre. À ce moment-là, la
        photo d'emballage a disparu et la preuve de livraison est enfouie. La solution est de faire
        de la capture de preuve un sous-produit des opérations normales, la photo est prise à
        l'emballage, le scan de livraison est journalisé à réception, et tout est classé sous la
        commande à l'instant où ça se produit. Quand un litige arrive, le dossier existe déjà.
      </p>

      <h2>Transformer les enregistrements en dossier transmissible</h2>

      <p>
        La dernière étape est la mise en forme. Un examinateur veut un document cohérent, pas un
        amas de liens. Un système qui assemble la fiche du spécimen, la photo d'emballage, la
        preuve de livraison et la chronologie dans un seul PDF transforme des heures de recherche
        en un export en un clic, et rend votre soumission facile à lire, ce qui améliore vos
        chances en soi.
      </p>

      <p>
        C'est ce que <strong>TankLogic</strong> automatise : chaque vente de spécimen capture la
        photo d'emballage et la preuve de livraison, et génère le PDF de preuve de rétrofacturation
        pour vous. Vous contestez le litige avec un dossier, pas avec un souvenir.
      </p>

      <hr />

      <p>
        <em>
          Vous perdez des litiges sur des envois de vivant ?{' '}
          <Link href="/tanklogic">Voyez comment TankLogic constitue le dossier de preuve automatiquement</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/preuves-litige-paiement-poisson-vivant">
              Quelles preuves conserver pour gagner un litige de paiement sur un poisson vivant ?
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
