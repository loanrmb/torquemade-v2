'use client'

import Link from 'next/link'
import { useLang } from '@/components/app-provider'

export function SiteWebMeilleurCommercialContent() {
  const lang = useLang()

  if (lang === 'en') return (
    <article className="blog-article">
      <h1 className="blog-article-title">Why Your Website Is Your Best Salesperson in 2025</h1>

      <p>
        A good salesperson is expensive, works defined hours, and takes holidays. Your
        website works every night, every weekend, every public holiday. It answers questions,
        presents your services, collects leads, and qualifies prospects — simultaneously,
        for dozens of visitors at once, without ever getting tired. But only if it's
        designed for that.
      </p>

      <h2>What a commercial site must do that most don't</h2>

      <ul>
        <li><strong>Answer objections before they're raised.</strong> A good salesperson anticipates prospect questions. Your site must do the same: pricing, timelines, work process, guarantees — all common objections answered clearly on service pages.</li>
        <li><strong>Guide visitors toward a precise action.</strong> Each page must have a unique objective and visible call to action. A site without CTAs is a brochure — not a salesperson.</li>
        <li><strong>Establish credibility before first contact.</strong> Completed projects, client testimonials, client logos, certifications, key figures — everything that lets the visitor decide they can trust you before even speaking with you.</li>
        <li><strong>Qualify incoming prospects.</strong> A well-designed contact form asks the right questions (budget, timeline, project type) so you arrive at the first meeting with clear context — not starting from scratch.</li>
      </ul>

      <h2>The 10-second visitor test</h2>

      <p>
        Open your homepage and read what a visitor sees in the first ten seconds. Three
        questions must have immediate answers: Who are you? What do you offer? Why choose
        you over someone else? If these three questions aren't clearly answered above the
        fold, your site is losing clients before they even scroll.
      </p>

      <hr />

      <p>
        <em>
          Want to transform your site into a real commercial tool?{' '}
          <Link href="/contact">Contact us</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Related articles">
        <p className="blog-related-title">On the same topic</p>
        <ul>
          <li>
            <Link href="/blog/roi-site-web">
              Website ROI: how to measure what it really brings you
            </Link>
          </li>
          <li>
            <Link href="/blog/portfolio-ligne-clients-inbound">
              How an online portfolio attracts clients without prospecting
            </Link>
          </li>
          <li>
            <Link href="/blog/mesurer-succes-site-web">
              How to measure website success beyond traffic
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )

  return (
    <article className="blog-article">
      <h1 className="blog-article-title">Pourquoi votre site web est votre meilleur commercial en 2025</h1>

      <p>
        Un bon commercial coûte cher, travaille des horaires définis, et part en
        vacances. Votre site web, lui, travaille chaque nuit, chaque weekend, chaque
        jour férié. Il répond aux questions, présente vos services, récolte des leads
        et qualifie des prospects — en parallèle, pour des dizaines de visiteurs
        simultanément, sans jamais se fatiguer. Mais seulement s'il est conçu pour ça.
      </p>

      <h2>Ce qu'un site commercial doit faire que la plupart ne font pas</h2>

      <ul>
        <li>
          <strong>Répondre aux objections avant qu'elles soient posées.</strong>
          Un bon commercial anticipe les questions du prospect. Votre site doit
          faire pareil : prix, délais, processus de travail, garanties —
          toutes les objections courantes répondues clairement sur les pages
          de service.
        </li>
        <li>
          <strong>Guider le visiteur vers une action précise.</strong>
          Chaque page doit avoir un objectif unique et un appel à l'action visible.
          Un site sans CTA est une brochure — pas un commercial.
        </li>
        <li>
          <strong>Établir la crédibilité avant le premier contact.</strong>
          Projets réalisés, témoignages clients, logos de clients, certifications,
          chiffres clés — tout ce qui permet au visiteur de décider qu'il peut
          vous faire confiance avant même de vous parler.
        </li>
        <li>
          <strong>Qualifier les prospects entrants.</strong>
          Un formulaire de contact bien conçu pose les bonnes questions (budget,
          délai, type de projet) pour que vous arriviez à la première réunion
          avec un contexte clair — pas à partir de zéro.
        </li>
      </ul>

      <h2>Le test du visiteur de 10 secondes</h2>

      <p>
        Ouvrez la page d'accueil de votre site et lisez ce que voit un visiteur
        dans les dix premières secondes. Trois questions doivent avoir une réponse
        immédiate : Qui êtes-vous ? Qu'est-ce que vous proposez ? Pourquoi choisir
        vous plutôt qu'un autre ?
      </p>

      <p>
        Si ces trois questions n'ont pas de réponse claire au premier écran,
        votre site perd des clients avant même qu'ils scrollent.
      </p>

      <hr />

      <p>
        <em>
          Vous voulez transformer votre site en vrai outil commercial ?{' '}
          <Link href="/contact">Contactez-nous</Link>.
        </em>
      </p>

      <nav className="blog-related" aria-label="Articles liés">
        <p className="blog-related-title">Sur le même sujet</p>
        <ul>
          <li>
            <Link href="/blog/roi-site-web">
              ROI d'un site web : comment mesurer ce que ça vous rapporte vraiment
            </Link>
          </li>
          <li>
            <Link href="/blog/portfolio-ligne-clients-inbound">
              Comment un portfolio en ligne attire des clients sans prospecter
            </Link>
          </li>
          <li>
            <Link href="/blog/mesurer-succes-site-web">
              Comment mesurer le succès d'un site web au-delà du trafic
            </Link>
          </li>
        </ul>
      </nav>

    </article>
  )
}
