---
title: "Sample Project: Personal Branding Hub"
tagline: "A modular personal branding showcase website"
urlSlug: "personal-branding-hub"
tags: ["Astro", "Tailwind CSS", "TypeScript"]
featured: true
date: "2026-08-10"
github: "https://github.com/zhao249/zhao249.github.io"
demo: "https://zhao249.github.io"
imageAlt: "Homepage screenshot of the personal branding hub"
---

## Background & Motivation

I always needed a single place to present myself comprehensively — not just a resume, but a complete picture of skills, works, and life milestones. Existing solutions were either too academic or too narrow, so I built my own.

## Technical Challenges & Solutions

### Challenge 1: Bento Grid Responsive Layout

The layout needs to switch seamlessly between 6-column desktop, 3-column tablet, and single-column mobile while maintaining visual hierarchy.

**Solution**: CSS Grid with Tailwind responsive breakpoints, `grid-auto-rows: minmax(100px, auto)` for consistent row heights, and breakpoint-specific `col-span` values.

### Challenge 2: Bilingual Content Management

Chinese and English content need independent maintenance while sharing the same slug system.

**Solution**: Dual-file strategy (`.zh.md` / `.en.md`) with Astro Content Collections for type safety, built-time locale filtering based on route.

### Challenge 3: Theme Switching Without Flash

Users who prefer light mode shouldn't see a dark flash on page refresh.

**Solution**: Inline blocking script at the top of `<head>`, reading localStorage and setting `<html>` class before any CSS loads.

## Results

- 8 pages, all static HTML output
- Lighthouse Performance ≥ 95
- Zero hosting cost (GitHub Pages)
- Bilingual (ZH + EN), dual theme (dark + light)

## Lessons Learned

1. Tailwind CSS 4 + `@tailwindcss/vite` is the 2026 best practice for Astro sites
2. Anti-FOUC scripts must be at the very top of `<head>` with `is:inline`
3. Using `grid-auto-rows` for Bento Grid is more flexible than fixed row heights
