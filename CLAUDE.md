# Torquemade v2 — Instructions pour Claude Code

## Stack
- Next.js 15 (App Router)
- TypeScript strict
- Tailwind CSS v3
- Déployé sur Vercel depuis GitHub

## Règles absolues
- Ne jamais hard-coder du texte — toutes les chaînes passent par `lib/strings.ts`
- Toujours fournir la traduction FR ET EN dans lib/strings.ts
- Respecter l'esthétique monochrome noir/blanc stricte — aucune couleur
- Tailwind uniquement — pas de styles inline
- Vérifier que le build ne casse pas après chaque modification

## Structure clé
- `lib/strings.ts` — toutes les chaînes de texte bilingues FR/EN
- `lib/projects.ts` — données des projets
- `components/nav-pill.tsx` — navigation principale
- `components/work-grid.tsx` — grille projets
- `app/page.tsx` — page d'accueil

## Workflow GitHub
- Le client n'a pas de repo local
- Toutes les modifications sont uploadées directement sur GitHub
- Vercel redéploie automatiquement à chaque push
- Fournir chaque fichier modifié en entier, prêt à uploader

## Langue
- Site bilingue FR (défaut) / EN
- Le toggle langue est déjà implémenté
- Chaque nouvelle chaîne doit avoir sa clé dans strings.ts avec fr et en
