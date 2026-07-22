'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'
import { TraceabilityTimelineDemo } from '@/components/blog/traceability-timeline-demo'

export function LitigePoissonMortDoaContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">How to Win a Dead-on-Arrival Dispute for a Fish</h1>

      <p>
        Winning a dead-on-arrival (DOA) dispute for a fish depends almost entirely on evidence
        gathered before shipment, not on explanations given afterward. A solid case combines
        three elements: timestamped proof of the animal&apos;s condition before dispatch, transit
        condition data (temperature, delay), and a claim filed within the contractual window
        agreed with the buyer. Without all three tied to the order, a dispute is lost almost
        every time, regardless of the seller&apos;s good faith.
      </p>

      <h2>What payment platforms actually require</h2>

      <p>
        Stripe and Square don&apos;t treat live-animal disputes as a separate category. The
        reason code applied by the card network (Visa, Mastercard) is almost always &quot;product
        not as described&quot; or &quot;defective merchandise&quot;, the same code used for a
        damaged parcel or a mispicked SKU. That changes what actually needs proving: not just
        that the animal was alive at dispatch, but that what arrived matches exactly what was
        sold and in the condition advertised.
      </p>

      <p>
        Both platforms ask for what they call &quot;compelling evidence&quot;: a structured file,
        not an explanatory email. Concretely: delivery proof tied to the specific order, a record
        of communication with the customer, and any document showing the product&apos;s condition
        at dispatch. The file has to go in within a short window, typically a matter of days after
        the dispute notification, not weeks. Miss it, and the file isn&apos;t even reviewed, no
        matter how strong it is.
      </p>

      <h2>The 3 pieces of evidence that turn a dispute</h2>

      <h3>Timestamped photo or video before shipment</h3>

      <p>
        A photo taken &quot;on shipping day&quot; proves nothing if nothing shows it was actually
        taken that day. What matters is a verifiable timestamp, tied to the exact order, not an
        editable file date. A short video of the animal inside its packaging, right before
        sealing, is harder to dispute than a single photo: it shows movement, meaning life, at
        the precise moment of dispatch.
      </p>

      <h3>Transit data (temperature, delay)</h3>

      <p>
        An animal can arrive dead without any fault in its condition at dispatch: transit itself
        can be the cause. A temperature logger inside the parcel, or failing that the exact
        carrier handoff time compared to the delivery time, helps distinguish a transit problem
        from a dispatch defect. In a dispute, that distinction often decides who pays: the
        seller, or the carrier.
      </p>

      <h3>A clear contractual claim window</h3>

      <p>
        A vague claim window (&quot;contact us promptly&quot;) protects no one. A precise window,
        spelled out in the terms of sale and repeated in the confirmation email (for example:
        claim within 2 hours of delivery, with a supporting photo), gives a frame the buyer
        can&apos;t dispute after the fact, and one the seller can point to if the claim arrives
        too late.
      </p>

      <h2>What isn&apos;t enough</h2>

      <p>
        Most sellers who lose a DOA dispute actually have &quot;some&quot; evidence. The problem
        is almost never a total absence of documentation, it&apos;s its quality and its link to
        the specific order.
      </p>

      <p>
        A generic photo of the same packaging style, taken at some other time, proves nothing
        about that particular order. An email saying &quot;we always pack carefully&quot; is an
        assertion, not evidence. Delivery proof with no verifiable link to the disputed order
        (the wrong tracking number, or none at all) can be dismissed outright by the dispute
        reviewer.
      </p>

      <p>
        What losing files have in common: the evidence exists somewhere, in an inbox, on a phone,
        but it isn&apos;t linked to anything at the moment it needs to be produced. Reconstructing
        that link afterward, under the pressure of a response deadline, means half the battle is
        already lost.
      </p>

      <h2>How a serialized system automates this evidence</h2>

      <p>
        The difference between a winning file and a losing one rarely comes down to the quality
        of a single photo. It comes down to structure: every step of handling, from receiving the
        supplier&apos;s shipment through to delivery, automatically generates a timestamped record
        tied to a unique identifier, the exact specimen sold, not a generic SKU.
      </p>

      <p>
        In practice, a serialized traceability system captures these milestones as they happen:
        receipt, acclimation, pre-packing photo, handoff to the carrier, delivery confirmation.
        Each step attaches to the product&apos;s record with no extra manual step from the
        seller, it&apos;s part of the normal handling routine, not an added administrative task.
      </p>

      <TraceabilityTimelineDemo />

      <p>
        The advantage isn&apos;t just having the evidence, it&apos;s being able to produce it
        immediately. A ready-to-submit PDF export, generated in one click from that timeline,
        concretely changes how a dispute plays out: the file goes out complete, inside the tight
        windows payment platforms impose, instead of being reconstructed under pressure from an
        inbox and a scattered camera roll. A seller who responds in ten minutes with a complete
        file and one who responds in three days with scattered pieces are not fighting the same
        dispute.
      </p>

      <p>
        This is exactly what <strong>TankLogic</strong> does: every specimen sold carries its own
        timeline, from receipt to delivery, and the evidence file exports to PDF with no manual
        reconstruction.
      </p>

      <h2>FAQ</h2>

      <h3 className="text-base font-semibold text-text-primary mt-6 mb-2">
        How long do I have to file a DOA claim?
      </h3>
      <p>
        It depends on your own sales policy, but a short window, generally between 30 minutes and
        2 hours after receipt, is standard in the live-goods trade. That window needs to be
        spelled out in your terms of sale and repeated to the customer at delivery, otherwise it
        can&apos;t be enforced in a dispute.
      </p>

      <h3 className="text-base font-semibold text-text-primary mt-6 mb-2">
        Who pays for return shipping?
      </h3>
      <p>
        On a fish that arrived dead, there&apos;s usually nothing to physically return: the
        evidence file replaces the return. The cost question is really about replacement or
        refund, and depends on what your terms of sale specify and on whether the cause is
        identified as a dispatch defect or a transit incident.
      </p>

      <h3 className="text-base font-semibold text-text-primary mt-6 mb-2">
        Can software automatically generate the evidence for a DOA dispute?
      </h3>
      <p>
        Yes, as long as evidence capture is built into the shipping workflow rather than bolted
        on afterward. A system that automatically timestamps the photo, the carrier handoff, and
        delivery, then assembles those into an exportable file, replaces manual reconstruction
        under pressure once the dispute lands.
      </p>

      <h3 className="text-base font-semibold text-text-primary mt-6 mb-2">
        What if I didn&apos;t take a photo before shipping?
      </h3>
      <p>
        Without a timestamped photo, the file rests entirely on delivery proof and customer
        communication, which is considerably weaker. That&apos;s exactly why capture needs to be
        automatic and systematic, not a step someone remembers to do case by case.
      </p>

      <h3 className="text-base font-semibold text-text-primary mt-6 mb-2">
        Does delivery proof alone win a dispute?
      </h3>
      <p>
        No. Delivery proof confirms something arrived, not what condition it was in at dispatch.
        Without a timestamped photo or video before shipping, the reviewer can&apos;t establish
        whether the animal was alive when it left the seller, which is exactly the heart of the
        dispute.
      </p>

      <hr />

      <p>
        <em>Losing time and money on poorly documented DOA disputes?</em>
      </p>
      <p>
        <Link href="/tanklogic" className="btn-outline">
          See how TankLogic does it →
        </Link>
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
            <Link href="/blog/prouver-poisson-arrive-vivant-retrofacturation">
              How do you prove a fish arrived alive to fight a chargeback?
            </Link>
          </li>
          <li>
            <Link href="/blog/automatiser-suivi-mortalite-stock-en-ligne">
              How do you automate mortality tracking for your online fish inventory?
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Comment remporter un litige pour un poisson mort à la livraison</h1>

      <p>
        Remporter un litige pour un poisson mort à la livraison (DOA) dépend presque entièrement
        de la preuve réunie avant l&apos;expédition, pas des explications données après coup. Un
        dossier solide combine trois éléments : une preuve horodatée de l&apos;état de l&apos;animal
        avant l&apos;envoi, des données sur les conditions de transport (température, délai), et
        une déclaration déposée dans le délai contractuel fixé avec l&apos;acheteur. Sans ces
        trois éléments réunis et liés à la commande, un litige se perd presque systématiquement,
        quelle que soit la bonne foi du vendeur.
      </p>

      <h2>Ce que les plateformes de paiement exigent réellement</h2>

      <p>
        Stripe et Square ne traitent pas les litiges sur des animaux vivants comme une catégorie
        à part. Le motif retenu par le réseau de carte (Visa, Mastercard) est presque toujours
        « produit non conforme à la description » ou « produit défectueux », le même motif
        utilisé pour un colis endommagé ou une erreur de référence. Ça change ce qu&apos;il faut
        prouver : pas seulement que l&apos;animal était vivant à l&apos;envoi, mais que ce qui a
        été livré correspond exactement à ce qui a été vendu et dans l&apos;état annoncé.
      </p>

      <p>
        Les deux plateformes demandent ce qu&apos;elles appellent une « preuve convaincante »
        (compelling evidence), un dossier structuré, pas un email de justification. Concrètement :
        une preuve de livraison liée à la commande précise, une trace de communication avec le
        client, et tout document démontrant l&apos;état du produit au départ. Le dossier doit être
        déposé dans une fenêtre courte, généralement de l&apos;ordre de quelques jours après la
        notification du litige, pas de quelques semaines. Passé ce délai, le dossier n&apos;est
        même plus examiné, peu importe sa qualité.
      </p>

      <h2>Les 3 preuves qui font basculer un litige</h2>

      <h3>Photo ou vidéo horodatée avant expédition</h3>

      <p>
        Une photo prise « le jour de l&apos;envoi » ne vaut rien si rien ne prouve qu&apos;elle a
        été prise ce jour-là. Ce qui compte, c&apos;est un horodatage vérifiable, lié à la
        commande exacte, pas à une date de fichier modifiable. Une vidéo courte de l&apos;animal
        dans son emballage, juste avant fermeture, est plus difficile à contester qu&apos;une
        photo isolée : elle montre le mouvement, donc la vie, au moment précis du départ.
      </p>

      <h3>Données de transit (température, délai)</h3>

      <p>
        Un animal peut arriver mort sans qu&apos;aucune preuve d&apos;état au départ ne soit en
        cause : le transport lui-même peut être la cause. Un enregistreur de température dans le
        colis, ou à défaut l&apos;heure exacte de remise au transporteur comparée à l&apos;heure
        de livraison, aide à distinguer un problème de transit d&apos;un défaut au départ. Sur un
        litige, cette distinction détermine souvent qui doit payer : le vendeur, ou le
        transporteur.
      </p>

      <h3>Fenêtre de réclamation contractuelle claire</h3>

      <p>
        Un délai de réclamation flou (« contactez-nous rapidement ») ne protège personne. Une
        fenêtre précise, écrite noir sur blanc dans les conditions de vente et rappelée dans
        l&apos;email de confirmation (par exemple : réclamation dans les 2 heures suivant la
        livraison, avec photo à l&apos;appui), donne un cadre que le client ne peut pas contester
        après coup, et que le vendeur peut opposer si la réclamation arrive trop tard.
      </p>

      <h2>Ce qui ne suffit pas</h2>

      <p>
        La plupart des vendeurs qui perdent un litige DOA ont pourtant « une preuve ». Le problème
        n&apos;est presque jamais l&apos;absence totale de documentation, c&apos;est sa qualité et
        son lien avec la commande précise.
      </p>

      <p>
        Une photo générique du même modèle d&apos;emballage, prise à un autre moment, ne prouve
        rien sur cette commande-là. Un email disant « nous emballons toujours soigneusement » est
        une affirmation, pas une preuve. Une preuve de livraison sans lien vérifiable avec la
        commande contestée (le mauvais numéro de suivi, ou aucun numéro du tout) peut être
        écartée d&apos;office par l&apos;examinateur du litige.
      </p>

      <p>
        Le point commun de ces dossiers perdants : la preuve existe quelque part, dans une boîte
        mail, sur un téléphone, mais elle n&apos;est reliée à rien au moment où il faut la
        produire. Reconstituer ce lien après coup, sous la pression du délai de réponse, c&apos;est
        déjà avoir perdu la moitié de la bataille.
      </p>

      <h2>Comment un système sérialisé automatise cette preuve</h2>

      <p>
        La différence entre un dossier gagnant et un dossier perdant tient rarement à la qualité
        d&apos;une seule photo. Elle tient à la structure : chaque étape de la manutention, de la
        réception du fournisseur jusqu&apos;à la livraison, génère automatiquement un
        enregistrement horodaté et lié à un identifiant unique, celui du spécimen précis vendu,
        pas d&apos;une référence générique.
      </p>

      <p>
        Concrètement, un système de traçabilité sérialisé capture ces jalons au fil de l&apos;eau :
        réception, acclimatation, photo avant emballage, remise au transporteur, confirmation de
        livraison. Chaque étape s&apos;ajoute à la fiche du produit sans action manuelle
        supplémentaire de la part du vendeur, elle fait partie du geste métier normal, pas
        d&apos;une tâche administrative en plus.
      </p>

      <TraceabilityTimelineDemo />

      <p>
        L&apos;avantage n&apos;est pas seulement d&apos;avoir la preuve, c&apos;est de pouvoir la
        produire immédiatement. Un export PDF prêt à transmettre, généré en un clic à partir de
        cette chronologie, change concrètement l&apos;issue d&apos;un litige : le dossier part
        complet, dans les délais serrés imposés par les plateformes de paiement, au lieu
        d&apos;être reconstitué dans l&apos;urgence à partir d&apos;une boîte mail et d&apos;une
        pellicule photo éparpillée. Le vendeur qui répond en dix minutes avec un dossier complet
        et celui qui répond en trois jours avec des pièces éparses ne jouent pas le même litige.
      </p>

      <p>
        C&apos;est exactement ce que fait <strong>TankLogic</strong> : chaque spécimen vendu
        porte sa propre chronologie, de la réception à la livraison, et le dossier de preuve
        s&apos;exporte en PDF sans reconstitution manuelle.
      </p>

      <h2>FAQ</h2>

      <h3 className="text-base font-semibold text-text-primary mt-6 mb-2">
        Combien de temps ai-je pour déclarer un DOA ?
      </h3>
      <p>
        Ça dépend de votre propre politique de vente, mais un délai court, généralement entre 30
        minutes et 2 heures après réception, est standard dans le secteur du vivant. Ce délai doit
        être écrit noir sur blanc dans vos conditions de vente et rappelé au client à la
        livraison, sinon il ne peut pas être opposé en cas de litige.
      </p>

      <h3 className="text-base font-semibold text-text-primary mt-6 mb-2">
        Qui paie les frais de retour ?
      </h3>
      <p>
        Sur un animal mort à la livraison, il n&apos;y a en général rien à retourner
        physiquement : la preuve remplace le retour. La question des frais se règle plutôt sur le
        remplacement ou le remboursement, selon ce qui est écrit dans vos conditions de vente et
        selon que la cause est identifiée comme un défaut au départ ou un incident de transport.
      </p>

      <h3 className="text-base font-semibold text-text-primary mt-6 mb-2">
        Un logiciel peut-il générer automatiquement les preuves pour un litige DOA ?
      </h3>
      <p>
        Oui, à condition que la capture de preuve soit intégrée au workflow d&apos;expédition
        plutôt qu&apos;ajoutée après coup. Un système qui horodate automatiquement la photo, la
        remise au transporteur et la livraison, puis assemble ces éléments en un document
        exportable, remplace la reconstitution manuelle sous pression au moment du litige.
      </p>

      <h3 className="text-base font-semibold text-text-primary mt-6 mb-2">
        Que faire si je n&apos;ai pas pris de photo avant l&apos;envoi ?
      </h3>
      <p>
        Sans photo horodatée, le dossier repose uniquement sur la preuve de livraison et les
        échanges avec le client, ce qui est nettement plus faible. C&apos;est précisément la
        raison pour laquelle la capture doit être automatique et systématique, pas une étape
        qu&apos;on pense à faire au cas par cas.
      </p>

      <h3 className="text-base font-semibold text-text-primary mt-6 mb-2">
        La preuve de livraison seule suffit-elle à gagner un litige ?
      </h3>
      <p>
        Non. Une preuve de livraison confirme que quelque chose est arrivé, pas dans quel état
        c&apos;était au départ. Sans photo ou vidéo horodatée avant l&apos;envoi, l&apos;examinateur
        ne peut pas établir si l&apos;animal était vivant au moment où il a quitté le vendeur, ce
        qui est justement le cœur du litige.
      </p>

      <hr />

      <p>
        <em>Vous perdez du temps (et de l&apos;argent) sur des litiges DOA mal documentés ?</em>
      </p>
      <p>
        <Link href="/tanklogic" className="btn-outline">
          Découvrir TankLogic →
        </Link>
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
            <Link href="/blog/prouver-poisson-arrive-vivant-retrofacturation">
              Comment prouver qu&apos;un poisson est arrivé vivant pour contester une rétrofacturation ?
            </Link>
          </li>
          <li>
            <Link href="/blog/automatiser-suivi-mortalite-stock-en-ligne">
              Comment automatiser le suivi de mortalité pour mon stock en ligne ?
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )
}
