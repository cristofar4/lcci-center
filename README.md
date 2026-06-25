# LCCI Conference and Exhibition Centre

The official digital platform for **LCCI Conference and Exhibition Centre**, the
premier destination for conferences, exhibitions, trade fairs, business summits
and corporate events in Lagos, Nigeria.

An award calibre, immersive venue platform built with a corporate luxury
aesthetic: deep navy and charcoal tones, champagne gold accents, elegant
editorial typography, glass morphism and cinematic motion.

> Creative direction, design system, brand direction, animation strategy and
> page wireframes are documented in [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md).

## Tech Stack

| Concern            | Technology                                   |
| ------------------ | -------------------------------------------- |
| Framework          | Next.js 15 (App Router) + TypeScript         |
| Styling            | Tailwind CSS with a custom design system     |
| UI primitives      | Shadcn style components, CVA, lucide icons   |
| Scroll animation   | GSAP + ScrollTrigger                         |
| Interface motion   | Framer Motion                                |
| Smooth scroll      | Lenis                                        |
| 3D and particles   | Three.js + React Three Fiber + drei          |
| Fonts              | Fraunces and Manrope, self hosted            |

## Highlights

- **Cinematic hero** with a layered image and video background, ambient gold
  particle field, animated typography and interactive venue highlights.
- **Interactive venue explorer** with capacities, amenities and generated floor
  plans, plus a live 3D model of the campus you can orbit.
- **Pinned storytelling** for the event planning process using GSAP scrub.
- **Multi step booking experience** with a live summary rail.
- **Masonry gallery** with category filtering and a full screen lightbox.
- **Counters, text reveals, image reveals, parallax and stagger** throughout.
- Fully **responsive, accessible** (keyboard, reduced motion, focus rings) and
  **SEO ready** (metadata, Open Graph, JSON-LD, sitemap, robots, manifest).

## Pages

Home · The Centre (About) · Venues · Events · Exhibitions · Gallery · Services ·
Book a Venue · Contact

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Project Structure

```
src/
  app/                 Routes, metadata, sitemap, robots, manifest
  components/
    anim/              Reveal, SplitText, Parallax, Counter, Magnetic, Marquee
    layout/            Navbar, fullscreen menu, footer, scroll progress, logo
    providers/         Lenis smooth scroll, page transitions
    sections/          Page sections and the booking wizard
    three/             Particle field and 3D venue scene (code split)
    ui/                Button, SmartImage, FloorPlan, SectionHeading
  fonts/               Self hosted variable fonts
  lib/                 Site config, content data, imagery, utils, gsap setup
```

## A Note on Media

Photography is served from Unsplash and loads directly in the visitor's browser,
so real images appear on any standard deployment. Every image is wrapped in a
`SmartImage` component that degrades gracefully to a branded gradient if a source
is ever unavailable, so the experience never breaks. To use owned media, drop
files into `public/` and point the ids in `src/lib/images.ts` at them.

## Performance and Accessibility

- Three.js scenes are dynamically imported and excluded from the shared bundle.
- All animation honours `prefers-reduced-motion`.
- Semantic landmarks, skip link, visible gold focus states and AA contrast.
- Self hosted fonts with `display: swap` and no render blocking external calls.
