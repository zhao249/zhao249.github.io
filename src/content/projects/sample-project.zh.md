---
title: "示例项目：个人品牌站"
tagline: "一个专属于自己的模块化个人品牌展示网站"
urlSlug: "personal-branding-hub"
tags: ["Astro", "Tailwind CSS", "TypeScript"]
featured: true
date: "2026-08-10"
github: "https://github.com/zhao249/zhao249.github.io"
demo: "https://zhao249.github.io"
imageAlt: "个人品牌站首页截图"
---

## 背景与动机

我一直需要一个能全面展示自己的地方——不只是简历，而是技能、作品、人生轨迹的完整呈现。现有的方案要么太学术（Hugo Blox），要么太单一（纯博客），所以我决定自己做一个。

## 技术挑战与解决方案

### 挑战一：Bento Grid 响应式布局

需要在大屏 6 列、中屏 3 列、小屏 1 列之间无缝切换，同时保持卡片的视觉层次。

**方案**：使用 CSS Grid + Tailwind 响应式断点，`grid-auto-rows: minmax(100px, auto)` 保持行高一致，`col-span` 按断点变化。

### 挑战二：双语内容管理

中英文内容需要独立维护但共享同一个 slug 系统。

**方案**：采用双文件策略（`.zh.md` / `.en.md`），Astro Content Collections 提供类型安全，前端根据路由 locale 筛选对应语言内容。

### 挑战三：主题切换无闪烁

用户选择亮色模式后刷新页面不能出现暗色闪烁。

**方案**：`<head>` 最前面内联阻塞脚本，在任何 CSS 加载前读取 localStorage 并设置 `<html>` class。

## 成果与数据

- 8 个页面全部静态输出
- Lighthouse Performance ≥ 95
- 零服务器成本（GitHub Pages）
- 中英双语，深色/亮色双主题

## 学到的经验

1. Tailwind CSS 4 + `@tailwindcss/vite` 是 2026 年 Astro 站点的最佳实践
2. 防 FOUC 脚本必须放在 `<head>` 最前面，`is:inline` 不经打包
3. Bento Grid 用 `grid-auto-rows` 统一行高比固定行高更灵活
