---
title: "Why I Chose Astro for My Personal Site"
slug: "why-astro"
published: "2026-08-01"
tags: ["tech-decisions", "frontend-architecture"]
description: "From Hugo Blox to Astro — the decision process and lessons learned about Static Site Generation."
draft: false
---

## Background

When deciding on a framework for my personal branding hub, I spent a lot of time researching existing solutions.

The main candidates:

1. **Hugo Blox** (formerly Wowchemy): modular and out-of-the-box, but too academic and Go templates are costly to customize
2. **Next.js**: powerful ecosystem but overkill — a static blog doesn't need SSR
3. **Astro**: Island Architecture, zero JS by default, HTML-like component model

## Why Astro Won

### Island Architecture

Astro's core innovation is Islands Architecture — pages ship zero JavaScript by default. Only interactive components get hydrated.

```
Traditional: entire page = JS → 200KB+
Astro:       only Giscus loads React → 60KB
```

### Content Management

`import.meta.glob` lets me manage all content in Markdown — no CMS, no database.

### Zero-Cost Deployment

Pure static HTML → GitHub Pages → `git push` to deploy. Zero cost.

## Lessons Learned

1. **Content Collections vs `import.meta.glob`**: Astro 5's Content Collections and legacy mode have friction. `import.meta.glob` is simpler
2. **Anti-FOUC script**: Theme switching requires a blocking inline script at the very top of `<head>`
3. **`slug` field conflict**: Content Collections has a built-in `slug` property — use a different name for custom slug fields

## Conclusion

If you want your own personal static site, Astro is the best choice in 2026.
