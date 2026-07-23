# TankLogic — Design Token Reference

Extracted directly from source, no approximations. Sources:
- [app/tanklogic/_mocks.tsx](../app/tanklogic/_mocks.tsx) — the card/inventory mock UIs (`Window`, `Badge`, `Thumb`, `MonoId`, `SearchIcon`, table rows)
- [app/globals.css](../app/globals.css) — CSS variable tokens, `.btn-liquid-glass` / `.tanklogic-glass-modal` gradient definitions
- [tailwind.config.ts](../tailwind.config.ts) — resolved font-size/line-height scale, shadow values, screen breakpoints

Explicitly **out of scope** (not extracted here): `.btn-liquid-glass`, `.tanklogic-glass-modal`, `.btn-outline-glass`, and any CTA gradient.

---

## TYPOGRAPHY

### Font families in play — exactly two, inside `_mocks.tsx`
`app/tanklogic/_mocks.tsx` uses only two type treatments. `font-mono` (Geist Mono) does **not** appear anywhere in this file anymore — it was fully replaced in a follow-up pass. (Geist Mono is still defined site-wide in `tailwind.config.ts` and used elsewhere in the codebase; this doc is scoped to the TankLogic mocks only.)

```css
/* tailwind.config.ts → theme.extend.fontFamily */
sans: var(--font-geist-sans), system-ui, sans-serif   /* Geist Sans, via next/font `geist` package — the implicit default, unset explicitly anywhere in _mocks.tsx */
```
`--font-geist-sans` is injected on `<html>` in `app/layout.tsx`. Body default (`app/globals.css:82`): `font-family: var(--font-geist-sans), system-ui, sans-serif;`.

1. **Default (`font-sans` / Geist Sans, implicit — no explicit class)** — titles, specimen/product/order names, and prose subtitles. E.g. the `Window` title bar, "Acropora tenuis", "« Blue Sky » · SPS · Frag 4 cm", `MortalityMock`'s reason value, section `<h2>`s.
2. **`font-['Helvetica'] font-light`** (weight 300) — every other piece of chrome text: all numeric/ID/price/size values, every small-caps label, every timestamp, every `Window` tag. Helvetica is a system font, not loaded via `next/font` — there is no licensed web-font package for it. The browser falls back to its own default sans-serif stack (typically Helvetica Neue / Arial) if Helvetica isn't installed. Do not attempt to install or import a Helvetica web-font package.

### `font-['Helvetica'] font-light` — every instance (24 total)
Font-size, letter-spacing, `tabular-nums`, uppercase, and text color are unchanged from their pre-Helvetica state on every row below — this was strictly a typeface + weight substitution (`font-mono` 400 → `font-['Helvetica'] font-light` 300). Where an element previously carried an explicit weight class (`font-medium`), that class was removed in favor of the uniform `font-light`; where it had no weight class at all (mono's implicit 400), `font-light` was added explicitly.

| Element | Location | Classes |
|---|---|---|
| `Window` top-right `tag` (e.g. "Inventory", "One of a kind", "SKU", "POS", "03") | `_mocks.tsx:280` | `font-['Helvetica'] font-light text-[10px] uppercase tracking-[0.14em] text-[#8a8a8e]` |
| `MonoId` (shared component — specimen IDs) | `_mocks.tsx:350` | `font-['Helvetica'] font-light text-[11px] tracking-[0.03em] text-[#8a8a8e]` |
| Table column-header row ("Specimen / ID / Size / Price / Status") | `_mocks.tsx:395` | `font-['Helvetica'] font-light text-[10px] uppercase tracking-[0.12em] text-[#a0a0a4]` |
| Mobile ID fallback (`HeroInventoryMock` row, `min-720:hidden`) | `_mocks.tsx:420` | `font-['Helvetica'] font-light` |
| Table row size (`HeroInventoryMock`) | `_mocks.tsx:427` | `font-['Helvetica'] font-light text-[12px] text-[#616161]` |
| Table row price (`HeroInventoryMock`) | `_mocks.tsx:428` | `font-['Helvetica'] font-light text-[12.5px] tabular-nums text-[#1a1a1a]` |
| Photo-overlay ID pill (`SpecimenCardMock`) | `_mocks.tsx:513` | `font-['Helvetica'] font-light text-[10px] tracking-[0.08em] text-[#616161]` |
| Specimen-card price (`SpecimenCardMock`) | `_mocks.tsx:525` | `font-['Helvetica'] font-light text-[15px] tabular-nums` |
| `SpecimenCardMock` meta-row label ("Arrival", "Tank", "Batch", "Zone") | `_mocks.tsx:534` | `font-['Helvetica'] font-light text-[10px] uppercase tracking-[0.12em] text-[#a0a0a4]` |
| POS panel price (`SyncMock`) | `_mocks.tsx:604` | `font-['Helvetica'] font-light text-[12.5px] tabular-nums` |
| POS sale-line price (`SyncMock`) | `_mocks.tsx:618` | `font-['Helvetica'] font-light tabular-nums` |
| Sync connector label ("sync…" / "synced", `SyncMock`) | `_mocks.tsx:626` | `font-['Helvetica'] font-light text-[10px] uppercase tracking-[0.14em] text-text-tertiary` |
| `MortalityMock` reason label ("Reason") | `_mocks.tsx:730` | `font-['Helvetica'] font-light text-[10px] uppercase tracking-[0.12em] text-[#a0a0a4]` |
| `MortalityMock` timestamp (e.g. "Today · 08:12") | `_mocks.tsx:733` | `font-['Helvetica'] font-light text-[11px] tabular-nums text-[#8a8a8e]` |
| `TraceMock` step timestamp (e.g. "May 12 · 14:02") | `_mocks.tsx:801` | `font-['Helvetica'] font-light text-[10.5px] tabular-nums text-[#a0a0a4]` |
| `TraceMock` photo filename ("IMG_2841.jpg") | `_mocks.tsx:812` | `font-['Helvetica'] font-light text-[10.5px] text-[#8a8a8e]` |
| "Order · Customer · Specimens" header (`OrdersMock`) | `_mocks.tsx:849` | `font-['Helvetica'] font-light text-[10px] uppercase tracking-[0.12em] text-[#a0a0a4]` |
| Order number (`OrdersMock`, e.g. "#1042") | `_mocks.tsx:866` | `font-['Helvetica'] font-light text-[12px] tabular-nums text-[#1a1a1a]` |
| `OrdersMock` specimen-ID chip (e.g. "ACRO-0042") | `_mocks.tsx:871` | `font-['Helvetica'] font-light text-[10px] text-[#8a8a8e]` |
| Order total (`OrdersMock`) | `_mocks.tsx:878` | `font-['Helvetica'] font-light text-[12.5px] tabular-nums text-[#1a1a1a]` |
| `BarRow` value (`AnalyticsMock` — supplier % / best-seller count) | `_mocks.tsx:909` | `font-['Helvetica'] font-light text-[11.5px] tabular-nums text-[#1a1a1a]` |
| KPI tile labels, e.g. "DOA rate · 30 d" (`AnalyticsMock`) | `_mocks.tsx:938` | `font-['Helvetica'] font-light text-[9.5px] uppercase leading-snug tracking-[0.1em] text-[#a0a0a4] min-720:text-[10px]` |
| "Mortality by supplier · 90 d" (`AnalyticsMock`) | `_mocks.tsx:950` | `font-['Helvetica'] font-light text-[10px] uppercase tracking-[0.12em] text-[#a0a0a4]` |
| "Best sellers · 90 d" (`AnalyticsMock`) | `_mocks.tsx:962` | `font-['Helvetica'] font-light text-[10px] uppercase tracking-[0.12em] text-[#a0a0a4]` |

**Notes on weight normalization:**
- The SpecimenCard price and the `OrdersMock` order number both previously carried `font-medium`; that class was removed so the whole group renders at a single uniform `font-light` (300).
- The sync connector label (`_mocks.tsx:626`) is the one row in this table whose color is a Tailwind CSS-var token (`text-text-tertiary`) rather than a literal hex — left as-is, only the typeface/weight changed.

No row in this table is exempt from the Helvetica conversion — every previous `font-mono` instance in `_mocks.tsx` (labels, IDs, prices, sizes, timestamps, tags) now uses `font-['Helvetica'] font-light`.

### Type scale (resolved from `tailwind.config.ts → theme.extend.fontSize`, page-level headings/paragraphs — unaffected by this change)
| Utility | font-size | line-height | letter-spacing | font-weight |
|---|---|---|---|---|
| `text-title-1` | `clamp(40px,6vw,56px)` | `1.05` | `-0.6px` | `650` |
| `text-title-2` | `clamp(28px,4vw,40px)` | `1.1` | `-0.4px` | `600` |
| `text-headline` | `20px` | `1.4` | — | `600` |
| `text-body-lg` | `18px` | `28px` | — | inherited (400) |
| `text-body` | `16px` | `22px` | `0.15px` | inherited (400) |
| `text-caption` | `13px` | `1.4` | `0.2px` | inherited |

### Font weights by element type (unaffected elements)
- **Titles** (`<h1>`/`<h2>`): `font-semibold`.
- **Window title bar** (`_mocks.tsx:284`): `text-[13px] font-semibold tracking-tight`.
- **Specimen/order names**: `font-medium`, `tracking-tight`.
- **Body copy**: inherits `400` from base `body {}` rule.

---

## COLORS

### Page-level CSS variable tokens (`app/globals.css:9-18`, light mode — site is light-only)
| Variable | HSL value | Hex equivalent |
|---|---|---|
| `--bg-primary` | `0 0% 91%` | `#e8e8e8` |
| `--bg-secondary` | `0 0% 87%` | `#dedede` |
| `--bg-tertiary` | `0 0% 83%` | `#d4d4d4` |
| `--bg-inverse` | `0 0% 8%` | `#141414` |
| `--text-primary` | `0 0% 8%` | `#141414` |
| `--text-secondary` | `0 0% 40%` | `#666666` |
| `--text-tertiary` | `0 0% 53%` | `#878787` |
| `--border-subtle` | `0 0% 25% / 8%` | `rgba(64,64,64,0.08)` |

**Important distinction:** the `Window`/`Badge`/`Thumb` mock components in `_mocks.tsx` are deliberately fixed-light hex values (documented in the file header comment), independent of the `--bg-*`/`--text-*` variables above — they render like a literal product screenshot regardless of site theme.

### Mock-UI (`Window` component) colors — literal hex, not CSS vars
| Role | Hex | Where |
|---|---|---|
| Card/window background | `#ffffff` | `Window` root: `bg-white` |
| Card border | `#e4e4e6` | `Window` root: `border border-[#e4e4e6]`, 1px |
| Card header/footer strip background | `#fafafa` | `Window` header + footer, toolbar/column-header rows |
| Card header/footer border | `#ececee` | `Window` header `border-b`, footer `border-t` |
| Row divider (subtler) | `#f2f2f3` | Table row `border-b`, meta-row `border-t`, order-row `border-b` |
| Row divider (subtlest) | `#f7f7f8` | `SpecimenCardMock` meta-row inner divider |
| Primary text (near-black) | `#1a1a1a` | Specimen/product names, values, `Badge` "reserved" text |
| Solid button/badge fill (near-black, not pure black) | `#161616` | `Badge` stock/sold fill, "+ New specimen" pill, "+ New order" pill, mortality one-click button |
| Secondary/meta text | `#616161` | `Window` footer text, sync-connector default state, order client name |
| Tertiary/label text | `#8a8a8e` | Variant subtitle text, `MonoId`, badge "shipped" text |
| Quaternary/placeholder text | `#a0a0a4` | Search placeholder, column headers, uppercase small-caps labels, disabled-state text |
| Border-gray (outline badges / muted borders) | `#c9c9cc` | `Badge` "reserved" border, "removed" dashed border, timeline dot border |
| Live-sync pulse dot | `#4ade80` (green-400) | `LiveDot`: glow `box-shadow: 0 0 6px 1px rgba(74,222,128,0.5)` — the one sanctioned color accent, per file header comment |
| Muted-fill badge background | `#f0f0f1` | `Badge` "shipped" fill, order-status "delivered" muted fill |

### Photo-area / thumbnail gradients (neutral, decorative — not CTA gradients)
```css
linear-gradient(135deg, #f4f4f5 0%, #e8e8ea 100%)   /* Thumb, 32px default */
linear-gradient(135deg, #f6f6f7 0%, #e9e9eb 100%)   /* SpecimenCardMock photo backdrop */
linear-gradient(135deg, #f4f4f5, #e8e8ea)           /* TraceMock photo-evidence chip */
```

### Badge colors — full breakdown
| Status | Fill | Border | Text |
|---|---|---|---|
| **In stock** (`stock`) | `#161616` (solid) | `#161616` 1px | `#ffffff` |
| **Sold** (`sold`) | `#161616` (solid) | `#161616` 1px | `#ffffff` |
| **Reserved** (`reserved`) | `#ffffff` | `#c9c9cc` 1px solid | `#1a1a1a` |
| **Shipped** (`shipped`) | `#f0f0f1` (muted fill) | `#f0f0f1` 1px (invisible) | `#616161` |
| **Removed** (`removed`) | `#ffffff` | `#c9c9cc` 1px **dashed** | `#8a8a8e` |

`FilledBadge` reuses the exact `stock`/`sold` recipe. Order-status pills (`OrdersMock`) follow the same three-state pattern, locally defined.

---

## LAYOUT / COMPONENTS

### Border-radius
| Element | Utility | Resolved px |
|---|---|---|
| `Window` card (all mocks) | `rounded-2xl` | `16px` |
| KPI tile / analytics cards | `rounded-2xl` | `16px` |
| Search bar / toolbar pill | `rounded-lg` | `8px` |
| Mortality one-click button | `rounded-xl` | `12px` |
| Mortality log-entry panel | `rounded-xl` | `12px` |
| Order-ID chip | `rounded-md` | `6px` |
| `Thumb` emoji tile | `rounded-[7px]` (arbitrary) | `7px` |
| Trace photo-evidence chip inner tile | `rounded-[5px]` (arbitrary) | `5px` |
| Trace photo-evidence outer chip | `rounded-lg` | `8px` |

### Card box-shadow (`tailwind.config.ts → theme.extend.boxShadow`)
```css
shadow-card:       0 1px 2px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.06)
shadow-card-hover: 0 2px 4px rgba(0,0,0,0.06), 0 12px 28px rgba(0,0,0,0.10)
```
`Window` uses `shadow-card` by default; `HeroInventoryMock` overrides to `shadow-card-hover`.

### Window header bar (`_mocks.tsx:259`, shared chrome for all product mocks)
```jsx
<header className="flex items-center justify-between border-b border-[#ececee] bg-[#fafafa] px-4 py-3">
  <span className="min-w-0 truncate text-[13px] font-semibold tracking-tight">{title}</span>
  {tag && <span className="ml-3 flex-shrink-0 font-['Helvetica'] font-light text-[10px] uppercase tracking-[0.14em] text-[#8a8a8e]">{tag}</span>}
</header>
```
- Title sits flush left against the header's `px-4` padding — no leading icon or dot cluster.
- Right-side `tag` (optional): `ml-3` (12px) gap from the title's truncation boundary, `font-['Helvetica'] font-light`.
- Used identically by all 7 `Window` instances: `HeroInventoryMock`, `SpecimenCardMock`, `SyncMock` (×2 — POS + online-store panels), `MortalityMock`, `TraceMock`, `OrdersMock`. `AnalyticsMock` does not use `Window`.

### Card internal padding / table row spacing
| Zone | Padding |
|---|---|
| `Window` header (title bar) | `px-4 py-3` |
| `Window` footer (sync status) | `px-4 py-2.5` |
| Toolbar row (search + add button) | `px-4 py-2.5` |
| Column-header row | `px-4 py-2` |
| Table data row (`HeroInventoryMock`) | `px-4 py-2.5` |
| `SpecimenCardMock` identity block | `px-4 pb-3 pt-3.5` |
| `SpecimenCardMock` meta-row block | `px-4 py-3`, each row `py-1.5` |
| `OrdersMock` header row | `px-4 py-2.5` |
| `OrdersMock` order row | `px-4 py-3` |
| `MortalityMock` body | `px-4 py-4` |
| `TraceMock` timeline list | `px-4 py-4` |
| `AnalyticsMock` KPI tile | `px-4 py-3.5` → `min-720:px-5 min-720:py-4` |

Row gap between grid columns: `gap-3` (12px) throughout table/list rows; `gap-2.5` (10px) for icon+text clusters.

### Search input style (`HeroInventoryMock` toolbar)
```jsx
<span className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-[#ececee] bg-[#fafafa] px-3 py-1.5 text-[12px] text-[#a0a0a4]">
  <SearchIcon />
  <span className="truncate">{searchPlaceholder}</span>
</span>
```
- Border: `1px solid #ececee`; radius `rounded-lg` (8px); background `#fafafa`; padding `px-3 py-1.5`.
- Icon: `12×12px`, `strokeWidth="2"`, `currentColor` (= `#a0a0a4`); gap to placeholder `gap-2` (8px).

---

## Build check

`npm run build` — TypeScript compiles and type-checks cleanly. The build then fails at static page-data collection for `/api/contact` with `Missing API key. Pass it to the constructor new Resend("re_123")` — this is a pre-existing, unrelated environment issue (missing `RESEND_API_KEY`), not caused by this change.
