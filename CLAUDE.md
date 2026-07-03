# Torquemade v2 — Guide Complet pour Claude Code

## 📍 Contexte Entreprise

**Torquemade** est une agence web solo dirigée par **Loan Rembeau** (Bordeaux, France).

### Services Offerts
1. **Sites web** — Next.js, Shopify, custom builds
2. **CRM sur mesure** — Systèmes de gestion client pour niches spécifiques (concessions motos, boutiques aquariums, etc.)
3. **Connexion ERP ↔ site e-commerce** — Synchronisation d'inventaire en temps réel entre systèmes legacy (SAGE 100, Cegid, Odoo) et storefronts en ligne

### Différenciateur Principal
Torquemade résout la **synchronisation ERP-to-ecommerce** — le problème structurel où l'inventaire en magasin (legacy ERP) est déconnecté du site en ligne. Aucun concurrent établi n'offre cette solution dans les niches cibles.

### Marchés Cibles (Priorité)
1. **Canada** — Boutiques aquariums/coraux (WYSIWYG inventory, multi-channel chaos)
2. **Suisse Romande** (Genève, Lausanne, Neuchâtel)
3. **Belgique/Wallonie** — ERP sync + web dev
4. **USA** — Anglophone, crédibilité client

### Actifs de Démo
- **moto-crm-demo** — Concession moto CRM complet (leads, stock, essais, devis, tâches, dashboard, relances). Showcase pour dealerships.
- **torquemade.com** — Site agence bilingue FR/EN. Portfolio principal.

### Collaborateurs
- **Roman** — Photographe/vidéaste freelance (`roman.fln` Instagram). Shooting de contenu client.
- **Loan** — Développeur solo, vidéo maison (Sony A7IV, `loan.rmb` Instagram).

---

## 🏗️ Stack Technique

```
Next.js 15 (App Router)
TypeScript (strict mode)
Tailwind CSS v3 (light-only, no dark: variants)
Framer Motion v12.40.0 (animations)
shadcn/ui (new-york, neutral)
Prisma 6 (MUST stay v6, v7 removed directUrl support)
Supabase Postgres + Auth + Storage
Vercel (deployment)
GitHub (source control)
```

### Packages Importants
- `@react-pdf/renderer` — Devis/quotes PDF generation (Vercel serverless compatible)
- `@vercel/og` — Dynamic Open Graph images
- `openpyxl` — Excel XLSX generation (prospecting files)
- Framer Motion `useScroll`, `useTransform`, `useSpring` — scroll triggers, animations
- `recharts` — Charts (KPI dashboards)

---

## 🔧 Règles Absolues

### Texte & Traductions
- ❌ JAMAIS hard-coder du texte français ou anglais
- ✅ **TOUTES les chaînes** passent par `lib/strings.ts`
- ✅ **Format obligatoire** : `{ fr: 'texte français', en: 'English text' }`
- ✅ Accéder via `useLang()` hook depuis `@/components/app-provider`

### Design & Styling
- ❌ Pas de couleurs — monochrome noir/blanc STRICT
- ❌ Pas de `dark:` variants (site light-only)
- ❌ Pas de styles inline — **Tailwind + CSS variables uniquement**
- ✅ Variables CSS : `--text-primary`, `--text-secondary`, `--border-subtle`
- ✅ Classes Tailwind neutres : `text-neutral-800`, `bg-neutral-50`, pas de `red-500` ou `blue-600`

### Imports & Structure
```typescript
// ✅ CORRECT
import { useLang } from '@/components/app-provider'
import { NavPill } from '@/components/nav-pill'
import strings from '@/lib/strings'

// ❌ INCORRECT
import { strings } from '@/lib/strings' // destructure => error
import LangContext from '@/utils/lang' // wrong path
import styles from './page.module.css' // no CSS modules
```

### Composants Existants
- **`useLang()`** — Hook global FR/EN. Retourne **directement la string** de langue : `const lang = useLang()` (❌ PAS `const { lang } = useLang()`). Pour le toggle, utiliser `useApp()` qui retourne `{ lang, toggleLang }`.
- **`NavPill`** — Navigation principale (`@/components/nav-pill`)
- **`Footer`** — Pied de page avec liens légaux bilingues
- **CSS variables** — Définies dans `globals.css`, utilisables partout

---

## 📁 Structure Clé

```
torquemade-v2/
├── app/
│   ├── layout.tsx (root avec metadata global)
│   ├── page.tsx (homepage)
│   ├── blog/
│   │   ├── page.tsx (liste articles)
│   │   ├── (articles)/
│   │   │   └── [slug]/
│   │   │       ├── page.tsx (metadata server)
│   │   │       └── _content.tsx (client component, <article> root)
│   ├── services/
│   ├── work/ (portfolio)
│   └── mentions-legales/
├── lib/
│   ├── strings.ts (TOUTES les chaînes FR/EN)
│   ├── blog.ts (exports posts: Post[] array with all article metadata)
│   ├── projects.ts (portfolio data)
│   ├── revalidate.ts (ISR clustering)
│   └── ...
├── components/
│   ├── app-provider.tsx (useLang context)
│   ├── nav-pill.tsx
│   ├── footer.tsx
│   └── ...
├── public/
│   ├── robots.txt
│   └── images/
│       ├── preview-site-*.png
│       ├── preview-erp-*.png
│       └── crm-dashboard-preview.html
├── middleware.ts (query canonicalization, user-agent detection)
├── CLAUDE.md (this file)
└── vercel.json (optional build overrides)
```

---

## 📝 Blog Pattern (CRITIQUE)

### Structure Article
```typescript
// app/blog/(articles)/mon-article/page.tsx
import { Metadata } from 'next'
import { MonarticleContent } from './_content'

export const metadata: Metadata = {
  title: "...",
  description: "...",
  openGraph: { images: [{ url: `/api/og?title=...&category=...` }] }
}

export default function Page() {
  return <MonarticleContent />
}
```

```typescript
// app/blog/(articles)/mon-article/_content.tsx
'use client'

export function MonarticleContent() {
  const lang = useLang() // ✅ string directe, PAS de destructure
  
  return (
    <article className="blog-article">
      {/* ✅ NO <header> wrapper */}
      <h1 className="blog-article-title">Title</h1>
      {/* All blog CSS scoped to .blog-article — paragraphs collapse without it! */}
      <p>Contenu...</p>
    </article>
  )
}
```

### Entrée lib/blog.ts
```typescript
{
  slug: 'mon-article',
  title: { fr: 'Titre FR', en: 'English Title' },
  description: { fr: '...', en: '...' },
  category: 'ERP & Gestion de stock', // Must match existing category
  date: { fr: 'Juin 2026', en: 'June 2026' }, // ✅ Bilingual DATE object
  author: 'Loan Rembeau',
  readTime: 5,
}
```

### CRITIQUES
- ❌ `_content.tsx` MUST root on `<article className="blog-article">` — NEVER fragment `<>...</>`
- ❌ NEVER use inline `style` on `<h1>` — use `.blog-article-title` class
- ❌ `date` MUST be object `{ fr: '...', en: '...' }` — NEVER plain string
- ❌ Categories filtrées dynamiquement depuis `lib/blog.ts` — pas de hardcode

---

## 🔄 Workflow GitHub

### Votre Setup
- **Repo local** : `/Users/loanrembeau/Desktop/torquemade-v2`
- **Accès direct** (pas cloud upload) — Claude Code lit/écrit sur disque
- **Déploiement** : Push GitHub → Vercel redéploie automatiquement
- **Preview** : Chaque PR → Vercel branch preview (accédé via dashboard Deployments tab ou PR bot comment)

### Séquence Impérative
1. ✅ **ÉTAPE 0** — `cd torquemade-v2 && pwd` → lire `CLAUDE.md` → lire fichiers affectés → **RAPPORTER FINDINGS**
2. ✅ Créer feature branch : `git checkout -b feat/mon-feature`
3. ✅ Implémenter changements
4. ✅ `npm run build` — vérifier zéro TypeScript errors
5. ✅ `git add . && git commit -m "feat: description"` → `git push origin feat/mon-feature`
6. ✅ **JAMAIS push sur main directement** — PR systématiquement
7. ✅ Valider sur Vercel branch preview avant merge
8. ✅ Merge PR + supprimer feature branch

### Commandes Critiques
```bash
# Vérifier le build
npm run build

# Lancer dev local
npm run dev # → http://localhost:3000

# Oublier un stash qui traîne sur port 3000
kill -9 $(lsof -t -i:3000) || true

# Lire un fichier AVANT édition (TOUJOURS)
cat lib/blog.ts | head -50

# Vérifier les imports
grep -r "useLang" components/ | head -5
```

---

## 🎨 Design Constraints

### Couleurs
- **Fond** : `#ffffff` (blanc) ou `var(--bg-primary)`
- **Texte principal** : `var(--text-primary)` (noir/gris sombre)
- **Texte secondaire** : `var(--text-secondary)` (gris moyen)
- **Bordures** : `var(--border-subtle)` (gris très clair)
- ❌ Jamais : `text-red-500`, `bg-blue-100`, `dark:bg-slate-900`

### Typographie
- Reference design : **usedropshot.com** (minimaliste, épuré)
- Pas de couleurs sur texte — highlight via weight ou italique uniquement
- Animations : Framer Motion avec easing `easeInOut`, durée 200-400ms par défaut
- Gradients animés : réservés aux CTA buttons (effet glass)

### Mobile-First
- `md:` prefix pour desktop changes — pas `max-md:` par défaut
- Padding mobile : `px-4 py-6` (standard)
- Images : lazy-load avec `loading="lazy"`, fill parent avec `w-full`

---

## 🌍 Bilingual Patterns

### Dans `lib/strings.ts`
```typescript
export const strings = {
  hero: {
    title: {
      fr: 'On ne construit pas de sites vitrines.',
      en: 'We don\'t build showcase websites.'
    },
    cta: {
      fr: 'Parlons de votre projet',
      en: 'Let\'s talk about your project'
    }
  },
  services: {
    webdev: {
      fr: 'Sites web',
      en: 'Websites'
    }
  },
  // ...
}
```

### Dans Components
```typescript
'use client'

import { useLang } from '@/components/app-provider'
import strings from '@/lib/strings'

export function Hero() {
  const lang = useLang() // ✅ string directe, PAS de destructure
  
  return (
    <div>
      <h1>{strings.hero.title[lang]}</h1>
      <button>{strings.hero.cta[lang]}</button>
    </div>
  )
}
```

### Métadonnées (page.tsx)
```typescript
import { metadata as baseMetadata } from '@/app/layout'

export const metadata: Metadata = {
  title: 'Titre FR | Torquemade', // Métadonnées restent EN par défaut pour SEO existant
  description: 'Description EN...',
  // Les toggles côté client changent <html lang> + strings affichées
}
```

---

## 🔍 SEO & Sitemap

### Sitemap Auto-Généré
- `app/sitemap.ts` — fonction `MetadataRoute.Sitemap` exportée
- Inclut homepage, services, blog articles, pages statiques
- Chaque post nécessite `lastModified` (ISO date) et `priority` (0.1-1.0)
- **Vercel redéploie sitemap à chaque push** — aucune action manuelle

### Metadata Globales
```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: 'Torquemade | Web Dev, CRM sur mesure & ERP Sync',
  description: 'Agence web spécialisée en Next.js, CRM, et synchronisation ERP↔ecommerce.',
  openGraph: {
    url: 'https://torquemade.com',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  }
}
```

---

## 🛠️ Patterns Récurrents

### Vérifier un fichier AVANT modification
```bash
# ÉTAPE 0 de CHAQUE prompt Claude Code
cat app/page.tsx | grep -A5 "export const metadata"
```

### Ajouter une chaîne bilingue
```typescript
// lib/strings.ts
export const strings = {
  // ... existing
  newSection: {
    heading: {
      fr: 'Nouveau titre',
      en: 'New heading'
    }
  }
}

// Dans composant
const { heading } = strings.newSection
<h2>{heading[lang]}</h2>
```

### Créer article blog
1. Créer dossier `app/blog/(articles)/mon-slug/`
2. Créer `page.tsx` + `_content.tsx`
3. Ajouter entrée `lib/blog.ts` (date format `{ fr: '...', en: '...' }`)
4. Vercel redéploie sitemap automatiquement

### Déployer changement
```bash
git checkout -b feat/description-courte
# ... edits
npm run build
git add . && git commit -m "feat: description"
git push origin feat/description-courte
# Créer PR via GitHub — pas via CLI
# Valider sur Vercel preview
# Merge + supprimer branch
```

---

## ⚠️ Pièges Fréquents

| ❌ Erreur | ✅ Solution |
|-----------|-----------|
| `_content.tsx` avec fragment `<>` | Root sur `<article className="blog-article">` |
| `date: 'Juin 2026'` (string) | `date: { fr: 'Juin 2026', en: 'June 2026' }` |
| Inline `style={{ color: 'red' }}` | Utiliser Tailwind class ou CSS variable |
| Push direct sur main | Feature branch + PR obligatoire |
| Oublier `npm run build` avant commit | Build TOUJOURS avant push |
| Port 3000 occupé (stale process) | `kill -9 $(lsof -t -i:3000)` |
| Importer wrong strings path | `import strings from '@/lib/strings'` (pas destructure) |
| `dark:text-white` sur site light-only | Supprimer tous les `dark:` variants |
| Metadata export oublié dans page.tsx | Export TOUTES les pages avec metadata |

---

## 📊 Fichiers Clés à Connaître

| Fichier | Rôle |
|---------|------|
| `lib/strings.ts` | Centre de vérité pour TOUT texte FR/EN |
| `lib/blog.ts` | Meta + contenu articles (slug, title, date, category) |
| `lib/projects.ts` | Portfolio projects (url, description) |
| `components/app-provider.tsx` | `useLang()` hook + Context |
| `app/layout.tsx` | Metadata globales + NavPill + Footer |
| `middleware.ts` | Query canonicalization, user-agent detection |
| `app/sitemap.ts` | Sitemap auto-généré |
| `public/robots.txt` | Crawl rules |
| `CLAUDE.md` | Ce fichier (lire avant CHAQUE prompt) |

---

## 🚀 Avant de Commencer Chaque Prompt

```bash
# 1. Vérifier working directory
pwd  # Should output /Users/loanrembeau/Desktop/torquemade-v2

# 2. Lire ce fichier
cat CLAUDE.md | grep -A10 "Règles Absolues"

# 3. Lire les fichiers affectés (ÉTAPE 0)
cat lib/strings.ts | head -30
cat app/blog/page.tsx
# etc.

# 4. Rapporter ce que vous avez trouvé
# "✅ strings.ts exists, 285 keys. ✅ Blog 18 articles. ❌ nav-pill import missing in X"

# 5. Implémenter uniquement si ÉTAPE 0 clear
```

---

## Questions?

Relisez cette doc avant de demander. 90% des réponses y sont.