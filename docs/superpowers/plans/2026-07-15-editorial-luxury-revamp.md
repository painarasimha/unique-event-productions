# Editorial Luxury Revamp Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the Unique Event Productions SvelteKit site's entire visual layer (type, color, layout, motion, components) into a photo-forward "editorial luxury" design, per `docs/superpowers/specs/2026-07-15-editorial-luxury-revamp-design.md`, without changing routes, copy, Cloudinary asset URLs, or backend behavior.

**Architecture:** Tailwind design tokens (fonts, HSL color vars, radius) live in `src/app.css` + `tailwind.config.ts` and cascade to every component. Each page's components are rebuilt file-by-file against those tokens. A new shared `RevealSection` primitive centralizes the one scroll-triggered motion pattern used across every rebuilt section, so no task duplicates intersection-observer boilerplate. Unused gimmick components (mouse-follower, splash screen, 3D-tilt cards, bento grid) and, once their only consumers are rebuilt, unused shadcn-svelte primitives (card, select, tabs) are deleted.

**Tech Stack:** SvelteKit 2 (Svelte 5, legacy `export let` component style — do not convert to runes), Tailwind CSS 3, bits-ui (Accordion/Button/Sheet/ScrollArea only, post-cleanup), `svelte-inview` for scroll detection, `@fontsource-variable/fraunces` + `@fontsource-variable/instrument-sans` for type, existing Cloudinary-hosted imagery, no test framework (verification = `svelte-check` + `eslint`/`prettier` + manual browser verification via the `browse` skill).

## Global Constraints

- No route changes: exactly `/`, `/about-us`, `/services`, `/our-work`, `/contact-us`.
- No copy changes: every string of real content (headings, paragraphs, FAQ Q&A, service titles/descriptions, contact info, business hours) is carried over verbatim, including existing typos (e.g. "atleast").
- No new image assets: only reuse Cloudinary URLs already present somewhere in the current codebase (listed per-task below).
- No backend changes: `src/routes/api/contact/+server.ts` is untouched.
- Single accent color only (no separate red/gold pair) — `--primary` and `--accent` both resolve to the same warm gold HSL value.
- `--radius` drops from `0.5rem` to `0.25rem` (sharper corners) — this is a CSS var change in `app.css`; Tailwind's `rounded-lg`/`md`/`sm` utilities automatically pick it up via `tailwind.config.ts`'s existing `borderRadius` block, no per-component radius-scale change needed unless a component hardcodes a Tailwind radius class outside that scale (e.g. `rounded-xl`).
- Node 20 is pinned via `.npmrc` (`engine-strict=true`) but this machine may run a newer Node; pass `--engine-strict=false` on any `npm install`/`npm uninstall` command to avoid a spurious `EBADENGINE` failure (matches how this was already handled earlier in the project).
- Svelte component style: match each file's existing convention (`<script lang="ts">` + `export let` props, not Svelte 5 runes) except `+layout.svelte`, which already uses runes (`$props()`) — leave that file's rune usage as-is.
- Every task ends with `npm run check` passing (no new type errors) before commit. Formatting (`npm run format`) should be run if `npm run lint` reports diffs — this repo has Prettier + `prettier-plugin-tailwindcss`, which will reorder/reformat class strings; that's expected and fine to accept.

---

### Task 1: Design tokens — fonts, color palette, radius, shared scroll-reveal primitive

**Files:**
- Modify: `package.json` (via npm, not hand-edited)
- Modify: `src/app.css`
- Modify: `tailwind.config.ts`
- Create: `src/lib/components/ui/reveal-section.svelte`

**Interfaces:**
- Consumes: nothing (first task).
- Produces:
  - Tailwind color utilities (`bg-background`, `text-foreground`, `bg-primary`, `text-primary-foreground`, `bg-secondary`, `text-secondary-foreground`, `bg-muted`, `text-muted-foreground`, `border-border`, `text-accent`, etc.) now resolve to the new warm-neutral-plus-gold palette — every later task uses these class names, unchanged in name, only in resolved color.
  - `font-serif` → Fraunces Variable, `font-sans` → Instrument Sans Variable.
  - `RevealSection` component: `import RevealSection from '$lib/components/ui/reveal-section.svelte';` — accepts an optional `class` prop and a default slot. Wraps its slot content in a `div` that fades + slides up 20px when scrolled into view (via `svelte-inview`), and stays static (no fade) if never scrolled past — i.e. content already on screen at page load still renders normally, it just won't play the intro animation until the user scrolls back to it (that's an accepted trade-off, not a bug).

- [ ] **Step 1: Swap font packages**

Run:
```bash
npm uninstall @fontsource-variable/outfit @fontsource-variable/playfair-display --engine-strict=false
npm install @fontsource-variable/fraunces @fontsource-variable/instrument-sans --engine-strict=false
```
Expected: both commands exit 0; `package.json` `dependencies` now lists `@fontsource-variable/fraunces` and `@fontsource-variable/instrument-sans` instead of the outfit/playfair-display entries.

- [ ] **Step 2: Discover the installed packages' own font-face declarations**

Run:
```bash
cat node_modules/@fontsource-variable/fraunces/index.css
cat node_modules/@fontsource-variable/instrument-sans/index.css
```
Expected: each prints one or more `@font-face` blocks with `font-family`, `font-style`, `font-weight` (a range, e.g. `100 900` or `400 700`), a `src: url(./files/<name>.woff2) format('woff2-variations')` line, and a `unicode-range`. Note the exact `files/<name>.woff2` filename and `font-weight` range for the `normal` style (non-italic) block of each — you'll use them verbatim in Step 3. (The existing `src/app.css` already does this same "import package CSS, then also hand-declare an equivalent `@font-face` under a custom family name" pattern for Outfit/Playfair — Step 3 follows the identical pattern with the two new fonts.)

- [ ] **Step 3: Rewrite `src/app.css`**

Replace the two `@import` lines and the two hand-written `@font-face` blocks. Use this content, substituting the `url(...)` path and `font-weight` range in the two new `@font-face` blocks with whatever Step 2 actually printed if it differs from what's shown here:

```css
@import '@fontsource-variable/fraunces';
@import '@fontsource-variable/instrument-sans';

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
	:root {
		--background: 30 25% 97%;
		--foreground: 20 15% 12%;

		--muted: 30 10% 92%;
		--muted-foreground: 25 8% 45%;

		--popover: 30 25% 97%;
		--popover-foreground: 20 15% 12%;

		--card: 0 0% 100%;
		--card-foreground: 20 15% 12%;

		--border: 30 10% 88%;
		--input: 30 10% 88%;

		--primary: 38 65% 48%;
		--primary-foreground: 20 15% 12%;

		--secondary: 20 15% 14%;
		--secondary-foreground: 30 25% 97%;

		--accent: 38 65% 48%;
		--accent-foreground: 30 25% 97%;

		--destructive: 0 72.2% 50.6%;
		--destructive-foreground: 0 0% 98%;

		--ring: 38 65% 48%;

		--radius: 0.25rem;
	}

	.dark {
		--background: 240 10% 3.9%;
		--foreground: 0 0% 98%;

		--muted: 240 3.7% 15.9%;
		--muted-foreground: 240 5% 64.9%;

		--popover: 240 10% 3.9%;
		--popover-foreground: 0 0% 98%;

		--card: 240 10% 3.9%;
		--card-foreground: 0 0% 98%;

		--border: 240 3.7% 15.9%;
		--input: 240 3.7% 15.9%;

		--primary: 45 100% 50%;
		--primary-foreground: 240 5.9% 10%;

		--secondary: 0 0% 100%;
		--secondary-foreground: 0 0% 0%;

		--accent: 355 77% 52%;
		--accent-foreground: 0 0% 98%;

		--destructive: 0 62.8% 30.6%;
		--destructive-foreground: 0 0% 98%;

		--ring: 240 4.9% 83.9%;
	}
}

@layer base {
	/* instrument-sans-latin-wght-normal */
	@font-face {
		font-family: 'Instrument Sans Variable';
		font-style: normal;
		font-display: swap;
		font-weight: 100 900;
		src: url(@fontsource-variable/instrument-sans/files/instrument-sans-latin-wght-normal.woff2)
			format('woff2-variations');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304,
			U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF,
			U+FFFD;
	}

	/* fraunces-latin-wght-normal */
	@font-face {
		font-family: 'Fraunces Variable';
		font-style: normal;
		font-display: swap;
		font-weight: 100 900;
		src: url(@fontsource-variable/fraunces/files/fraunces-latin-wght-normal.woff2)
			format('woff2-variations');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304,
			U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF,
			U+FFFD;
	}

	@layer utilities {
		:root {
			scroll-behavior: smooth;
		}

		::-webkit-scrollbar {
			width: 8px;
			height: 8px;
		}

		::-webkit-scrollbar-thumb {
			background: #555;
			border-radius: 10px;
		}

		.dark {
			::-webkit-scrollbar-track {
				background: none;
			}

			::-webkit-scrollbar-thumb {
				background: #555;
				border-radius: 5px;
			}
		}
	}

	* {
		@apply border-border;
	}

	body {
		@apply bg-background text-foreground;
	}
}
```

- [ ] **Step 4: Update `tailwind.config.ts`**

Replace the whole file with:

```ts
import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts,css}'],
	safelist: ['dark'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			animation: {
				'gradient-text': 'gradientText 3s linear infinite',
				kenBurns: 'kenBurns 20s ease-in-out infinite',
				rotate360: 'rotate360 0.3s ease'
			},

			keyframes: {
				gradientText: {
					'0%': { backgroundPosition: '0% 50%' },
					'100%': { backgroundPosition: '100% 50%' }
				},
				kenBurns: {
					'0%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.1)' },
					'100%': { transform: 'scale(1)' }
				},
				rotate360: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				}
			},

			colors: {
				border: 'hsl(var(--border) / <alpha-value>)',
				input: 'hsl(var(--input) / <alpha-value>)',
				ring: 'hsl(var(--ring) / <alpha-value>)',
				background: 'hsl(var(--background) / <alpha-value>)',
				foreground: 'hsl(var(--foreground) / <alpha-value>)',
				primary: {
					DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
					foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
					foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
					foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
					foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
					foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
					foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
				},
				card: {
					DEFAULT: 'hsl(var(--card) / <alpha-value>)',
					foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Instrument Sans Variable', 'sans-serif'],
				serif: ['Fraunces Variable', 'serif']
			}
		}
	}
};

export default config;
```

(This removes the `float` and `particle` keyframes/animations, which are dead code today — confirmed via `grep -rn "animate-float\|particle" src/` returning no usages. `gradient-text` and `rotate360` are still referenced by `landing-page.svelte` and `main-nav.svelte` respectively at this point in the plan — they're removed in Tasks 4 and 3, which also remove their last usages. Removing them here would leave those two files' animation classes silently inert between now and then, which is harmless but unnecessary; leaving the keyframes in place until their usage is removed keeps every task's diff self-contained.)

- [ ] **Step 5: Create the shared scroll-reveal component**

Create `src/lib/components/ui/reveal-section.svelte`:

```svelte
<script lang="ts">
	import { inview } from 'svelte-inview';

	let className: string | undefined = undefined;
	export { className as class };

	let isInView = false;
</script>

<div
	use:inview={{ unobserveOnEnter: true, rootMargin: '-10% 0px' }}
	on:inview_enter={() => (isInView = true)}
	class="transition-all duration-700 ease-out {isInView
		? 'translate-y-0 opacity-100'
		: 'translate-y-5 opacity-0'} {className ?? ''}"
>
	<slot />
</div>
```

- [ ] **Step 6: Verify**

Run:
```bash
npm run check
```
Expected: no new errors (pre-existing errors, if any, are out of scope — note them but don't fix unrelated issues).

Run:
```bash
npm run dev &
sleep 3
```
Then use the `browse` skill: `goto http://localhost:5173/`, `wait --networkidle`, `console --errors` (expect no console errors), `css h1 font-family` on the homepage heading (expect it to include `Fraunces Variable`). Stop the dev server after (`kill %1` or the job you started).

- [ ] **Step 7: Commit**

```bash
git add package.json package-lock.json src/app.css tailwind.config.ts src/lib/components/ui/reveal-section.svelte
git commit -m "feat: swap in Fraunces/Instrument Sans, warm-neutral+gold tokens, scroll-reveal primitive"
```

---

### Task 2: Remove orphaned gimmick components

**Files:**
- Delete: `src/lib/components/layout/mouse-follower.svelte`
- Delete: `src/lib/components/splashScreen.svelte`
- Modify: `src/routes/+layout.svelte`

**Interfaces:**
- Consumes: nothing from Task 1.
- Produces: nothing new — this task only removes dead code. Confirmed dead via `grep -rln "mouse-follower\|MouseFollower" src/` (only a commented-out reference in `+layout.svelte`) and `grep -rln "splashScreen\|SplashScreen" src/` (zero matches).

- [ ] **Step 1: Delete the two files**

```bash
git rm src/lib/components/layout/mouse-follower.svelte
git rm src/lib/components/splashScreen.svelte
```

- [ ] **Step 2: Remove the dead comment in `+layout.svelte`**

Current content:
```svelte
<script lang="ts">
	import '../app.css';
	import SiteHeader from '$lib/components/layout/site-header.svelte';
	import Footer from '$lib/components/layout/footer.svelte';
	let { children } = $props();
</script>

<div class="relative flex flex-col">
	<SiteHeader />
	<!-- <MouseFollower /> -->
	<div class="flex min-h-[calc(100vh-3.5rem)] w-screen bg-background bg-opacity-0">
		{@render children()}
	</div>
	<Footer />
</div>
```

New content (just the comment line removed — the `min-h-[calc(100vh-3.5rem)]` header-height offset is updated in Task 3, which is the task that actually changes the header's height):

```svelte
<script lang="ts">
	import '../app.css';
	import SiteHeader from '$lib/components/layout/site-header.svelte';
	import Footer from '$lib/components/layout/footer.svelte';
	let { children } = $props();
</script>

<div class="relative flex flex-col">
	<SiteHeader />
	<div class="flex min-h-[calc(100vh-3.5rem)] w-screen bg-background bg-opacity-0">
		{@render children()}
	</div>
	<Footer />
</div>
```

- [ ] **Step 3: Verify**

```bash
npm run check
```
Expected: no new errors.

- [ ] **Step 4: Commit**

```bash
git add src/routes/+layout.svelte
git commit -m "chore: remove unused mouse-follower and splash-screen components"
```

---

### Task 3: Rebuild header & footer

**Files:**
- Modify: `src/lib/components/nav/main-nav.svelte`
- Modify: `src/lib/components/nav/mobile-nav.svelte`
- Modify: `src/lib/components/layout/site-header.svelte`
- Modify: `src/lib/components/layout/footer.svelte`
- Modify: `src/routes/+layout.svelte`
- Modify: `tailwind.config.ts`

**Interfaces:**
- Consumes: `bg-background`/`text-foreground`/`bg-secondary`/`text-secondary-foreground`/`bg-primary` tokens and `font-serif` from Task 1.
- Produces: header height becomes `h-16` (was `h-14`) — Task 4 (hero) depends on this exact value for its `h-[calc(100dvh-4rem)]` full-bleed hero sizing.

- [ ] **Step 1: Rewrite `main-nav.svelte`**

```svelte
<script lang="ts">
	import Logo from '$lib/assets/Primary Logo.png';
	import { docsConfig } from '$lib/config/docs.ts';
</script>

<div class="mr-4 hidden w-full items-center justify-between md:flex">
	<a href="/" class="mr-6 flex items-center space-x-2">
		<img src={Logo} alt="logo-img" class="h-11 w-11" />
	</a>
	<nav class="flex items-center gap-8 font-sans text-sm tracking-wide">
		{#each docsConfig.mainNav as navItem}
			<a
				href={navItem.href}
				class="relative pb-1 after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-0 after:-translate-x-1/2 after:bg-primary after:transition-all after:duration-300 after:ease-out hover:after:w-full"
			>
				{navItem.title}
			</a>
		{/each}
	</nav>
</div>
```

- [ ] **Step 2: Rewrite `mobile-nav.svelte`**

```svelte
<script lang="ts">
	import MobileLink from './mobile-link.svelte';
	import { Menu } from 'lucide-svelte';
	import Logo from '$lib/assets/Primary Logo.png';
	import * as Sheet from '../ui/sheet/index.ts';
	import ScrollArea from '../ui/scroll-area/scroll-area.svelte';
	import { docsConfig } from '$lib/config/docs.ts';

	let open = false;
</script>

<!-- Mobile Nav -->
<div class="flex w-full items-center justify-between px-4 md:hidden">
	<img src={Logo} alt="logo-img" class="h-8 w-8" />

	<Sheet.Root bind:open>
		<Sheet.Trigger>
			<Menu class="h-6 w-6" />
		</Sheet.Trigger>
		<Sheet.Content side="right" class="pr-0">
			<MobileLink href="/" class="flex items-center" bind:open>
				<img src={Logo} alt="logo-img" class="mr-3 h-7 w-7" />
				<span class="font-serif text-lg">Unique Event Productions</span>
			</MobileLink>
			<ScrollArea orientation="both" class="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
				<div class="flex flex-col space-y-4 font-sans">
					{#each docsConfig.mainNav as navItem, index (navItem + index.toString())}
						{#if navItem.href}
							<MobileLink href={navItem.href} bind:open class="text-foreground">
								{navItem.title}
							</MobileLink>
						{/if}
					{/each}
				</div>
			</ScrollArea>
		</Sheet.Content>
	</Sheet.Root>
</div>
```

- [ ] **Step 3: Rewrite `site-header.svelte`**

```svelte
<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import MobileNav from '$lib/components/nav/mobile-nav.svelte';
	import MainNav from '$lib/components/nav/main-nav.svelte';
	import { afterNavigate } from '$app/navigation';

	let scrolled = false;
	let path = page.url.pathname;

	afterNavigate(() => {
		path = page.url.pathname;
	});

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 0;
		};
		handleScroll();
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<header
	class={`sticky top-0 z-50 w-full transition-colors duration-300 ${
		path === '/' && !scrolled
			? 'border-b border-transparent bg-transparent text-white'
			: 'border-b border-border bg-background text-foreground'
	}`}
>
	<div class="flex h-16 max-w-screen-2xl items-center md:container">
		<MainNav />
		<MobileNav />
	</div>
</header>
```

- [ ] **Step 4: Rewrite `footer.svelte`**

```svelte
<script>
	import { Facebook, Instagram } from 'lucide-svelte';
</script>

<footer class="bg-secondary py-16 text-secondary-foreground">
	<div
		class="mx-auto grid max-w-screen-xl grid-cols-1 gap-10 overflow-hidden px-4 sm:grid-cols-2 lg:grid-cols-3"
	>
		<div class="space-y-3 text-sm">
			<h4 class="font-serif text-lg">Contact Us</h4>
			<p>Email: unique.event.productions2020@gmail.com</p>
			<p>Phone: +91 99026 64066</p>
		</div>

		<div class="space-y-3">
			<h4 class="font-serif text-lg">Follow Us</h4>
			<div class="flex space-x-4">
				<a
					href="/"
					class="rounded-full border border-secondary-foreground/30 p-2 transition-colors hover:border-primary hover:text-primary"
					aria-label="Facebook"><Facebook class="h-4 w-4" /></a
				>
				<a
					href="https://www.instagram.com/unique_event_productions?igsh=MWs2eWR5dnJhbzJmMA=="
					class="rounded-full border border-secondary-foreground/30 p-2 transition-colors hover:border-primary hover:text-primary"
					aria-label="Instagram"><Instagram class="h-4 w-4" /></a
				>
			</div>
		</div>

		<div class="space-y-3">
			<h4 class="font-serif text-lg">Quick Links</h4>
			<nav class="space-y-2 text-sm">
				<a href="/" class="block transition-colors hover:text-primary">Home</a>
				<a href="/about-us" class="block transition-colors hover:text-primary">About</a>
				<a href="/services" class="block transition-colors hover:text-primary">Services</a>
				<a href="/our-work" class="block transition-colors hover:text-primary">Our Work</a>
				<a href="/contact-us" class="block transition-colors hover:text-primary">Contact</a>
			</nav>
		</div>
	</div>

	<div
		class="mx-auto mt-12 max-w-screen-xl border-t border-secondary-foreground/20 px-4 pt-6 text-center text-sm text-secondary-foreground/70"
	>
		<p>&copy; {new Date().getFullYear()} Unique Event Productions. All rights reserved.</p>
	</div>
</footer>
```

(Adds an "Our Work" link to Quick Links — the nav bar already has 5 items but the footer only listed 4, missing Our Work. Surfacing an existing nav destination, not new copy.)

- [ ] **Step 5: Update `+layout.svelte`'s header-height offset**

`site-header.svelte` is now `h-16` (4rem) instead of `h-14` (3.5rem). Update the matching calc:

```svelte
<script lang="ts">
	import '../app.css';
	import SiteHeader from '$lib/components/layout/site-header.svelte';
	import Footer from '$lib/components/layout/footer.svelte';
	let { children } = $props();
</script>

<div class="relative flex flex-col">
	<SiteHeader />
	<div class="flex min-h-[calc(100vh-4rem)] w-screen bg-background bg-opacity-0">
		{@render children()}
	</div>
	<Footer />
</div>
```

- [ ] **Step 6: Remove `rotate360` from `tailwind.config.ts`**

Its only usage (`hover:animate-rotate360` in `main-nav.svelte`) was removed in Step 1. Update the `animation` and `keyframes` blocks (rest of the file unchanged from Task 1's version):

```ts
			animation: {
				'gradient-text': 'gradientText 3s linear infinite',
				kenBurns: 'kenBurns 20s ease-in-out infinite'
			},

			keyframes: {
				gradientText: {
					'0%': { backgroundPosition: '0% 50%' },
					'100%': { backgroundPosition: '100% 50%' }
				},
				kenBurns: {
					'0%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.1)' },
					'100%': { transform: 'scale(1)' }
				}
			},
```

- [ ] **Step 7: Verify**

```bash
npm run check
```
Expected: no new errors.

Start dev server, use `browse` skill on `http://localhost:5173/` and `http://localhost:5173/about-us`: confirm header shows transparent+white on the unscrolled homepage hero and solid background+dark text on `/about-us` (which has no hero), confirm mobile viewport (`browse viewport 375x812`) shows the hamburger menu and it opens/closes, `console --errors` on both.

- [ ] **Step 8: Commit**

```bash
git add src/lib/components/nav/main-nav.svelte src/lib/components/nav/mobile-nav.svelte src/lib/components/layout/site-header.svelte src/lib/components/layout/footer.svelte src/routes/+layout.svelte tailwind.config.ts
git commit -m "feat: restyle header, nav, and footer for editorial-luxury look"
```

---

### Task 4: Rebuild home hero

**Files:**
- Modify: `src/lib/components/home/landing-page.svelte`
- Modify: `tailwind.config.ts`

**Interfaces:**
- Consumes: `h-16` header height from Task 3 (hero uses `h-[calc(100dvh-4rem)]`), `animate-kenBurns` from Task 1/3's `tailwind.config.ts`, `bg-primary`/`text-primary-foreground` tokens.
- Produces: nothing new consumed by later tasks.

- [ ] **Step 1: Rewrite `landing-page.svelte`**

```svelte
<script lang="ts">
	import { fade, fly, slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Button from '../ui/button/button.svelte';
	import { goto } from '$app/navigation';
	import { createEventDispatcher } from 'svelte';

	const imgUrl =
		'https://res.cloudinary.com/db56favi8/image/upload/v1737995012/unique-event-productions/banner-img9.jpg';

	let clients = 0;
	let events = 0;
	let experience = 0;
	const dispatch = createEventDispatcher();

	let visible = false;

	function handleClick() {
		goto('/services');
		dispatch('click');
	}

	const incrementNumber = (target: number, setter: (value: number) => void, duration: number) => {
		const stepTime = Math.max(Math.floor(duration / target), 10);
		let current = 0;

		const increment = () => {
			current += Math.ceil(target / (duration / stepTime));
			if (current >= target) {
				setter(target);
				clearInterval(interval);
			} else {
				setter(current);
			}
		};

		const interval = setInterval(increment, stepTime);
	};

	onMount(() => {
		incrementNumber(100, (value) => (clients = value), 2000);
		incrementNumber(500, (value) => (events = value), 2500);
		incrementNumber(10, (value) => (experience = value), 1500);

		visible = true;
	});
</script>

<div class="relative flex h-[calc(100dvh-4rem)] w-full flex-col justify-end overflow-hidden">
	<img
		src={imgUrl}
		alt="Event production company banner"
		class="animate-kenBurns absolute inset-0 h-full w-full object-cover"
	/>
	<div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

	<div class="relative z-10 flex flex-1 flex-col items-center justify-center gap-6 px-4 text-center">
		{#if visible}
			<h1
				class="font-serif text-4xl font-medium text-white sm:text-5xl lg:text-7xl"
				in:fade={{ delay: 100 }}
			>
				Unique Event Productions
			</h1>
			<p
				class="text-lg text-white/90 sm:text-xl lg:text-2xl"
				in:fade={{ delay: 200, duration: 600 }}
			>
				Turning Moments into Memories
			</p>
		{/if}
		<div in:fly={{ y: 20, delay: 200 }}>
			<Button
				on:click={handleClick}
				class="rounded-sm bg-primary px-8 py-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:text-base"
			>
				Learn More
			</Button>
		</div>
	</div>

	<div
		class="relative z-10 flex flex-wrap justify-center gap-2 px-4 pb-10 text-center sm:text-lg md:text-xl"
		in:slide={{ duration: 1000 }}
	>
		<p class="w-full font-sans font-medium text-white">
			{clients}+ Happy Clients &nbsp;|&nbsp; {events}+ Events Planned &nbsp;|&nbsp; {experience}+ Years
			of Experience
		</p>
	</div>
</div>
```

(Removes the `isClicked` scale-95 state and the `before:w-full` shimmer-fill hover trick from the CTA button — both were the "gimmick" pattern flagged in the spec. Removes the `animate-gradient-text` class from the `h1`. Replaces the flat `opacity-50` dim with a bottom-weighted gradient overlay plus a slow `animate-kenBurns` scale on the background image. The `-top-[3.6rem]` absolute-offset hack from the original is no longer needed since the container is now sized directly via `h-[calc(100dvh-4rem)]` against the new `h-16` header — simpler and no longer a magic-number hack tied to the old header height.)

- [ ] **Step 2: Remove `gradient-text` from `tailwind.config.ts`**

Its only usage was removed in Step 1. Final `animation`/`keyframes` blocks (rest of file unchanged):

```ts
			animation: {
				kenBurns: 'kenBurns 20s ease-in-out infinite'
			},

			keyframes: {
				kenBurns: {
					'0%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.1)' },
					'100%': { transform: 'scale(1)' }
				}
			},
```

- [ ] **Step 3: Verify**

```bash
npm run check
```
Expected: no new errors.

Start dev server, use `browse` skill: `goto http://localhost:5173/`, `screenshot` immediately (expect counters mid-animation, that's fine), then `wait --networkidle`, wait ~2.5s (e.g. `js "new Promise(r => setTimeout(r, 2500))"` or just re-check after a pause), `text` and confirm the page includes "100+ Happy Clients", "500+ Events Planned", "10+ Years of Experience" (the final animated values). `console --errors`.

- [ ] **Step 4: Commit**

```bash
git add src/lib/components/home/landing-page.svelte tailwind.config.ts
git commit -m "feat: rebuild home hero with Ken Burns background and restrained CTA"
```

---

### Task 5: Rebuild home promise/offer section

**Files:**
- Modify: `src/lib/components/layout/event-section.svelte`

**Interfaces:**
- Consumes: `RevealSection` from Task 1, `font-serif`/color tokens.
- Produces: nothing new consumed by later tasks.

- [ ] **Step 1: Rewrite `event-section.svelte`**

```svelte
<script>
	import { goto } from '$app/navigation';
	import Button from '../ui/button/button.svelte';
	import RevealSection from '../ui/reveal-section.svelte';

	const offerImg =
		'https://res.cloudinary.com/db56favi8/image/upload/v1740913810/unique-event-productions/concert1.jpg';
	const workImg =
		'https://res.cloudinary.com/db56favi8/image/upload/v1740907753/unique-event-productions/Wedding4.jpg';
</script>

<section class="w-full bg-background py-20 sm:py-28">
	<RevealSection class="mx-auto grid w-[90%] max-w-6xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
		<div>
			<h2 class="text-sm font-medium uppercase tracking-wide text-muted-foreground">
				Our Promise to You
			</h2>
			<p class="mt-4 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
				We craft unforgettable celebrations.
			</p>
		</div>
		<div class="flex flex-col gap-6">
			<p class="text-base leading-relaxed sm:text-lg">
				At Unique Event Productions, every event begins with your story. We specialize in
				<span class="font-medium text-accent">luxury event planning</span>, ensuring each
				celebration is a seamless blend of elegance, creativity, and personal touch.
			</p>
			<p class="text-base leading-relaxed sm:text-lg">
				<span class="font-medium text-accent">Our approach</span> is built on partnership and precision.
				We take the time to understand who you are, what you envision, and the moments that matter
				most to you. This deep connection allows us to design weddings, corporate events, social gatherings,
				and private parties that are not just visually stunning but also deeply meaningful.
			</p>
			<p class="text-base leading-relaxed sm:text-lg">
				At <span class="font-medium text-accent">Unique Event Productions</span>, we don't just create
				events—we craft experiences that leave lasting impressions. Let's bring your vision to life!
			</p>
			<div class="mt-2">
				<Button
					variant="outline"
					class="rounded-sm border-foreground/30 px-6 py-5 text-sm text-foreground hover:bg-foreground hover:text-background"
					on:click={() => goto('/about-us')}
				>
					Discover Who We Are
				</Button>
			</div>
		</div>
	</RevealSection>

	<RevealSection class="mx-auto mt-20 grid w-[90%] max-w-6xl gap-6 sm:mt-28 md:grid-cols-2">
		<a
			href="/services"
			class="group relative flex h-80 flex-col justify-end overflow-hidden rounded-sm p-8"
		>
			<img
				src={offerImg}
				alt="What we offer"
				class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
			/>
			<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
			<div class="relative z-10 text-white">
				<h3 class="text-sm font-medium uppercase tracking-wide text-white/70">What We Offer</h3>
				<p class="mt-2 font-serif text-2xl sm:text-3xl">Let us dazzle and inspire you.</p>
			</div>
		</a>

		<a
			href="/our-work"
			class="group relative flex h-80 flex-col justify-end overflow-hidden rounded-sm p-8"
		>
			<img
				src={workImg}
				alt="Our work"
				class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
			/>
			<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
			<div class="relative z-10 text-white">
				<h3 class="text-sm font-medium uppercase tracking-wide text-white/70">Our Work</h3>
				<p class="mt-2 font-serif text-2xl sm:text-3xl">
					Events we have conducted and made memorable.
				</p>
			</div>
		</a>
	</RevealSection>
</section>
```

(`concert1.jpg` and `Wedding4.jpg` are both existing Cloudinary URLs already used elsewhere in the codebase — `concert1.jpg` on the Services page, `Wedding4.jpg` in the Our Work gallery — no new assets. The two bordered text-only boxes become full photo-backed cards; the whole card is now the link, replacing the separate outlined buttons.)

- [ ] **Step 2: Verify**

```bash
npm run check
```
Expected: no new errors.

Start dev server, `browse` skill: `goto http://localhost:5173/`, scroll to the promise section (`scroll ".group"` or similar), confirm the two photo cards render with visible images and text, `console --errors`.

- [ ] **Step 3: Commit**

```bash
git add src/lib/components/layout/event-section.svelte
git commit -m "feat: rebuild home promise section as asymmetric layout with photo-backed cards"
```

---

### Task 6: Rebuild About Us page

**Files:**
- Modify: `src/routes/about-us/+page.svelte`
- Modify: `src/lib/components/about/approach.svelte`
- Modify: `src/lib/components/about/chooseus.svelte`

**Interfaces:**
- Consumes: `RevealSection` from Task 1.
- Produces: nothing new consumed by later tasks.

- [ ] **Step 1: Rewrite `approach.svelte`**

```svelte
<section class="mx-auto max-w-3xl px-4 py-20 text-center sm:py-28">
	<h1 class="font-serif text-3xl leading-snug sm:text-4xl md:text-5xl">
		Our approach combines meticulous planning, innovative solutions, and a deep commitment to
		personalization.
	</h1>
	<p class="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
		By understanding your vision and goals, we design events that reflect your unique style while
		exceeding expectations. Leveraging industry expertise, trusted partnerships, and the latest
		trends, we seamlessly manage every detail to deliver exceptional, stress-free celebrations that
		leave a lasting impression.
	</p>
</section>
```

(Same paragraph as before, split into a large pull-quote first sentence plus a supporting paragraph — no words changed, just restructured typographically.)

- [ ] **Step 2: Rewrite `chooseus.svelte`**

```svelte
<script>
	const points = [
		{
			title: 'Every Event Begins with Your Vision',
			body: 'At Unique Event Productions, we believe every unforgettable event starts with your unique vision. We transform dreams into extraordinary realities, weaving your story into every detail to create events that are as memorable as they are one-of-a-kind.',
			img: 'https://res.cloudinary.com/db56favi8/image/upload/v1740907198/unique-event-productions/wedding1.jpg'
		},
		{
			title: 'The Power of Understanding',
			body: 'What sets us apart is our commitment to understanding you. By listening to your goals, preferences, and aspirations, we ensure no detail is overlooked. This personal touch results in events that reflect your personality, values, and style.',
			img: 'https://res.cloudinary.com/db56favi8/image/upload/v1740907499/unique-event-productions/Exhibition1.jpg'
		},
		{
			title: 'Where Creativity Meets Strategy',
			body: 'Our team blends artistic creativity with strategic planning to design intelligent, breathtaking events. From initial concepts to the finest details—décor, lighting, entertainment, and ambiance—every element is meticulously crafted to bring your vision to life seamlessly.',
			img: 'https://res.cloudinary.com/db56favi8/image/upload/v1740914903/unique-event-productions/festival1.jpg'
		},
		{
			title: 'Flawless Execution, Memorable Results',
			body: "With a focus on precision and professionalism, we ensure every event unfolds effortlessly. Whether it's an intimate gathering or a grand celebration, we manage all logistics behind the scenes, delivering extraordinary experiences that leave a lasting impression.",
			img: 'https://res.cloudinary.com/db56favi8/image/upload/v1740913810/unique-event-productions/concert2.jpg'
		}
	];
</script>

<section class="bg-muted/50 py-20 sm:py-28">
	<div class="mx-auto max-w-6xl px-4">
		<h2 class="mb-16 text-center font-serif text-3xl sm:text-4xl">Why Choose Us?</h2>
		<div class="flex flex-col gap-16 sm:gap-24">
			{#each points as point, i}
				<div
					class="grid items-center gap-8 md:grid-cols-2 md:gap-16 {i % 2 === 1
						? 'md:[&>*:first-child]:order-2'
						: ''}"
				>
					<div class="aspect-[4/3] overflow-hidden rounded-sm">
						<img src={point.img} alt={point.title} class="h-full w-full object-cover" />
					</div>
					<div>
						<h3 class="font-serif text-2xl sm:text-3xl">{point.title}</h3>
						<p class="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
							{point.body}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
```

(`wedding1.jpg`, `Exhibition1.jpg`, `festival1.jpg`, `concert2.jpg` are all existing Cloudinary URLs already used on the Our Work / Services pages — no new assets. Same four headings and paragraphs as before, verbatim, now paired with imagery in alternating rows instead of a plain justified text stack.)

- [ ] **Step 3: Rewrite `src/routes/about-us/+page.svelte`**

```svelte
<script lang="ts">
	import Approach from '$lib/components/about/approach.svelte';
	import Chooseus from '$lib/components/about/chooseus.svelte';
	import RevealSection from '$lib/components/ui/reveal-section.svelte';
</script>

<div class="w-full bg-background">
	<section class="mx-auto max-w-3xl px-4 py-20 text-center sm:py-28">
		<h1 class="font-serif text-4xl sm:text-5xl">Who We Are</h1>
		<div
			class="mx-auto mt-8 max-w-2xl space-y-6 text-left text-base leading-relaxed text-muted-foreground sm:text-lg"
		>
			<p>
				At Unique Event Productions, we transform dreams into unforgettable experiences with
				creativity, precision, and expertise. Based in Mangaluru, we serve clients locally and
				globally, delivering extraordinary celebrations—from elegant weddings and grand corporate
				galas to intimate parties and impactful non-profit events. Our full-service event
				management covers every detail, including venue selection, décor design, entertainment,
				and seamless coordination, ensuring your vision comes to life effortlessly.
			</p>
			<p>
				Driven by a passion for storytelling, we craft events that are as meaningful as they are
				visually stunning. Combining innovative solutions with a client-first philosophy, our
				talented team collaborates with you to create personalized, memorable experiences. Choose
				Unique Event Productions to make every moment as extraordinary as you.
			</p>
		</div>
	</section>

	<RevealSection>
		<Approach />
	</RevealSection>

	<RevealSection>
		<Chooseus />
	</RevealSection>

	<section class="mx-auto max-w-2xl px-4 py-20 text-center sm:py-28">
		<p class="text-base leading-relaxed text-muted-foreground sm:text-lg">
			Let Unique Event Productions be your partner in creating moments that last a lifetime.
			Contact us to begin planning your next exceptional event.
		</p>
	</section>
</div>
```

(Same three text blocks — "Who We Are" intro, then Approach, then Chooseus, then closing paragraph — same order, same words. The old ad-hoc `fly`/`fade` transitions with large `y: 200` offsets are replaced by the shared `RevealSection` scroll-reveal used consistently across the rest of the site.)

- [ ] **Step 4: Verify**

```bash
npm run check
```
Expected: no new errors.

Start dev server, `browse` skill: `goto http://localhost:5173/about-us`, `wait --networkidle`, `screenshot`, confirm all four "Why Choose Us" images load (not blank), `console --errors`.

- [ ] **Step 5: Commit**

```bash
git add src/routes/about-us/+page.svelte src/lib/components/about/approach.svelte src/lib/components/about/chooseus.svelte
git commit -m "feat: rebuild About Us page with pull-quote intro and alternating photo rows"
```

---

### Task 7: Rebuild Services page

**Files:**
- Delete: `src/lib/components/services/serviceCard.svelte`
- Delete: `src/lib/components/services/desktop-service-grid.svelte`
- Delete: `src/lib/components/services/mobile-service-grid.svelte`
- Delete: `src/lib/components/ui/ThreeDCardEffect/` (entire directory)
- Delete: `src/lib/components/ui/BentoGrid/` (entire directory)
- Create: `src/lib/components/services/service-card.svelte`
- Create: `src/lib/components/services/service-grid.svelte`
- Modify: `src/routes/services/+page.svelte`

**Interfaces:**
- Consumes: `RevealSection` from Task 1.
- Produces: `ServiceGrid` component — `import ServiceGrid from '$lib/components/services/service-grid.svelte';`, prop `services: { id: number; title: string; shortDesc: string; imageUrl: string }[]`. Not consumed by any later task.

- [ ] **Step 1: Delete the old bento/3D-tilt service components**

```bash
git rm src/lib/components/services/serviceCard.svelte
git rm src/lib/components/services/desktop-service-grid.svelte
git rm src/lib/components/services/mobile-service-grid.svelte
git rm -r src/lib/components/ui/ThreeDCardEffect
git rm -r src/lib/components/ui/BentoGrid
```

- [ ] **Step 2: Create `service-card.svelte`**

```svelte
<script lang="ts">
	export let service: {
		id: number;
		title: string;
		shortDesc: string;
		imageUrl: string;
	};
</script>

<div class="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-sm">
	<img
		src={service.imageUrl}
		alt={service.title}
		class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
	/>
	<div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"></div>
	<div class="relative z-10 p-6 text-white">
		<h3 class="font-serif text-xl sm:text-2xl">{service.title}</h3>
		<p class="mt-2 text-sm text-white/80">{service.shortDesc}</p>
		<a href="/contact-us" class="mt-4 inline-block border-b border-primary text-sm text-primary">
			Enquire
		</a>
	</div>
</div>
```

(No card links to a `/service/{id}` detail route anymore — those routes never existed in this codebase, so every "Learn More"-style link on the old service cards was already a 404. This card's only link goes to the real `/contact-us` route.)

- [ ] **Step 3: Create `service-grid.svelte`**

```svelte
<script lang="ts">
	import ServiceCard from './service-card.svelte';

	export let services: {
		id: number;
		title: string;
		shortDesc: string;
		imageUrl: string;
	}[];
</script>

<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
	{#each services as service (service.id)}
		<ServiceCard {service} />
	{/each}
</div>
```

- [ ] **Step 4: Rewrite `src/routes/services/+page.svelte`**

```svelte
<script lang="ts">
	import ServiceGrid from '$lib/components/services/service-grid.svelte';
	import RevealSection from '$lib/components/ui/reveal-section.svelte';

	const services = [
		{
			id: 1,
			title: 'Wedding Planner',
			shortDesc: 'From saat pheras to grand celebrations—crafted with culture, love, and perfection',
			imageUrl:
				'https://res.cloudinary.com/db56favi8/image/upload/v1740907500/unique-event-productions/wedding2.jpg'
		},
		{
			id: 2,
			title: 'Concerts & Live Shows',
			shortDesc: 'Beyond the beats, beyond the lights—where energy meets execution',
			imageUrl:
				'https://res.cloudinary.com/db56favi8/image/upload/v1740913810/unique-event-productions/concert1.jpg'
		},
		{
			id: 3,
			title: 'Corporate Events',
			shortDesc: 'Boardrooms to ballrooms, we script experiences that mean business',
			imageUrl:
				'https://res.cloudinary.com/db56favi8/image/upload/v1740914184/unique-event-productions/coporate1.avif'
		},
		{
			id: 4,
			title: 'Exhibition & Trade Shows',
			shortDesc: 'Your brand, center stage—designed to captivate, built to impress',
			imageUrl:
				'https://res.cloudinary.com/db56favi8/image/upload/v1740907500/unique-event-productions/Exhibition3.jpg'
		},
		{
			id: 5,
			title: 'Social Parties',
			shortDesc: 'Ordinary gatherings? Not on our watch—expect the unexpected',
			imageUrl:
				'https://res.cloudinary.com/db56favi8/image/upload/v1740907500/unique-event-productions/Party1.jpg'
		},
		{
			id: 6,
			title: 'Festival & Cultural Events',
			shortDesc: 'Tradition meets transformation—celebrations redefined',
			imageUrl:
				'https://res.cloudinary.com/db56favi8/image/upload/v1740914903/unique-event-productions/festival1.jpg'
		}
	];
</script>

<div class="mx-auto max-w-6xl px-4 py-20 sm:py-28">
	<h1 class="mb-16 text-center font-serif text-4xl sm:text-5xl">Services</h1>
	<RevealSection>
		<ServiceGrid {services} />
	</RevealSection>
</div>
```

(Same 6 services, same titles/descriptions/images, same order — only `link` and `className` (bento-grid-span) fields are dropped, since neither is used by the new uniform grid.)

- [ ] **Step 5: Verify**

```bash
npm run check
```
Expected: no new errors, no "module not found" errors for the deleted BentoGrid/ThreeDCardEffect imports (confirms nothing else referenced them).

Start dev server, `browse` skill: `goto http://localhost:5173/services`, `wait --networkidle`, `screenshot`, confirm all 6 cards show images (not blank — Cloudinary images take a moment to load, that's expected and matches earlier findings, not a bug), `console --errors`.

- [ ] **Step 6: Commit**

```bash
git add -A src/lib/components/services src/lib/components/ui/ThreeDCardEffect src/lib/components/ui/BentoGrid src/routes/services/+page.svelte
git commit -m "feat: rebuild Services page as a flat responsive grid, remove bento/3D-tilt system"
```

---

### Task 8: Rebuild Our Work gallery

**Files:**
- Modify: `src/lib/components/our-work/our-work.svelte`
- Modify: `src/lib/components/our-work/work-card.svelte`
- Delete: `src/lib/components/ui/card/` (entire directory)
- Delete: `src/lib/components/ui/select/` (entire directory)
- Delete: `src/lib/components/ui/tabs/` (entire directory)

**Interfaces:**
- Consumes: `RevealSection` from Task 1.
- Produces: nothing consumed by later tasks.

- [ ] **Step 1: Rewrite `work-card.svelte`** (drops the now-unneeded `ui/card` wrapper)

```svelte
<script lang="ts">
	export let imageUrl: string;
	export let category: string;
</script>

<div class="group relative mb-6 break-inside-avoid overflow-hidden rounded-lg">
	<img
		src={imageUrl}
		alt={category}
		class="w-full object-cover transition-transform duration-500 group-hover:scale-105"
	/>
	<span
		class="absolute bottom-3 left-3 rounded-sm bg-black/70 px-3 py-1 text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
	>
		{category}
	</span>
</div>
```

- [ ] **Step 2: Rewrite `our-work.svelte`** (masonry layout via CSS columns, plain-button filter pills instead of the boxed Tabs component, native `<select>` kept for mobile)

```svelte
<script lang="ts">
	import WorkCard from './work-card.svelte';
	import RevealSection from '$lib/components/ui/reveal-section.svelte';
	import type { WorkItem } from '$lib/types/our-work.ts';

	export let items: WorkItem[];

	let selectedCategory: string | undefined = 'All';

	$: categories = ['All', ...new Set(items.map((item) => item.category))];

	$: filteredItems =
		selectedCategory === 'All'
			? items
			: items.filter((item) => item.category === selectedCategory);
</script>

<div class="mx-auto max-w-6xl px-4">
	<!-- Mobile filter -->
	<div class="mb-10 w-full max-w-[220px] md:hidden">
		<select
			bind:value={selectedCategory}
			class="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm text-foreground"
		>
			{#each categories as category}
				<option value={category}>{category}</option>
			{/each}
		</select>
	</div>

	<!-- Desktop filter -->
	<div class="mb-10 hidden justify-end gap-8 md:flex">
		{#each categories as category}
			<button
				type="button"
				class="relative pb-1 text-sm transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:bg-primary after:transition-all after:duration-300 {selectedCategory ===
				category
					? 'text-foreground after:w-full'
					: 'text-muted-foreground after:w-0 hover:text-foreground'}"
				on:click={() => (selectedCategory = category)}
			>
				{category}
			</button>
		{/each}
	</div>

	<!-- Masonry grid -->
	<RevealSection class="columns-1 gap-6 sm:columns-2 lg:columns-3">
		{#each filteredItems as item (item.id)}
			<WorkCard {...item} />
		{/each}
	</RevealSection>
</div>
```

- [ ] **Step 3: Delete now-unused shadcn-svelte primitives**

Confirmed dead via `grep -rln "ui/card\|ui/select\|ui/tabs" src/ | grep -v "ui/card/\|ui/select/\|ui/tabs/"` returning zero remaining consumers after Steps 1–2 (their only prior consumer, `our-work.svelte`, no longer imports them):

```bash
git rm -r src/lib/components/ui/card
git rm -r src/lib/components/ui/select
git rm -r src/lib/components/ui/tabs
```

- [ ] **Step 4: Verify**

```bash
npm run check
```
Expected: no new errors, no missing-module errors (confirms the deleted `ui/card`/`ui/select`/`ui/tabs` really had no other consumers).

Start dev server, `browse` skill: `goto http://localhost:5173/our-work`, `wait --networkidle`, `screenshot`, confirm masonry columns render with varied image heights (not a uniform grid), click a filter pill (e.g. "Wedding"), `screenshot` again, confirm the grid filters down, `console --errors`. Also check mobile viewport (`browse viewport 375x812`) to confirm the `<select>` filter shows instead.

- [ ] **Step 5: Commit**

```bash
git add -A src/lib/components/our-work src/lib/components/ui/card src/lib/components/ui/select src/lib/components/ui/tabs
git commit -m "feat: rebuild Our Work gallery as masonry grid, remove unused card/select/tabs primitives"
```

---

### Task 9: Rebuild Contact Us page

**Files:**
- Modify: `src/lib/components/contact-us/contact-card.svelte`
- Modify: `src/lib/components/contact-us/timings.svelte`
- Modify: `src/lib/components/contact-us/faq-section.svelte`
- Modify: `src/routes/contact-us/+page.svelte`

**Interfaces:**
- Consumes: `RevealSection` from Task 1.
- Produces: nothing new consumed by later tasks. `Timings` component (already existed, just restyled) is imported into `+page.svelte` for the first time — it was dead code before this task.

- [ ] **Step 1: Rewrite `contact-card.svelte`**

```svelte
<script lang="ts">
	import { type Icon as IconType } from 'lucide-svelte';

	type ContactInfo = {
		icon: typeof IconType;
		name: string;
		details: string[];
	};

	export let info: ContactInfo;
</script>

<div
	class="flex flex-col items-center rounded-sm border border-border p-6 text-center transition-colors hover:border-primary/50"
>
	<svelte:component this={info.icon} class="mb-3 h-6 w-6 text-primary" />
	<h3 class="mb-2 font-serif text-lg">{info.name}</h3>
	<div class="flex w-full flex-col items-center gap-1">
		{#each info.details as detail}
			{#if info.name.toLowerCase().includes('phone')}
				<a
					href="tel:{detail.replace(/\D/g, '')}"
					class="break-words text-sm text-muted-foreground transition-colors hover:text-primary"
				>
					{detail}
				</a>
			{:else if info.name.toLowerCase().includes('email') || info.name
					.toLowerCase()
					.includes('mail')}
				<a
					href="https://mail.google.com/mail/?view=cm&fs=1&to={detail}"
					target="_blank"
					rel="noopener noreferrer"
					class="break-words text-sm text-muted-foreground transition-colors hover:text-primary"
				>
					{detail}
				</a>
			{:else}
				<p class="break-words text-sm text-muted-foreground">{detail}</p>
			{/if}
		{/each}
	</div>
</div>
```

- [ ] **Step 2: Rewrite `timings.svelte`** (same business-hours data, restyled to match `contact-card.svelte`)

```svelte
<script lang="ts">
	interface Schedule {
		days: string;
		hours: string;
	}

	const businessHours: Schedule[] = [
		{ days: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
		{ days: 'Saturday', hours: '9:00 AM - 4:00 PM' },
		{ days: 'Sunday', hours: '10:00 AM - 12:00 PM' }
	];
</script>

<div
	class="flex flex-col items-center rounded-sm border border-border p-6 text-center transition-colors hover:border-primary/50"
>
	<h3 class="mb-3 font-serif text-lg">Business Hours</h3>
	<div class="flex w-full flex-col items-center gap-2">
		{#each businessHours as schedule}
			<div class="flex flex-col items-center">
				<span class="text-sm text-foreground">{schedule.days}</span>
				<span class="text-sm text-muted-foreground">{schedule.hours}</span>
			</div>
		{/each}
	</div>
</div>
```

- [ ] **Step 3: Rewrite `faq-section.svelte`** (same 5 FAQs verbatim, including existing typos, restyled wrapper)

```svelte
<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion/index.ts';

	interface FAQItem {
		question: string;
		answer: string;
	}

	const faqs: FAQItem[] = [
		{
			question: 'Do you offer end-to-end event management?',
			answer:
				'Absolutely! From venue selection, décor, and catering to artist bookings and logistics, we handle everything.'
		},
		{
			question: "What's your typical event planning timeline?",
			answer:
				'We recommend atleast 1 month in advance for small or medium events and 2-3 months for large events.'
		},
		{
			question: 'Do you provide vendor coordination?',
			answer:
				'Yes,  we have tie-ups with top photographers, caterers, decorators, and makeup artists to ensure seamless execution of all event needs.'
		},
		{
			question: 'How can I reach you for urgent queries?',
			answer: 'You can call or WhatsApp us at +91 99026 64066  or email us at'
		},
		{
			question: "What's your cancellation policy?",
			answer: 'Full refund if cancelled 30 days before the event, 50% refund within 15-29 days.'
		}
	];
</script>

<div class="mx-auto w-full max-w-3xl rounded-sm border border-border px-4 py-10 md:px-8">
	<h2 class="mb-8 text-center font-serif text-2xl">Frequently Asked Questions</h2>
	<Accordion.Root>
		{#each faqs as faq, i}
			<Accordion.Item value={`item-${i}`}>
				<Accordion.Trigger class="py-4 font-sans text-base">{faq.question}</Accordion.Trigger>
				<Accordion.Content class="pb-4 text-sm text-muted-foreground"
					>{faq.answer}</Accordion.Content
				>
			</Accordion.Item>
		{/each}
	</Accordion.Root>
</div>
```

- [ ] **Step 4: Rewrite `src/routes/contact-us/+page.svelte`** (reinstates `Timings` as a 4th card)

```svelte
<script lang="ts">
	import { Phone, Mail, MapPin } from 'lucide-svelte';

	import ContactCard from '$lib/components/contact-us/contact-card.svelte';
	import Timings from '$lib/components/contact-us/timings.svelte';
	import FAQSection from '$lib/components/contact-us/faq-section.svelte';
	import RevealSection from '$lib/components/ui/reveal-section.svelte';

	const contactInfo = [
		{
			icon: Phone,
			name: 'Phone',
			details: ['+91 99026 64066']
		},
		{
			icon: Mail,
			name: 'Email',
			details: ['unique.event.productions2020@gmail.com']
		},
		{
			icon: MapPin,
			name: 'Location',
			details: ['Nr Marpalli Railway Bridge, Kukkikatte, Udupi, 576101']
		}
	];

	let form = {
		name: '',
		email: '',
		message: ''
	};

	let status: string = '';

	async function handleSubmit() {
		const res = await fetch('/api/contact', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(form)
		});

		if (res.ok) {
			status = 'Your message has been sent!';
			form = { name: '', email: '', message: '' };
		} else {
			status = 'Something went wrong. Please try again later.';
		}
	}
</script>

<div class="mx-auto max-w-5xl px-4 py-20 sm:py-28">
	<h1 class="mb-16 text-center font-serif text-4xl sm:text-5xl">Contact Us</h1>

	<RevealSection>
		<div class="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
			{#each contactInfo as info}
				<ContactCard {info} />
			{/each}
			<Timings />
		</div>
	</RevealSection>

	<RevealSection>
		<form
			on:submit|preventDefault={handleSubmit}
			class="mx-auto mb-16 max-w-2xl space-y-4 rounded-sm border border-border p-6 md:p-8"
		>
			<h2 class="text-center font-serif text-2xl">Send Us a Message</h2>

			<div class="flex flex-col space-y-2">
				<label for="name" class="text-sm font-medium">Your Name</label>
				<input
					bind:value={form.name}
					id="name"
					type="text"
					required
					class="rounded-sm border border-border bg-background p-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
				/>
			</div>

			<div class="flex flex-col space-y-2">
				<label for="email" class="text-sm font-medium">Your Email</label>
				<input
					bind:value={form.email}
					id="email"
					type="email"
					required
					class="rounded-sm border border-border bg-background p-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
				/>
			</div>

			<div class="flex flex-col space-y-2">
				<label for="message" class="text-sm font-medium">Message</label>
				<textarea
					bind:value={form.message}
					id="message"
					required
					rows="5"
					class="rounded-sm border border-border bg-background p-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
				></textarea>
			</div>

			<button
				type="submit"
				class="rounded-sm bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
			>
				Send Message
			</button>

			{#if status}
				<p class="mt-2 text-center text-sm text-green-700">{status}</p>
			{/if}
		</form>
	</RevealSection>

	<RevealSection>
		<FAQSection />
	</RevealSection>
</div>
```

(Same contact info, same form fields/validation/submit logic hitting the same `/api/contact` endpoint, same FAQ content. `Timings` — built but never rendered before this task — now appears as a 4th info card.)

- [ ] **Step 5: Verify**

```bash
npm run check
```
Expected: no new errors.

Start dev server, `browse` skill: `goto http://localhost:5173/contact-us`, `wait --networkidle`, `screenshot`, confirm 4 info cards show (Phone/Email/Location/Business Hours), fill the form (`fill` on name/email/message fields) and submit, confirm either a success or graceful failure message appears (email sending depends on `GMAIL_USER`/`GMAIL_PASS` env vars already configured in this project — a failure here due to missing env vars is a pre-existing condition, not a regression to fix), `console --errors`.

- [ ] **Step 6: Commit**

```bash
git add src/lib/components/contact-us/contact-card.svelte src/lib/components/contact-us/timings.svelte src/lib/components/contact-us/faq-section.svelte src/routes/contact-us/+page.svelte
git commit -m "feat: rebuild Contact Us page, reinstate Business Hours card"
```

---

### Task 10: Full-site verification pass

**Files:** none (verification only; fix-forward if issues are found, then commit those specific fixes).

**Interfaces:**
- Consumes: the complete rebuilt site from Tasks 1–9.
- Produces: nothing (terminal task).

- [ ] **Step 1: Static checks**

```bash
npm run check
npm run lint
```
Expected: `check` passes with no new errors. If `lint` reports Prettier diffs (likely, since hand-written code in this plan wasn't run through `prettier-plugin-tailwindcss`'s class-sorting), run:
```bash
npm run format
npm run lint
```
Expected: `lint` now passes. If `npm run format` changes files, review the diff is purely formatting (class-order, whitespace) and commit it:
```bash
git add -A
git commit -m "chore: format with prettier-plugin-tailwindcss"
```

- [ ] **Step 2: Route-by-route visual + console check**

Start the dev server (`npm run dev &`, `sleep 3`), then for each of `/`, `/about-us`, `/services`, `/our-work`, `/contact-us`:
```bash
browse goto http://localhost:5173/<route>
browse wait --networkidle
browse screenshot /tmp/<route-name>.png
browse console --errors
browse network
```
Expected for every route: HTTP 200, zero console errors, zero failed (4xx/5xx) network requests, screenshot shows real content (Fraunces headings, Cloudinary photography, gold accent, warm-neutral background — not blank/broken layout).

- [ ] **Step 3: Responsive check**

```bash
browse responsive /tmp/home
```
Repeat for each route. Expected: mobile (375x812), tablet (768x1024), desktop (1280x720) screenshots all show usable, non-overlapping layouts — mobile nav hamburger on `<md`, mobile `<select>` filter on the Our Work page, service grid collapsing to 1 column on mobile.

- [ ] **Step 4: Fix any regressions found**

If Steps 1–3 surface an issue (console error, broken image, layout overflow, failed request), fix it in the relevant component file from the task that owns it, re-run that task's verify step, then commit the fix with a message like `fix: <specific issue>`. Do not fold unrelated cleanup into these fix commits.

- [ ] **Step 5: Stop the dev server**

```bash
kill %1
```
(or whatever job number the `npm run dev &` from Step 2 was assigned).
