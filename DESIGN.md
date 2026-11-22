# naskt. design notes

Analysis of the 20 reference shots in the owner’s set (Tripzo, Travelo TNC, Stay Spot, Marvellous Escapes, Royagasht, Tourvia, TripMate, TripAero — including the AI planner and the design-system sheet). Names, logos, and copy from those shots are not reused.

## What the references share

- A tinted page (powder blue, sage, or mist) with **white content in large rounded frames**, not edge-to-edge boxes. Tourvia and Stay Spot are the clearest examples: the page is the mat, the section is the card.
- **Pill navigation** floating over the hero. Tourvia’s pattern is the one to follow: wordmark, quiet links, a ghost action, and a solid pill with a **circular arrow**. TripAero adds a glass bar and a second ghost (“Trip planner”).
- **One photo-led hero** with the headline on the image and a booking bar lower down (TripAero / Stay Spot). Cut-out people break the frame on the sides (TripAero, Royagasht, Tripzo’s about block).
- **Photo-first grids**: mixed bento for offers (TripAero), circles for destinations (Tripzo), horizontal trip cards with a duration chip and an orange “from” price (TripAero).
- **Eyebrow before the heading** — an outlined pill (“— About Us”, Tourvia) or a small script line (“Exclusive Offers”, TripAero). The heading then picks out **one word in the accent colour**.
- Soft shadow, 20–28px radii on frames, full pills on buttons and chips, lots of air. Motion is limited to marquees, carousels, and small reveals.
- TripAero’s system sheet fixes the palette and the type: Plus Jakarta Sans, navy / bright blue / orange, and a boarding-pass component with a dotted route.

Travelo TNC (green) and Marvellous Escapes (darker, more editorial) were used as contrast, not as the palette. TripMate contributed the **filter pills** and the way a booking card sits on a bright scene. Stay Spot contributed the newsletter split, the tilted photo, the rotating “Let’s explore more” badge, and the testimonial rail.

## Palette

| Token | Hex | Use |
| --- | --- | --- |
| Navy | `#16357A` | Wordmark, headings on tint, filled arrow discs, footer |
| Navy deep | `#102652` | Footer ground, hero scrim |
| Blue | `#1467C9` | Links, icons, active chips, info surfaces. Dark enough for white label text |
| Blue bright | `#1E88F5` | Decorative only, large areas |
| Orange | `#FF7A1A` | Primary buttons (with near-black text), highlights |
| Orange ink | `#C2410C` | Prices and the coloured word in headings on white (AA) |
| Tint | `#EAF3FE` | Page wash, blobs, soft panels |
| Ink | `#142033` | Body text |
| Ink soft | `#3D4C63` | Secondary text, still ≥ 4.5:1 on white |
| Yellow chip | `#FFE08A` / `#4A2E00` | Offer codes that name a theme, not a discount |
| Line | `#D5E2F2` | Hairline borders |

White text is not used on `#FF7A1A`. The primary pill is orange with `#1A1208` text and a navy arrow disc.

## Type

- Latin: **Plus Jakarta Sans** (400, 600, 700, 800), self-hosted.
- Arabic UI: **IBM Plex Sans Arabic** (400, 700), self-hosted. This is the default, because the page opens in Arabic.
- Eyebrows only: **Aref Ruqaa** in Arabic, **Caveat** in English. Nowhere else.
- Scale: 12 / 14 / 16 / 18 / 22 / 32 / fluid display up to ~64px. Headings use `text-wrap: balance`. Arabic body line-height is 1.65. No letter-spacing on Arabic.

## Components

- Floating glass pill nav; on small screens it collapses to logo, language, and a menu button that opens a sheet.
- Hero frame (radius 32px) + glass booking card with tabs (Flights / Hotels / Holidays).
- Service marquee (words, not partner logos).
- Offer bento, 4 tiles, yellow theme chip.
- Destination circles + filter pills.
- Trip scroller: photo, place, title, duration chip, orange “from” price, heart (local only).
- About split with a cut-out traveller on a soft blob.
- Why-rows: icon, title, copy, rounded photo.
- Scripted planner card (chips, typed reply, sample trip, WhatsApp).
- Boarding-pass sample beside three booking steps.
- Three example-team cards.
- Stories: one large, three small, “read more” opens the rest of the note.
- Testimonial rail marked as layout samples.
- Newsletter split with a rotating badge.
- Navy footer, round corners, and a floating WhatsApp button.

## Product constraints baked into the UI

Prices, offer chips, the planner, the team, and the testimonial cards are labelled as demonstrations. There is no cart, account, or star rating. Every enquiry goes to one WhatsApp number. Layout uses logical CSS properties so Arabic RTL and English LTR share one stylesheet.
