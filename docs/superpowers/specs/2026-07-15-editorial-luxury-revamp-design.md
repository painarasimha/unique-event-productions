# Unique Event Productions — Editorial Luxury Revamp

Date: 2026-07-15

## 1. Overview & Goals

Full visual rebuild of the Unique Event Productions marketing site (SvelteKit + Tailwind). Same 5 routes, same real content (copy, Cloudinary photography, contact details, FAQs), same backend (contact form → `/api/contact` → nodemailer, untouched). Every component, layout, color, and animation is rebuilt from scratch in a new "editorial luxury" visual language.

**Goal:** the site should read as a considered, photo-forward events/celebrations brand — closer to a boutique wedding magazine than a SaaS landing page. It should not be identifiable as AI-generated or template-derived.

**Concrete anti-patterns to avoid** (all present in the current build, all removed):
- Cursor-following blob (`mouse-follower.svelte` — already disabled in `+layout.svelte`, delete the file)
- Splash screen (`splashScreen.svelte`, unused — delete)
- 3D-tilt cards (`ThreeDCardEffect/*`, used only by `serviceCard.svelte` — delete both)
- Bento grid layout (`BentoGrid/*`, used only by `desktop-service-grid.svelte` — delete both)
- Centered hero: headline + subhead + single pill CTA over a dimmed full-bleed photo
- Purple/blue gradient accents, glassmorphism, rounded-2xl+shadow-2xl on every card
- Icon-in-a-circle stat/feature tiles with no real substance

## 2. Non-Goals

- No routing/IA changes: same 5 pages (`/`, `/about-us`, `/services`, `/our-work`, `/contact-us`), same nav order.
- No content rewrites: all copy, Cloudinary image URLs, contact info, FAQs, business hours, service titles/descriptions carry over verbatim.
- No backend changes: `/api/contact/+server.ts` (nodemailer + Gmail app password) stays as-is.
- No SvelteKit → other framework migration. Stays Tailwind + shadcn-svelte-style primitives where still used (accordion, card).

## 3. Design Tokens

**Typography** — replace `@fontsource-variable/playfair-display` + `@fontsource-variable/outfit` with:
- Display/headings: **Fraunces** (variable, optical sizing, soft/wonky axis available) via `@fontsource-variable/fraunces`
- Body/UI: **Instrument Sans** via `@fontsource-variable/instrument-sans`
- Tailwind `fontFamily.serif` → Fraunces Variable, `fontFamily.sans` → Instrument Sans Variable

**Color** (HSL CSS vars in `app.css`, same variable names so existing Tailwind color utilities keep working):
- `--background`: warm off-white, ~`30 25% 97%` (not pure white)
- `--foreground`: warm near-black ink, ~`20 15% 12%` (not pure `#000`)
- `--muted`: soft warm gray, ~`30 10% 92%`
- `--muted-foreground`: ~`25 8% 45%`
- `--primary` (the one gold accent): refined warm gold, ~`38 65% 48%` (deeper/less saturated than current `#ffbf00`) — used for CTAs, links, the one underline accent
- `--secondary`: warm charcoal (footer band), ~`20 15% 14%` — not pure black
- `--accent`: same warm gold family as primary, kept for `text-accent` spans already used in copy (no separate red)
- `--border`: soft warm gray, ~`30 10% 88%`
- Drop the separate red accent entirely — one accent color only, per the palette decision.
- `--radius`: reduce from `0.5rem` to `0.25rem` — sharper, more editorial, less "rounded SaaS card."

**Spacing/layout:**
- Increase vertical section padding across the board (current sections mostly use `py-6`/`py-8` → new sections use `py-16` to `py-28` depending on breakpoint).
- Prefer asymmetric two-column layouts (text one side, photo the other) over centered single-column blocks for content sections.
- Max content width for text blocks: `max-w-2xl` (narrower than current `max-w-4xl`) for better line length; photography/galleries can go full `max-w-screen-2xl` or full-bleed.

## 4. Global Components

**Header (`site-header.svelte`, `main-nav.svelte`, `mobile-nav.svelte`):**
- Keep the transparent-over-hero / solid-on-scroll behavior (`site-header.svelte` logic) — it already works well for a full-bleed hero and stays.
- Restyle: remove the gradient underline hover effect (`after:bg-gradient-to-r from-[#ffbf00] to-[#ffc800]`) in favor of a simple 1px gold underline that grows from center on hover — quieter, more editorial.
- Logo rotate-360-on-hover (`hover:animate-rotate360`) removed — playful spin doesn't fit the tone.
- Mobile nav: keep the Sheet-based slide-out (already reasonable), restyle only.

**Footer (`footer.svelte`):**
- Background changes from pure `bg-black` to the new warm charcoal `--secondary`.
- Same 3-column content (Contact / Follow Us / Quick Links) and copyright line — layout restyled with more breathing room, Fraunces for the "Contact Us"/"Follow Us"/"Quick Links" labels instead of generic bold sans.

## 5. Page Specs

### Home (`home-page.svelte` = `landing-page.svelte` + `event-section.svelte`)

- **Hero (`landing-page.svelte`):** Keep full-bleed photo (`banner-img9.jpg`) and the live counter (target values: **100+ Happy Clients, 500+ Events Planned, 10+ Years of Experience** — confirmed from `incrementNumber(100/500/10, …)` in source; the mid-count screenshot from earlier testing was just an in-flight animation frame, not final data — no change needed). Remove `animate-gradient-text` on the h1. Apply a slow, subtle Ken-Burns scale (existing `kenBurns` keyframe, ~20s) to the background image instead of a static `opacity-50` dim — replace flat dim with a bottom-weighted gradient overlay (transparent top → dark bottom) so the image reads clearly at top and text stays legible at bottom. Headline in Fraunces, large. Single CTA button restyled: solid gold fill, sharp `rounded-sm` corners, no shimmer-fill hover trick.
- **Promise/offer section (`event-section.svelte`):** Rebuild as an asymmetric layout: pull-quote-style intro copy on one side, restructure "What We Offer" / "Our Work" teaser from the current bordered two-box row into two distinct cards with a background photo each (currently text-only boxes) so the section isn't just typography — pulls in real imagery (e.g. a services photo, a work-gallery photo) as the AVIF/JPG backgrounds.

### About Us (`approach.svelte` + `chooseus.svelte`)

- Currently two stacked centered text blocks, `text-justify`, no imagery at all. Rebuild as an editorial layout: pair each of the four "Why Choose Us" points with the page's existing photography (reuse hero/work images) in an alternating text/image row layout, replacing the plain justified paragraph stack. "Our Approach" becomes a lead editorial intro at the top of the page (large Fraunces pull-quote treatment for the first sentence).

### Services (`+page.svelte`, `desktop-service-grid.svelte`, `mobile-service-grid.svelte`, `serviceCard.svelte`)

- Replace the BentoGrid + 3D-tilt-card system entirely with a single responsive grid (2–3 columns) of flat, restrained cards: photo (fixed aspect ratio, not the current irregular bento spans), title in Fraunces, short description, sharp corners, simple hover (slight image scale + gold underline on title) — no tilt, no gradient scrim beyond a light bottom fade for text legibility.
- **Decision on `service.link` (`/service/1'` etc.):** these routes don't exist today (404 — confirmed no `src/routes/service/[id]` directory), and the `Service` type's `fullDesc`/`features`/`info1`/`info2` fields are defined but never used anywhere. Rather than build out unauthored detail pages (out of scope — no content exists for them), the six service cards become **non-navigating** (no broken link) in this revamp; each card's CTA affordance is a small "Enquire" text-link that scrolls to / routes to `/contact-us` instead. This removes a pre-existing 404 as a side effect.

### Our Work (`our-work.svelte`, `work-card.svelte`)

- Replace the uniform 3-column grid with a masonry-style layout (varied image heights via CSS columns or a simple row-span pattern) so the gallery feels curated rather than templated.
- Filter pills: restyle the Tabs-based desktop filter and mobile `<select>` — keep both (they're a reasonable responsive split), just restyle pills as understated text-underline toggles instead of a boxed tab bar.
- Hover state: keep the category-label reveal, restyle from `bg-background/60` full overlay to a smaller bottom-corner caption chip, dark-on-image.

### Contact Us (`+page.svelte`, `contact-card.svelte`, `faq-section.svelte`, `timings.svelte`)

- Keep structure (3 contact cards → form → FAQ), all real data (phone, email, address, business hours, FAQs) unchanged.
- Note: `timings.svelte` (Business Hours card) exists as a component but is **not currently imported/rendered** in `+page.svelte` — it's dead code today. Since business hours are real, useful content, this revamp reinstates it as a 4th info card alongside Phone/Email/Location (still same non-goal of "no content rewrites" — this is surfacing existing real content, not adding new copy).
- Cards restyled: drop the `shadow-inner` + heavy border treatment for a flatter, bordered-only look consistent with the new sharper radius.
- Form: restyle inputs (sharp corners, thin border, gold focus ring), keep all fields/validation/submit behavior identical.

## 6. Motion

- Global: scroll-triggered fade + 20px slide-up on section entry (reuse existing `src/lib/animations.ts` `fadeSlideUp`, already matches this spec almost exactly — keep it, apply consistently across sections that don't already use it).
- Hero: slow Ken Burns background scale only.
- Removed entirely: mouse-follower, splash screen, 3D card tilt, logo spin-on-hover, gradient-text animation, card `hover:scale-105`-style tilt/pop effects — replaced with simple, small (2-4%) image-scale-on-hover where hover affordance is needed (work gallery, service cards).

## 7. Component Inventory

**Delete (unused after rebuild):**
- `src/lib/components/layout/mouse-follower.svelte`
- `src/lib/components/splashScreen.svelte`
- `src/lib/components/ui/ThreeDCardEffect/` (entire dir)
- `src/lib/components/ui/BentoGrid/` (entire dir)

**Keep, restyle:** header/nav (all 4 files), footer, hero, event-section, approach, chooseus, services page + grid + card (rebuilt simpler), our-work + work-card, contact page + contact-card + faq-section, `timings.svelte` (reinstated).

**Keep as-is (shadcn-svelte primitives still used):** `ui/accordion/*`, `ui/card/*`, `ui/button/*`, `ui/tabs/*`, `ui/sheet/*`, `ui/scroll-area/*`. `ui/select/*` used only by `our-work.svelte`'s desktop path currently uses native `<select>` for mobile and Tabs for desktop — `ui/select` itself is unused; leave in place (low-risk, not blocking) unless it's confirmed dead across the whole repo during implementation.

## 8. Verification Plan

- `npm run dev`, walk all 5 routes via the browse skill (as done in prior session): screenshot each, check console for errors, confirm images load (wait for network idle before screenshotting, per the lesson from the initial site-recovery check).
- Confirm the hero counter still animates to 100/500/10 (not just the mid-flight numbers seen in a rushed screenshot).
- Confirm contact form still POSTs successfully to `/api/contact` (or at minimum, no client-side regression — email send depends on env vars already configured).
- Responsive check at mobile/tablet/desktop widths (`browse responsive`) given the mobile-specific nav, service grid, and our-work filter all have distinct mobile paths.
