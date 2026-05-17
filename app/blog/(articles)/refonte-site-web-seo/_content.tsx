'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'
import TableRisques from './_illustrations/TableRisques'

export function RefonteWebSeoContent() {
  const lang = useLang()
  return lang === 'fr' ? <ArticleFR lang={lang} /> : <ArticleEN lang={lang} />
}

function ArticleFR({ lang }: { lang: 'fr' | 'en' }) {
  return (
    <>
      <header className="mb-16">
        <h1 className="blog-article-title" style={{ color: 'hsl(var(--text-primary))' }}>
          Refonte de site web : comment l&apos;aborder sans perdre son SEO
        </h1>
        <p className="mt-6 text-lg leading-relaxed opacity-60">
          Une refonte est l&apos;un des moments les plus risqués pour le référencement d&apos;un site. Des URLs qui changent, des pages qui disparaissent, une structure qui se restructure — autant de signaux qui peuvent faire chuter les positions en quelques jours. La bonne nouvelle : ces risques sont entièrement évitables si la migration est préparée correctement.
        </p>
      </header>

      <h2>Pourquoi une refonte fait chuter le SEO</h2>

      <p>Google indexe des URLs précises. Quand vous modifiez l&apos;architecture de votre site sans prévenir le moteur, il interprète les changements comme des disparitions de contenu. Une page qui était positionnée sur une requête précise devient introuvable — Google supprime son entrée de l&apos;index, et la position s&apos;évapore.</p>

      <p>Le problème se produit à trois niveaux distincts.</p>

      <p><strong>Au niveau des URLs.</strong> Si <code>/services/creation-site-web</code> devient <code>/web/creation-site</code> lors de la refonte, Google considère que la première page a disparu et que la seconde est nouvelle. Tout le capital SEO accumulé sur l&apos;ancienne URL repart de zéro.</p>

      <p><strong>Au niveau du contenu.</strong> Une refonte est souvent l&apos;occasion de simplifier les textes, réduire les pages, fusionner des rubriques. Ce qui paraît logique du point de vue éditorial peut supprimer des signaux de pertinence sur lesquels Google s&apos;appuyait pour positionner le site.</p>

      <p><strong>Au niveau de la structure technique.</strong> Balises title qui changent, balises H1 réécrites, structure de maillage interne modifiée — chaque changement est un signal que Google devra réinterpréter.</p>

      <h2>Étape 1 : auditer avant de toucher quoi que ce soit</h2>

      <p>Avant d&apos;écrire une seule ligne de code, il faut photographier l&apos;état SEO du site existant.</p>

      <p>Cela signifie exporter depuis Google Search Console la liste complète des pages indexées avec leur trafic et leurs positions. Identifier les pages qui génèrent des clics — même peu — car ce sont celles à protéger en priorité. Lister toutes les URLs actuelles et noter pour chacune si elle sera conservée, modifiée ou supprimée dans la nouvelle version.</p>

      <p>Cette cartographie prend quelques heures. Elle conditionne tout le travail de migration qui suit. Sauter cette étape, c&apos;est rénover un appartement sans plan.</p>

      <h2>Étape 2 : les redirections 301, non négociables</h2>

      <p>Une redirection 301 dit à Google : cette page a définitivement déménagé à cette nouvelle adresse. Elle transfère le capital SEO de l&apos;ancienne URL vers la nouvelle.</p>

      <p>La règle est simple : toute URL existante qui change doit avoir une redirection 301 vers sa nouvelle version. Sans exception. Y compris les pages à faible trafic — un jour elles pourraient avoir des backlinks entrants qu&apos;on ne connaît pas.</p>

      <p>Le fichier de redirections se prépare avant le lancement. On liste toutes les paires ancienne URL vers nouvelle URL dans un tableur, puis on les implémente dans le code (via <code>next.config.js</code> pour un site Next.js) avant de mettre le nouveau site en ligne.</p>

      <p>Ce qui se passe si on oublie : Google tombe sur des erreurs 404, retire les pages de l&apos;index, et les positions s&apos;effondrent dans les semaines suivantes.</p>

      <h2>Étape 3 : ne pas changer les balises qui fonctionnent</h2>

      <p>C&apos;est un réflexe naturel lors d&apos;une refonte : tout réécrire. Nouveaux textes, nouveaux titres, nouvelle structure éditoriale. C&apos;est souvent une erreur SEO.</p>

      <p>Les balises title et les meta descriptions qui existent sur les pages bien positionnées ont été validées par Google. Les modifier revient à demander au moteur de réévaluer la pertinence de la page. Parfois la réévaluation est favorable, souvent elle prend du temps, et parfois elle dégrade la position.</p>

      <p>La bonne approche : conserver à l&apos;identique les balises des pages qui performent, et ne les optimiser qu&apos;après la migration, une par une, en mesurant l&apos;impact.</p>

      <TableRisques lang={lang} />

      <h2>Étape 4 : le lancement en douceur</h2>

      <p>Mettre un nouveau site en ligne d&apos;un coup, un vendredi soir, sans monitoring — c&apos;est prendre un risque inutile.</p>

      <p>Le protocole recommandé : lancer en semaine pour pouvoir réagir rapidement, surveiller la Search Console dans les 48h suivant le lancement, vérifier que les redirections fonctionnent via un outil de test d&apos;URLs, et soumettre le nouveau sitemap immédiatement après la mise en ligne.</p>

      <p>Les premières semaines post-lancement sont normalement marquées par une légère instabilité des positions — Google recrawle et réévalue. C&apos;est attendu. Ce qui ne l&apos;est pas, c&apos;est une chute de 50 % du trafic organique qui persiste au-delà de 4 à 6 semaines : c&apos;est le signe qu&apos;une erreur de migration n&apos;a pas été rattrapée.</p>

      <h2>Ce qui ne devrait jamais attendre la refonte</h2>

      <p>La refonte est souvent le moment où l&apos;on règle tout ce qui était en suspens depuis des mois. Structure des URLs, balises manquantes, pages orphelines. C&apos;est la bonne occasion — à condition de tout documenter et de faire les migrations correctement.</p>

      <p>Une refonte bien préparée ne fait pas perdre de SEO. Dans la plupart des cas, elle permet d&apos;en gagner — parce qu&apos;une architecture propre et un code léger donnent à Google plus de signaux positifs que l&apos;ancien site ne pouvait en produire.</p>

      <hr />

      <p><em>Vous planifiez une refonte et vous ne voulez pas repartir de zéro côté SEO ? <Link href="/contact">Contactez-nous</Link> — nous préparons la migration avec vous avant le premier commit.</em></p>
    </>
  )
}

function ArticleEN({ lang }: { lang: 'fr' | 'en' }) {
  return (
    <>
      <header className="mb-16">
        <h1 className="blog-article-title" style={{ color: 'hsl(var(--text-primary))' }}>
          Website Redesign: How to Do It Without Losing Your SEO
        </h1>
        <p className="mt-6 text-lg leading-relaxed opacity-60">
          A redesign is one of the riskiest moments for a site&apos;s search rankings. URLs change, pages disappear, structure shifts — all signals that can cause rankings to drop within days. The good news: these risks are entirely avoidable if the migration is prepared correctly.
        </p>
      </header>

      <h2>Why a Redesign Causes SEO Drops</h2>

      <p>Google indexes specific URLs. When you change your site&apos;s architecture without signaling the search engine, it interprets the changes as content disappearing. A page that ranked for a specific query becomes unfindable — Google removes it from the index, and the ranking evaporates.</p>

      <p>The problem occurs at three distinct levels.</p>

      <p><strong>At the URL level.</strong> If <code>/services/website-creation</code> becomes <code>/web/site-build</code> during the redesign, Google treats the first page as gone and the second as new. All SEO equity accumulated on the old URL starts from zero.</p>

      <p><strong>At the content level.</strong> A redesign is often an opportunity to simplify copy, reduce pages, and merge sections. What makes sense editorially can strip out relevance signals Google was relying on to rank the site.</p>

      <p><strong>At the technical structure level.</strong> Title tags changing, H1s rewritten, internal linking structure modified — every change is a signal Google will need to reinterpret.</p>

      <h2>Step 1: Audit Before Touching Anything</h2>

      <p>Before writing a single line of code, you need to photograph the existing site&apos;s SEO state.</p>

      <p>This means exporting from Google Search Console the complete list of indexed pages with their traffic and rankings. Identifying pages that generate clicks — even few — as these are the ones to protect first. Listing all current URLs and noting for each whether it will be kept, modified, or removed in the new version.</p>

      <p>This mapping takes a few hours. It conditions all the migration work that follows. Skipping this step is like renovating an apartment without a floor plan.</p>

      <h2>Step 2: 301 Redirects — Non-Negotiable</h2>

      <p>A 301 redirect tells Google: this page has permanently moved to this new address. It transfers the SEO equity from the old URL to the new one.</p>

      <p>The rule is simple: every existing URL that changes must have a 301 redirect to its new version. No exceptions. Including low-traffic pages — they may have inbound backlinks you don&apos;t know about.</p>

      <p>The redirect file is prepared before launch. List all old URL to new URL pairs in a spreadsheet, then implement them in code (via <code>next.config.js</code> for a Next.js site) before the new site goes live.</p>

      <p>What happens if you forget: Google hits 404 errors, removes pages from the index, and rankings collapse in the following weeks.</p>

      <h2>Step 3: Don&apos;t Change Tags That Are Working</h2>

      <p>It&apos;s a natural reflex during a redesign: rewrite everything. New copy, new titles, new editorial structure. This is often an SEO mistake.</p>

      <p>Title tags and meta descriptions on well-ranking pages have been validated by Google. Changing them means asking the engine to re-evaluate the page&apos;s relevance. Sometimes the re-evaluation is favorable, often it takes time, and sometimes it degrades the ranking.</p>

      <p>The right approach: keep tags on performing pages identical, and only optimize them after migration, one by one, measuring the impact.</p>

      <TableRisques lang={lang} />

      <h2>Step 4: A Careful Launch</h2>

      <p>Putting a new site live all at once on a Friday evening with no monitoring — that&apos;s an unnecessary risk.</p>

      <p>The recommended protocol: launch mid-week to be able to react quickly, monitor Search Console in the 48 hours after launch, verify that redirects work using a URL testing tool, and submit the new sitemap immediately after going live.</p>

      <p>The first weeks post-launch typically show slight ranking instability — Google recrawls and re-evaluates. That&apos;s expected. What isn&apos;t: a 50% organic traffic drop that persists beyond 4 to 6 weeks. That&apos;s a sign a migration error hasn&apos;t been caught.</p>

      <h2>What Should Never Wait for the Redesign</h2>

      <p>A redesign is often when you fix everything that&apos;s been pending for months: URL structure, missing tags, orphan pages. It&apos;s the right opportunity — as long as everything is documented and migrations are done correctly.</p>

      <p>A well-prepared redesign doesn&apos;t lose SEO. In most cases, it gains — because a clean architecture and lightweight code give Google more positive signals than the old site could produce.</p>

      <hr />

      <p><em>Planning a redesign and don&apos;t want to start from zero on SEO? <Link href="/contact">Contact us</Link> — we prepare the migration with you before the first commit.</em></p>
    </>
  )
}
