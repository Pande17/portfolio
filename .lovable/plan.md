# Feri DW — Portfolio Landing Page

A single-page, scrollable portfolio with anchor-linked nav sections. Minimalist monochrome aesthetic with subtle blue (#3173D6) accents, generous whitespace, strong typographic hierarchy, and rounded components. Fully responsive.

## Design system (src/styles.css)

- Base palette: near-white background `oklch(0.99 0 0)`, ink foreground `oklch(0.18 0 0)`, muted grays for secondary text and borders.
- Accent: `--accent-blue: oklch(0.55 0.16 255)` (≈ #3173D6) used sparingly for CTA, active tab, link underlines, focus ring.
- Typography: Inter Tight (display, tight tracking) + Inter (body) via Google Fonts. Large display sizes for section titles (clamp 2.5–4.5rem), comfortable body (16–17px).
- Radius: `--radius: 1rem` for cards, `0.75rem` for buttons, `9999px` for pill tabs/badges.
- Subtle 1px borders, soft shadow only on hover, no gradients on surfaces.

## Page structure (single route: `src/routes/index.tsx`)

Sticky top navbar + 4 anchored sections (`#home`, `#about`, `#portfolio`, `#contact`) + footer. Smooth scroll via CSS `scroll-behavior: smooth` and `scroll-margin-top` on sections.

### Navbar (`src/components/Navbar.tsx`)
- Sticky, translucent backdrop blur, hairline bottom border.
- Left: empty / small dot logo. Right: "Feri DW" wordmark followed by nav links Home · About · Portfolio · Contact (per request — name and nav both on the right). On mobile collapses to a hamburger sheet.

### Section 1 — Home (`Hero.tsx`)
- Two-column desktop grid (60/40). Left: small eyebrow ("Web Developer · Available for work"), H1 display title, 2-line description, primary CTA "View Portfolio" (blue) + ghost CTA "Contact Me", short About blurb, and a horizontal row of key skill pills (React, TypeScript, Node, Tailwind, etc.).
- Right: rounded-2xl portrait photo with subtle ring, small floating badge ("Open to work").
- Mobile: stacked, photo above text.

### Section 2 — About (`About.tsx`)
- Two-column: Left text column with section label "About", heading, paragraph bio, a bordered/blue-tinted "motto" callout box, and a CTA button "See my work" → scrolls to `#portfolio`. Right: secondary portrait photo.
- Below the two columns: 3 stat cards in a grid — Projects (e.g., 40+), Achievements (e.g., 12), Years of Experience (e.g., 5+). Each card: large number, label, tiny icon.

### Section 3 — Portfolio (`Portfolio.tsx`)
- Centered section header + shadcn `Tabs` with 3 pill triggers: Projects · Achievements · Skills.
- Tab 1 Projects: responsive grid (1/2/3 cols) of 6 project cards. Each: cover image, title, short description, stack tags, external-link icon.
- Tab 2 Achievements: grid of image cards (certificates / awards) with caption + issuer + year overlay.
- Tab 3 Skills: grouped sections (Frontend, Backend, Tools) each a clean card with icon + name + proficiency line; consistent spacing.

### Section 4 — Contact (`Contact.tsx`)
- Two-column layout. Left: "Let's connect" heading + email + grid of social cards (GitHub, LinkedIn, X/Twitter, Instagram, Dribbble) — each a rounded card with icon, handle, hover lift.
- Right: testimonials — 3 dummy comment cards with avatar, name, role, quote, subtle star row.

### Footer
- Minimal: name, year, small nav repeat, built-with note.

## Images

Use `imagegen--generate_image` (fast tier) to create:
- `hero-portrait.png` — clean editorial portrait (hero right)
- `about-portrait.jpeg` — secondary portrait (about right)
- `project-1..6.jpg` — abstract minimal project covers
- `achievement-1..4.jpg` — certificate-style images

Saved under `src/assets/` and imported as ES modules.

## Technical notes

- Routing stays on `src/routes/index.tsx` (single page) — sections use `id` anchors. Per project rules normally separate routes are preferred for distinct pages, but the user explicitly requested a one-page landing with in-page section navigation, which is the valid exception (smooth-scroll sections).
- Components live in `src/components/portfolio/` (Navbar, Hero, About, Portfolio, Contact, Footer, StatCard, ProjectCard, SkillGroup, SocialCard, TestimonialCard).
- Uses existing shadcn primitives: `button`, `card`, `tabs`, `badge`, `sheet` (mobile nav), `avatar`.
- Add Google Fonts `<link>` via root route `head()` and font CSS vars in `styles.css`.
- Update `__root.tsx` head meta: title "Feri DW — Web Developer", description, og tags.
- Active-section nav highlighting via IntersectionObserver hook.
- Responsive: Tailwind breakpoints, mobile-first; test mental layouts at 375 / 768 / 1280.

## Out of scope

- No backend, no form submission (Contact section is link cards only).
- No CMS — content is hardcoded with sensible dummy data the user can edit.
