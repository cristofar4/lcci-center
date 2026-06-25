# LCCI Conference and Exhibition Centre — Design System & Creative Direction

> The official digital home of Nigeria's premier conference and exhibition destination.
> Corporate luxury. Engineered prestige. Built for scale.

---

## 1. Brand Direction

**Positioning.** LCCI Conference and Exhibition Centre is the flagship venue for
conferences, exhibitions, trade fairs, business summits, corporate meetings,
product launches, training programs and executive gatherings in Lagos, Nigeria.
The platform must read like the digital flagship of a global convention center,
not a local event hall.

**Personality.** Authoritative, prestigious, precise, warm, forward looking.
We speak the language of business leaders and global organisers.

**Voice.** Confident and editorial. Short, declarative sentences. We avoid
hyphenated constructions and keep copy clean and modern.

**Brand pillars.**
1. Scale — the largest, most flexible event canvas in the region.
2. Excellence — flawless execution and white glove service.
3. Innovation — modern infrastructure and technology forward spaces.
4. Connection — where industries, ideas and people converge.

---

## 2. Colour System

A deep, cinematic palette of midnight navy and charcoal, lifted by champagne gold.

| Token            | Hex       | Use                                            |
| ---------------- | --------- | ---------------------------------------------- |
| `ink.950`        | `#05070D` | Deepest background, footer, hero base          |
| `ink.900`        | `#0A0E1A` | Primary background                             |
| `ink.800`        | `#0F1421` | Elevated background                            |
| `charcoal.800`   | `#13161C` | Cards, panels                                  |
| `charcoal.700`   | `#1B202B` | Borders, dividers, hover surfaces              |
| `gold.300`       | `#E7CE97` | Light gold, highlights                         |
| `gold.400`       | `#D6B26B` | Primary gold accent                            |
| `gold.500`       | `#C9A24B` | Gold buttons, key strokes                      |
| `gold.600`       | `#A9863A` | Pressed gold                                   |
| `ivory`          | `#F4F1E9` | Primary text on dark                           |
| `mist`           | `#A9B0BE` | Secondary text                                 |
| `slate`          | `#6B7385` | Muted text, captions                           |

Gradients: champagne gold sweep (`gold.300 → gold.500`), and atmospheric navy
radial glows behind hero and section transitions. Glass morphism panels use a
6 to 10 percent white fill with a 1px hairline border and backdrop blur.

---

## 3. Typography

- **Display / Editorial:** Fraunces Variable (self hosted). Optical serif used
  for hero statements, section titles and large numerals. Tight tracking, high
  contrast, occasional italic for emphasis.
- **Interface / Body:** Manrope Variable (self hosted). Clean geometric grotesk
  for navigation, body copy, labels and UI.
- **Eyebrows / Kickers:** Manrope, uppercase, 0.3em tracking, gold or mist.

Type scale (fluid, `clamp`):
`display` 64 to 132px · `h1` 44 to 88px · `h2` 32 to 56px · `h3` 24 to 32px ·
`body` 16 to 18px · `small` 13 to 14px · `eyebrow` 12 to 13px.

---

## 4. Layout & Spacing

- 12 column grid, max content width 1320px, generous gutters.
- Section rhythm: 120 to 200px vertical padding on desktop.
- Outstanding whitespace. Content breathes. Nothing is crowded.
- Radii: cards 18 to 24px, buttons 9999px (pill) or 12px.
- Elevation through light, blur and hairline borders rather than heavy shadows.

---

## 5. Animation Strategy

Motion is choreographed, never decorative noise. Everything eases with custom
cubic curves. Smooth scrolling via Lenis ties the whole experience together.

**GSAP + ScrollTrigger**
- Text reveal: masked line by line and word by word rise on enter.
- Image reveal: clip path wipe plus subtle scale settle.
- Parallax: layered depth on imagery and decorative marks.
- Pinned storytelling: pinned sequences for the planning process and venues.
- Counters: statistics count up when in view.
- Stagger: cards, list items and gallery tiles cascade in.

**Framer Motion**
- Page transitions, full screen menu choreography.
- Micro interactions, magnetic and hover states, button fills.
- Layout transitions on filters and the booking stepper.

**Three.js / React Three Fiber**
- Ambient gold particle field behind the hero and CTA.
- Interactive 3D venue volume on the venues experience.
- Subtle depth and pointer parallax. Always performance budgeted.

Easing: `[0.16, 1, 0.3, 1]` (expo out) for entrances, `[0.7, 0, 0.3, 1]` for
transforms. Durations 0.6 to 1.2s for hero, 0.4 to 0.8s for UI.

Reduced motion: all of the above collapse to instant, accessible states when
`prefers-reduced-motion` is set.

---

## 6. Page Wireframes

**Home** — Cinematic hero (video + 3D particles, no scroll cue) → trusted by
marquee → statistics counters → why choose (pinned feature grid) → venue
showcase (interactive cards) → events spectrum → exhibitions story → gallery
preview → planning process (pinned steps) → testimonials → partners → location
advantages → final CTA.

**About** — Editorial hero → narrative + vision → milestone timeline →
leadership values → by the numbers → CTA.

**Venues** — Hero → interactive venue index with capacities, floor plan and
amenities → 3D volume → comparison → CTA.

**Events** — Hero → event categories spectrum → featured programs → format
matrix → CTA.

**Exhibitions** — Hero → exhibition formats → success stories → trade fair
calendar → CTA.

**Gallery** — Hero → category filter → masonry grid with full screen lightbox.

**Services** — Hero → service cards (AV, event management, exhibition support,
hospitality, connectivity, security) → process → CTA.

**Book A Venue** — Multi step stepper: venue → date → capacity → requirements →
details → confirmation, with live summary rail.

**Contact** — Hero → contact channels → form → map and location → FAQ.

---

## 7. Accessibility & Performance

- WCAG AA contrast on all text. Visible focus rings (gold).
- Full keyboard operability. Semantic landmarks. Reduced motion honoured.
- Self hosted fonts, lazy media, responsive imagery, code split 3D.
- SEO: per page metadata, Open Graph, JSON-LD, sitemap and robots.
