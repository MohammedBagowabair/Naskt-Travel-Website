# naskt. design

The page is an atlas opened on a table in late daylight. The ground is warm paper, the type is deep sea-green, and saffron appears only where someone can ask. The previous navy, blue, and orange pill system is the anti-reference: a SaaS travel template. This one is a single length of cloth — photographs graded like one dye, a traveller stepping off the plate, and a booking sheet laid across the bottom of the picture.

## Why this palette

The audience is international and Gulf, reading Arabic first, and the only conversion is a WhatsApp enquiry. A cool blue product UI makes the enquiry look like a software button. Sea-green ink (`#102824`) on sand paper (`#efe4d0`) reads as a printed page. Saffron (`#e2a322`) is the sun on that page: it fills the search button, the WhatsApp mark, and the active tab underline. Words that must stay readable on paper use a darker saffron (`#8f5606`, about 4.8:1). Secondary text is `#2f4a40` (about 7.7:1 on the paper), never a neutral gray.

| Token | Hex | Use |
| --- | --- | --- |
| Paper | `#EFE4D0` | Page ground |
| Paper raised | `#F6EFE2` | The booking sheet and the sample ticket |
| Paper deep | `#E5D6BC` | Quiet bands |
| Ink | `#102824` | Type, rules, footer |
| Ink soft | `#2F4A40` | Ledes, labels, notes |
| Saffron | `#E2A322` | The one action fill. Ink text on it |
| Saffron ink | `#8F5606` | Accent words, links, captions on paper |
| Line | `#CBBFA6` | Hairlines |

## Type

Two families, both with Arabic and Latin, self-hosted.

- **Reem Kufi** 700 for headlines and the wordmark. A kufi with a point of view, large and architectural, not a Latin serif pasted onto Arabic.
- **Markazi Text** 400 and 600 for body, navigation, and forms. A newspaper face that stays readable at interface sizes.

No negative letter-spacing, including on English. Display size stops at `4.8rem` on the hero so Arabic lines stay intact. Body is `1.2rem` with a measure near 38rem.

## Material

A tiled photographic grain (`assets/img/grain.webp`) sits over the page at low opacity with `mix-blend-mode: multiply` and `pointer-events: none`. Photographs share one grade: slightly desaturated, a little contrast, a little sepia. Cut-out people are left ungraded so they stay photographic. Corners are square. Depth comes from overlap — the traveller over the plate, the booking sheet over the photograph — not from shadows on cards.

## Composition

- Masthead: a full-width paper bar, hairline below, wordmark, text links, one saffron enquiry. On small screens it opens a paper sheet, not a floating card.
- Hero: the Maldives plate is full-bleed. The headline sits on the photograph in paper-coloured type. A cut-out traveller with a hat, backpack, and camera breaks the bottom edge. The working flight / hotel / holiday form is a paper sheet across that edge, in the first viewport on a desktop screen. On a phone and a tablet the photograph crops first, then the headline and the form stack on the paper so the type never sits on the water.
- Offers: one tall plate and a column of the others, captions underneath, theme words as small labels. Not four equal cards.
- Destinations: an uneven photo index. Kuala Lumpur and the Maldives take a double row. Filters are underlined words.
- Trips: a sideways rack of plates, type on the paper below, a heart that stays on this device.
- About: the backpacker stands beside the copy. No blob.
- Why: alternating photograph and text. No icon tiles.
- Planner: a letter, prewritten, labelled as a demonstration. The woman with the camera sits at the side on a wide screen.
- Booking steps sit next to a paper ticket, DXB to KUL, marked as not a booking.
- Team, notes, and the sample quote rail keep their demo labels. Quotes are lines of type; the centred one turns to ink.
- Newsletter: two overlapping photographs and an underline field.
- Footer: the same ink as the type, paper-coloured words, saffron only on the small headings.

## Motion

One drift: the hero traveller shifts slightly as the page scrolls, on wide screens only. Sections ease in when they arrive. The word ticker pauses on hover. `prefers-reduced-motion` removes the drift, the ticker duplication, and the entrances. Content is visible without JavaScript.

## Product rules that the design does not touch

Arabic is the default. English is the same page. Every enquiry uses `https://wa.me/967783964784`. From starts empty. Prices, the planner, the team, and the quote frames stay labelled as demonstrations. There is no cart.
