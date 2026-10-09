# FUNKYY APPS — redesigned site

A full rebuild of funkyyapps.com with the same content and a new interface.

**Stack:** Vite 6 · React 19 · TypeScript · Tailwind CSS v4 · Motion (Framer Motion) · Lenis smooth scroll · React Router 7 · Lucide icons · self-hosted variable fonts (Unbounded + Hanken Grotesk via Fontsource).

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # static build in dist/ — upload anywhere (Vercel, Netlify, cPanel, S3)
```

## Pages (all 16 from the live site)

Home · About · SEO Services · Paid Social Media · PPC Services · Website Development · Mobile App Development · Shop · FAQ's · Consult · Terms & Conditions · Logo / Web / App / Content Questionnaires.

All copy lives in `src/data/` (`site.ts`, `services.ts`, `pages.ts`) — edit text there, not in components.

## Where each UI library shows up

The components are re-implemented in `src/components/fx/` (no paid code copied), each file names its inspiration:

| Library | Used as |
|---|---|
| **Magic UI** | `Marquee` (testimonials, capability bands, footer packages), `NumberTicker` (stats), `BorderBeam` (Gold plan), `ShimmerButton` (all CTAs) |
| **SmoothUI** | Dynamic-island `Nav`, `AnimatedTabs` (service tabs, SEO types, tech stack) |
| **Skiper UI** | `StickerTrail` cursor trail in the hero, `StackedCards` pricing stack, dynamic-island nav |
| **unlumen UI** | `PixelLiquid` hero background, `Accordion` (FAQs), `TiltCard`, `OrbitalWheel` (platforms), `HoverExpand` (industries), `Dock` (floating contact dock), hover list on Mobile page |
| **Vengeance UI** | `MorphText` flip text in hero, `Rays` behind page headers, staggered sticker grid (Mobile industries) |
| **Animmaster** | `ScrollReveal` text, `HorizontalScroll` portfolio gallery, orange curtain page transition |
| **vividsites / draftly / motionsites** | AI site builders — used as reference for the motion-led hero and section rhythm |

## Before going live — checklist

1. **Forms** — set `FORM_ENDPOINT` in `src/lib/forms.ts` (Formspree, Web3Forms, Supabase function…). Until then every form tells visitors to email/WhatsApp instead of pretending to send.
2. **PayPal** — paste checkout links into `paypal` in `src/data/site.ts`. Without them "Shop Now" opens WhatsApp with a pre-filled message.
3. **Portfolio images** — download the screenshots listed in `portfolio` (`src/data/services.ts`) into `public/portfolio/` and switch to relative paths.
4. **Copy to review** (kept exactly as on the live site):
   - Paid Social FAQ mentions **"WebFX"** three times; PPC FAQ mentions **"ADS"** and a "Digital Marketing Guide" — leftovers from another agency's copy.
   - Home says "over 7 years", About says "6 Years of Excellence".
   - Consult page says $250 for a 30-minute call; the old popup form said $500.
5. **Clean URLs** — the app uses `HashRouter` so it works on any static host. On Vercel/Netlify switch to `BrowserRouter` and add a rewrite to `index.html`.
