# Torquemade v2

Portfolio + studio website — Next.js 15, Tailwind CSS v3, Geist font.

## Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v3 + CSS variables (Mobbin-inspired design system)
- **Font**: Geist (Vercel) via `geist` package
- **Language toggle**: FR 🇫🇷 / EN 🇬🇧 (React context, localStorage persisted)
- **Dark mode**: class-based (`html.dark`), localStorage persisted
- **Animations**: CSS `fade-up` + IntersectionObserver (no GSAP/Framer)
- **Form**: Formspree (replace `YOUR_FORM_ID` in `components/contact-form.tsx`)

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open http://localhost:3000
```

## Images to add

Copy these files to `public/images/`:

| File | Source |
|------|--------|
| `bdxride-app-1.png` | bordeauxride.app screenshot (booking flow) |
| `bdxride-app-2.png` | bordeauxride.app screenshot (fixed pricing) |
| `bdxride-app-3.png` | bordeauxride.app screenshot (admin dashboard) |

The sprint motors, motopassion, and spicy beauty images are loaded
directly from their live URLs (configured in `next.config.ts`).

## Formspree setup

1. Go to https://formspree.io and create a free form
2. Copy your form ID (e.g. `xjkvblnz`)
3. In `components/contact-form.tsx`, replace `YOUR_FORM_ID`:
   ```ts
   const res = await fetch('https://formspree.io/f/xjkvblnz', ...)
   ```

## Client logos (marquee)

Edit `components/marquee.tsx` → `TECH_STACK` array to add/remove stack items
or replace with client logos once you have SVGs.

## Adding projects

Edit `lib/projects.ts` to add new cases. Each project has:
- `tags`: `'web' | 'seo' | 'logiciel'` (determines which filter shows it)
- `headline`, `description`, `outcomes`: bilingual `{ fr, en }`
- `featured: true` to appear on the homepage work preview

## Deploy

```bash
# Build check
npm run build

# Push to GitHub → auto-deploys on Vercel
git init
git add .
git commit -m "init: torquemade v2"
git remote add origin YOUR_REPO_URL
git push -u origin main
```

## File structure

```
app/
  layout.tsx          Root layout (Geist font, AppProvider)
  globals.css         CSS variables (light + dark tokens)
  page.tsx            Landing (Mobbin style)
  work/page.tsx       Work listing (Trajectory style)
  about/page.tsx      About page
  contact/page.tsx    Contact form

components/
  app-provider.tsx    Lang + theme context
  nav-pill.tsx        Floating nav (glassmorphism)
  footer.tsx          Dark footer (peel reveal effect)
  marquee.tsx         Horizontal scrolling tech stack
  work-grid.tsx       Filterable project cards
  contact-form.tsx    Contact form (Formspree)

lib/
  strings.ts          All FR + EN copy
  projects.ts         All project data
  use-scroll-reveal.ts IntersectionObserver hook
```
