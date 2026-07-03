'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'
import TableChamps from './_illustrations/TableChamps'

export function FormulaireContactContent() {
  const lang = useLang()
  return lang === 'fr' ? <ArticleFR lang={lang} /> : <ArticleEN lang={lang} />
}

function ArticleFR({ lang }: { lang: 'fr' | 'en' }) {
  return (
    <>
      <header className="mb-16">
        <h1 className="blog-article-title" style={{ color: 'hsl(var(--text-primary))' }}>
          Pourquoi votre formulaire de contact ne convertit pas (et comment le fixer)
        </h1>
        <p className="mt-6 text-lg leading-relaxed opacity-60">
          Le formulaire de contact est souvent le dernier obstacle entre un visiteur intéressé et un client potentiel.
          La plupart des sites le traitent comme une formalité. Résultat : des taux d&apos;abandon proches de 70 %,
          et des leads qui partent sans laisser de trace.
        </p>
      </header>

      <h2>Le problème n&apos;est pas le trafic</h2>

      <p>Quand un site ne génère pas de contacts, le réflexe est d&apos;augmenter le trafic, plus de SEO, plus de publicité. C&apos;est souvent la mauvaise réponse.</p>

      <p>Si votre formulaire convertit à 5 % et que vous doublez votre trafic, vous doublez vos contacts mais vous laissez toujours 95 visiteurs sur 100 repartir sans rien. Corriger le formulaire d&apos;abord est presque toujours plus rentable que d&apos;investir davantage en acquisition.</p>

      <p>Un formulaire bien conçu convertit entre 15 % et 25 % des visiteurs qui arrivent sur la page de contact. Un formulaire mal conçu tourne à 3-8 %. La différence tient rarement à des détails techniques : elle tient à des choix de conception que nous allons détailler.</p>

      <h2>Erreur n°1 : trop de champs</h2>

      <p>C&apos;est l&apos;erreur la plus documentée et la plus répandue. Chaque champ supplémentaire est un obstacle supplémentaire. Les études sur le comportement des formulaires montrent systématiquement qu&apos;au-delà de 3 à 4 champs, le taux de complétion chute.</p>

      <p>La question à poser pour chaque champ : <strong>est-ce que j&apos;en ai absolument besoin pour répondre à ce contact ?</strong> Le numéro de téléphone, le budget, la taille de l&apos;entreprise : tout ce qui peut être demandé lors de l&apos;échange suivant n&apos;a pas sa place dans le formulaire initial.</p>

      <p>Le minimum viable pour un formulaire de contact B2B : nom, email, message. Trois champs. C&apos;est tout.</p>

      <TableChamps lang={lang} />

      <h2>Erreur n°2 : aucun retour visuel après l&apos;envoi</h2>

      <p>C&apos;est l&apos;erreur la plus sous-estimée. L&apos;utilisateur clique sur Envoyer, rien ne se passe visuellement, ou pire, la page se recharge à blanc. Il ne sait pas si son message est parti. Il doute, il envoie une deuxième fois, ou il abandonne en pensant que le site est cassé.</p>

      <p>Un formulaire qui convertit confirme clairement l&apos;envoi : message de succès visible, changement d&apos;état du bouton, ou redirection vers une page de confirmation. Ce retour visuel rassure et ferme proprement l&apos;interaction.</p>

      <p>L&apos;état de chargement compte aussi. Si le formulaire met deux secondes à envoyer sans indicateur, l&apos;utilisateur pense que son clic n&apos;a pas fonctionné. Un spinner ou un changement de texte sur le bouton pendant l&apos;envoi suffit à éliminer ce doute.</p>

      <h2>Erreur n°3 : le formulaire est introuvable</h2>

      <p>Beaucoup de sites ont un bon formulaire, mais il est enfoui. Lien dans le footer uniquement, page de contact absente de la navigation principale, aucun appel à l&apos;action dans le corps des pages de service.</p>

      <p>Un visiteur intéressé ne cherche pas longtemps. Si le chemin vers le formulaire n&apos;est pas évident en moins de deux clics, il part.</p>

      <p>Les bonnes pratiques : lien de contact dans la navigation principale, CTA visible sur la page d&apos;accueil et les pages de service, et idéalement un formulaire directement accessible sur la page de contact sans avoir à scroller.</p>

      <h2>Erreur n°4 : un message générique au-dessus du formulaire</h2>

      <p><em>Remplissez ce formulaire pour nous contacter</em> n&apos;aide personne. Ce texte par défaut ne dit rien sur ce qui se passe après l&apos;envoi, sur le délai de réponse, ou sur pourquoi ça vaut la peine de prendre 30 secondes pour écrire.</p>

      <p>Un texte court mais concret fait la différence. Quelque chose comme : <em>Décrivez votre projet en quelques mots. Nous vous répondons dans les 24h avec une première analyse et, si le projet nous correspond, une proposition de call.</em> C&apos;est une promesse claire. Elle réduit l&apos;incertitude et augmente le taux de complétion.</p>

      <h2>Erreur n°5 : la validation d&apos;erreur est punitive</h2>

      <p>Quand un utilisateur oublie de remplir un champ et clique sur Envoyer, deux choses peuvent se passer.</p>

      <p>Version punitive : la page remonte en haut, tous les champs sont vidés, un message rouge générique dit <em>Erreur de formulaire</em>. L&apos;utilisateur doit tout recommencer.</p>

      <p>Version correcte : les champs déjà remplis sont conservés, le champ manquant est mis en évidence avec un message d&apos;erreur précis, et le focus est mis sur ce champ spécifique.</p>

      <p>La différence de taux de conversion entre ces deux approches est mesurable. La version punitive génère des abandons ; la version correcte guide vers la complétion.</p>

      <h2>Un chantier de deux heures, pas deux semaines</h2>

      <p>Corriger un formulaire de contact n&apos;est pas un projet long. Dans la plupart des cas, les modifications sont dans le front-end uniquement : réduire les champs, ajouter un état de succès, revoir le texte d&apos;introduction, s&apos;assurer que la validation est non-destructive.</p>

      <p>C&apos;est souvent l&apos;un des meilleurs retours sur investissement en optimisation de site, rapide à implémenter, impact direct sur les leads entrants.</p>

      <hr />

      <p><em>Votre formulaire est en ligne mais les contacts ne rentrent pas ? <Link href="/contact">Contactez-nous</Link> : nous auditrons votre page de contact et vous proposerons des corrections concrètes.</em></p>
    </>
  )
}

function ArticleEN({ lang }: { lang: 'fr' | 'en' }) {
  return (
    <>
      <header className="mb-16">
        <h1 className="blog-article-title" style={{ color: 'hsl(var(--text-primary))' }}>
          Why Your Contact Form Isn&apos;t Converting (And How to Fix It)
        </h1>
        <p className="mt-6 text-lg leading-relaxed opacity-60">
          The contact form is often the last obstacle between an interested visitor and a potential client.
          Most sites treat it as a formality. Result: abandonment rates close to 70%, and leads
          that leave without a trace.
        </p>
      </header>

      <h2>The Problem Isn&apos;t Traffic</h2>

      <p>When a site doesn&apos;t generate contacts, the instinct is to increase traffic, more SEO, more advertising. That&apos;s often the wrong answer.</p>

      <p>If your form converts at 5% and you double your traffic, you double your contacts, but you&apos;re still letting 95 out of 100 visitors leave empty-handed. Fixing the form first is almost always more cost-effective than investing more in acquisition.</p>

      <p>A well-designed form converts between 15% and 25% of visitors who reach the contact page. A poorly designed one runs at 3–8%. The difference rarely comes down to technical details, it comes down to design choices we&apos;ll cover here.</p>

      <h2>Mistake #1: Too Many Fields</h2>

      <p>This is the most documented and most widespread mistake. Every additional field is an additional obstacle. Studies on form behavior consistently show that beyond 3 to 4 fields, completion rates drop.</p>

      <p>The question to ask for every field: <strong>do I absolutely need this to respond to the contact?</strong> Phone number, budget, company size: anything that can be asked in the follow-up exchange has no place in the initial form.</p>

      <p>The minimum viable B2B contact form: name, email, message. Three fields. That&apos;s it.</p>

      <TableChamps lang={lang} />

      <h2>Mistake #2: No Visual Feedback After Submission</h2>

      <p>This is the most underestimated mistake. The user clicks Send, nothing happens visually, or worse, the page reloads blank. They don&apos;t know if their message went through. They doubt, send again, or give up thinking the site is broken.</p>

      <p>A form that converts clearly confirms submission: a visible success message, a change in button state, or a redirect to a confirmation page. This visual feedback reassures the user and cleanly closes the interaction.</p>

      <p>Loading state matters too. If the form takes two seconds to send with no indicator, the user thinks their click didn&apos;t register. A spinner or a button text change during submission is enough to eliminate that doubt.</p>

      <h2>Mistake #3: The Form Is Buried</h2>

      <p>Many sites have a good form: but it&apos;s hidden. Footer link only, contact page absent from the main navigation, no calls to action in the body of service pages.</p>

      <p>An interested visitor doesn&apos;t search long. If the path to the form isn&apos;t obvious within two clicks, they leave.</p>

      <p>Best practices: contact link in the main navigation, visible CTA on the homepage and service pages, and ideally a form directly accessible on the contact page without scrolling.</p>

      <h2>Mistake #4: A Generic Message Above the Form</h2>

      <p><em>Fill in this form to contact us</em> helps no one. That default text says nothing about what happens after submission, the response time, or why it&apos;s worth taking 30 seconds to write.</p>

      <p>A short but concrete text makes a difference. Something like: <em>Describe your project in a few words. We&apos;ll reply within 24h with an initial analysis and, if the project is a fit, a call proposal.</em> That&apos;s a clear promise. It reduces uncertainty and increases completion rates.</p>

      <h2>Mistake #5: Punitive Error Validation</h2>

      <p>When a user forgets to fill in a field and clicks Send, two things can happen.</p>

      <p>Punitive version: the page scrolls to the top, all fields are cleared, a generic red message says <em>Form error</em>. The user has to start over.</p>

      <p>Correct version: fields already filled are preserved, the missing field is highlighted with a specific error message, and focus is placed on that specific field.</p>

      <p>The difference in conversion rates between these two approaches is measurable. The punitive version generates abandonment; the correct version guides toward completion.</p>

      <h2>A Two-Hour Job, Not Two Weeks</h2>

      <p>Fixing a contact form isn&apos;t a long project. In most cases, the changes are front-end only: reduce fields, add a success state, rework the intro text, ensure validation is non-destructive.</p>

      <p>It&apos;s often one of the best returns on investment in site optimization, fast to implement, direct impact on inbound leads.</p>

      <hr />

      <p><em>Your form is live but contacts aren&apos;t coming in? <Link href="/contact">Contact us</Link>, we&apos;ll audit your contact page and suggest concrete fixes.</em></p>
    </>
  )
}
