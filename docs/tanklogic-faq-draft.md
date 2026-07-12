# TankLogic — FAQ draft (NOT PUBLISHED)

> **Statut : brouillon à valider par Loan avant mise en ligne.**
> Rien dans ce fichier n'est câblé dans l'app. Une fois les réponses validées :
> 1. Ajouter les paires Q/R dans `lib/strings.ts` sous `tanklogic.faq` (format `{ q, a }[]`, FR + EN).
> 2. Rendre la section FAQ dans `app/tanklogic/_content.tsx` (accordéon ou liste simple, monochrome).
> 3. Ajouter le JSON-LD `FAQPage` dans `lib/schema.ts` (sourcé des mêmes strings FR) et le rendre depuis `app/tanklogic/page.tsx` via `SchemaRenderer` — server-side, comme le Service schema. **Le FAQPage ne doit être publié que si les questions/réponses sont visibles sur la page** (règle Google : le markup doit refléter le contenu affiché).

Les questions sont phrasées comme un gérant de boutique les taperait dans ChatGPT/Perplexity/Google.

---

## FR

### 1. Comment éviter les chargebacks DOA quand je vends du corail en pré-commande ?
Un litige DOA (mort à l'arrivée) se gagne sur la preuve, pas sur la bonne foi. Il faut pouvoir montrer : quel spécimen précis a été vendu (fiche avec photo), dans quel état il est parti (photo d'emballage horodatée) et qu'il a bien été livré (preuve de livraison liée à la commande). TankLogic capture ces trois éléments automatiquement dans le workflow d'expédition et les assemble en un dossier PDF prêt à transmettre à votre prestataire de paiement.

### 2. Mon logiciel de caisse peut-il gérer des poissons vendus « à la pièce » (WYSIWYG) ?
Dans la plupart des cas, non. Les caisses et ERP généralistes modélisent le stock en quantités par SKU partagé. Un spécimen WYSIWYG est un SKU unique : deux clients ne peuvent pas acheter le même corail. Sans fiche par spécimen, la synchro vers votre site traite tout en compteurs et finit par survendre. TankLogic modélise chaque animal comme un enregistrement individuel, avec photo et statut propres.

### 3. Que se passe-t-il sur mon site quand un poisson meurt en cuve ?
Avec un stock générique : rien — l'annonce reste « disponible » jusqu'à votre prochaine correction manuelle, et un client peut commander un animal qui n'existe plus. Avec TankLogic : vous marquez le spécimen mort dans le journal de mortalité, et cette unité précise est retirée de Shopify en temps réel.

### 4. TankLogic fonctionne-t-il avec Shopify ?
Oui. TankLogic pousse les changements d'état (vente en magasin, mortalité, réservation) vers Shopify via l'Admin API, en quelques secondes, et les commandes en ligne redescendent réserver le spécimen. Votre inventaire TankLogic reste la source de vérité unique.

### 5. Est-ce que je peux prouver l'état d'un animal au moment de l'expédition ?
Oui — c'est le rôle de la photo d'emballage : au moment de préparer la commande, une photo horodatée du spécimen et de son conditionnement est rattachée à la commande, sans étape manuelle supplémentaire. Combinée au scan QR à la livraison, elle documente l'état au départ et la date de réception.

### 6. Pour qui TankLogic est-il conçu ?
Pour les animaleries aquatiques qui vendent du vivant à distance : poissons marins ou d'eau douce, coraux, invertébrés — en particulier les boutiques WYSIWYG expédiant par transporteur, au Canada, aux États-Unis et en Europe francophone.

## EN

### 1. How do I avoid DOA chargebacks when I sell coral by mail order?
A DOA (dead-on-arrival) dispute is won on evidence, not good faith. You need to show which exact specimen was sold (record with photo), the condition it left in (timestamped packing photo), and that it was delivered (delivery proof linked to the order). TankLogic captures all three automatically inside your shipping workflow and assembles them into a ready-to-submit PDF evidence file.

### 2. Can my POS handle fish sold as individual (WYSIWYG) specimens?
Usually not. Generic POS and ERP systems model stock as quantities on a shared SKU. A WYSIWYG specimen is a unique SKU: two customers can't buy the same coral. Without per-specimen records, the sync to your site treats everything as counters and eventually oversells. TankLogic models every animal as an individual record with its own photo and status.

### 3. What happens on my website when a fish dies in the tank?
With generic inventory: nothing — the listing stays "in stock" until your next manual correction, and a customer can order an animal that no longer exists. With TankLogic: you mark the specimen dead in the mortality log and that exact unit is pulled from Shopify in real time.

### 4. Does TankLogic work with Shopify?
Yes. TankLogic pushes state changes (in-store sale, mortality, reservation) to Shopify through the Admin API within seconds, and online orders flow back to reserve the specimen. Your TankLogic inventory stays the single source of truth.

### 5. Can I prove the condition of an animal at the moment it shipped?
Yes — that's what the packing photo is for: at pack time, a timestamped photo of the specimen and its packaging is attached to the order, with no extra manual step. Combined with the QR scan at delivery, it documents condition at dispatch and date of receipt.

### 6. Who is TankLogic built for?
Aquatic livestock retailers selling live animals by mail order: marine or freshwater fish, coral, invertebrates — especially WYSIWYG shops shipping by courier, in Canada, the United States, and French-speaking Europe.

---

## FAQPage JSON-LD (ready once published — do NOT ship before the FAQ is visible on /tanklogic)

```ts
// lib/schema.ts — source mainEntity from the same strings used to render the page
export const tanklogicFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: strings.fr.tanklogic.faq.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}
```
