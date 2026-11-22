# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Plain HTML, CSS, and vanilla JavaScript. No framework and no new runtime dependencies. Deployed on GitHub Pages from `main` at `https://mohammedbagowabair.github.io/Naskt-Travel-Website/`.

## Users

People planning a trip who read Arabic first, with an English toggle for the same page. The audience is international and Gulf; the site does not assume a Yemeni departure city. They are comparing a destination, a rough date, and a way to ask a person, not checking out online.

## Product Purpose

naskt (نسكت) is a fictional travel-agency demonstration. It shows how an enquiry becomes a WhatsApp conversation: flights, hotels, or a holiday, then the details are finished in chat. Success is a clear enquiry, not a booking or a payment.

## Positioning

The page is the brochure and the desk. Every price, offer chip, planner reply, team portrait, and testimonial frame is labelled as a demonstration. There is no cart, account, or live model behind the planner.

## Operating Context

A single long page, Arabic RTL by default, English via a toggle stored in `localStorage`. The visitor filters destinations, saves a trip on this device, steps through a scripted plan, and leaves an email on a Formsubmit placeholder that does not deliver until the address is replaced.

## Capabilities and Constraints

- Language toggle: `data-i18n`, `localStorage` key `naskt-lang`, `html` `lang` and `dir`.
- Booking widget tabs (Flights, Hotels, Holidays) build a WhatsApp message. From starts empty. Placeholder: من أين؟ / From where?
- Destination filters, trips carousel, local favourites, scripted planner, newsletter and footer Formsubmit forms, floating WhatsApp, credits page.
- Every `wa.me` link is `https://wa.me/967783964784` only.
- No fake ratings, testimonials, statistics, or discounts. Demo labels stay. No Yemen city names. No checkout.
- Lighthouse mobile performance, accessibility, and SEO at least 90. No horizontal scroll from 360 to 1920. No console errors. No broken in-page links.
- Copy and links already on the page stay. Do not invent business facts.

Inferred from the existing site and the redesign brief because this run is unattended: the primary job is “ask about a trip on WhatsApp,” and the brand name, destinations, and demo prices already published are the only commercial facts.

## Brand Commitments

Wordmark is `naskt.` in Latin and نسكت in Arabic. The owner asked for a premium editorial redesign: one material (warm paper or fine grain), a deep ink or sea-green type colour, and a single sunset, terracotta, or saffron accent. Oversized composition, two type families with Arabic first, and no generic SaaS card system.

## Evidence on Hand

Existing photography and cut-outs under `assets/img/`, credits in `credits.html`, and the bilingual dictionary in `js/main.js`. Prices are illustrative. Team portraits are example faces, not staff. The planner text is prewritten.

## Product Principles

- The conversation is the product. The page’s job is to start it.
- Demonstration is labelled, never dressed up as proof.
- Arabic is the default reading order; English is the same page, not a translation skin.
- One enquiry number, one path out.

## Accessibility & Inclusion

WCAG contrast for text. `prefers-reduced-motion` is respected. Keyboard access for the menu, tabs, filters, carousels, and forms. Logical CSS so RTL and LTR share one stylesheet.
