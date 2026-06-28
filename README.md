# Feri DW — Portfolio Website

Personal portfolio website showcasing web development services, projects, and pricing for UMKM landing pages.

🌐 **Live:** [feridw.bali-teknik.com](https://feridw.bali-teknik.com)

## Features

- ✨ Dark theme with smooth scroll animations
- 🌍 Bilingual (English / Indonesian)
- 📱 Fully responsive (mobile-first)
- ⚡ Fast performance (Vite + optimized assets)
- 🔍 SEO optimized (meta tags, JSON-LD, sitemap)
- 💬 WhatsApp integration with unique pre-filled messages per CTA
- 📊 Dynamic project filtering & pagination
- ⭐ Client testimonials with auto-sliding carousel

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 19 |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS v4 |
| Animations | Custom useScrollReveal (IntersectionObserver) |
| Icons | Lucide React |
| i18n | react-i18next |
| Language | JavaScript (JSX) |

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/          # React components (one per section)
│   ├── Navbar.jsx       # Sticky nav + language toggle
│   ├── Hero.jsx         # Rotating tagline + CTA
│   ├── About.jsx        # Bio + stats + motto
│   ├── Services.jsx     # 3 pricing tiers
│   ├── Process.jsx      # 4-step workflow
│   ├── Portfolio.jsx    # Projects + Tech Stack
│   ├── Testimonials.jsx # Client reviews
│   ├── FAQ.jsx          # Accordion FAQ
│   ├── Contact.jsx      # Email + WhatsApp + socials
│   └── Footer.jsx       # Copyright + nav
├── data/                # All data (easy to update)
├── hooks/               # Custom hooks (useScrollReveal)
├── i18n/                # Translations (en.js, id.js)
├── index.css            # Theme tokens + animations
└── App.jsx              # Root component
```

## Sections

| # | Section | Description |
|---|---------|-------------|
| 01 | Hero | Rotating tagline, CTA buttons, CORE STACK, profile photo |
| 02 | About | Bio, stats (10+ projects, 10+ tech, 3+ years), motto |
| 03 | Services | Basic (Rp 1.5jt), Bisnis (Rp 2jt), Custom |
| 04 | Process | Briefing → Design → Build → Launch |
| 05 | Portfolio | 7 projects with filter + Tech Stack tab |
| 06 | Testimonials | 3 client reviews with star ratings |
| 07 | FAQ | Common questions (accordion) |
| 08 | Contact | Email, WhatsApp, socials |

## Documentation

- [PRD.md](PRD.md) — Product requirements & goals
- [CONVENTIONS.md](CONVENTIONS.md) — Code standards & patterns
- [AGENTS.md](AGENTS.md) — Architecture & key files
- [CHANGELOG.md](CHANGELOG.md) — Change history

## Contact

- 📧 Email: pandedwiwjy@gmail.com
- 💬 WhatsApp: +62 851-5906-5144
- 🐙 GitHub: [@Pande17](https://github.com/Pande17)
- 💼 LinkedIn: [Pande Feri](https://linkedin.com/in/pande-feri-146a17411/)
- 📸 Instagram: [@pandefw](https://instagram.com/pandefw)

## License

© 2026 Feri DW. All rights reserved.
