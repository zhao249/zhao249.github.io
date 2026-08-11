# ZHAO — Personal Branding Hub

**个人品牌展示站** — 模块化的 Bento Grid 视觉风格站点，展示作品、技能、里程碑、思考。

## Tech Stack

- **Astro 5** — Static Site Generator
- **Tailwind CSS 4** — Utility-first CSS with CSS-first config
- **Vanilla JS** — Theme toggle (zero React for global UI)
- **React 19** — Giscus comments (blog-only island)
- **GitHub Pages** — Zero-cost deployment

## Features

- 🎨 Bento Grid layout with responsive breakpoints
- 🌙 Dark/Light theme with zero FOUC
- 🌐 Bilingual (ZH/EN) with Astro i18n routing
- 📝 Blog with reading time, related posts, RSS
- 🚀 Projects with prev/next navigation
- 🏆 Milestones timeline with type-colored dots
- 💬 Giscus comments (blog posts only)
- ♿ Keyboard navigation, focus-visible, reduced-motion

## Getting Started

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output → dist/
```

## Project Structure

```
src/
├── content/         # Markdown + JSON data
│   ├── projects/    # *.zh.md / *.en.md
│   ├── blog/        # *.zh.md / *.en.md
│   ├── milestones/  # milestones.json
│   └── accomplishments.json
├── components/      # Astro + React components
│   ├── global/      # Header, Footer
│   ├── home/        # Bento cards
│   └── shared/      # BentoCard, Timeline, SkillBar, TagBadge
├── layouts/         # BaseLayout, BlogPostLayout
├── pages/           # Routes + [slug] dynamic pages
├── i18n/            # UI dictionary (ZH/EN)
├── utils/           # i18n, SEO, reading-time
└── styles/          # global.css (Tailwind + CSS vars)
```

## License

MIT
