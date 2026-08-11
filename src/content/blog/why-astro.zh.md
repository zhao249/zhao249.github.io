---
title: "为什么我选择 Astro 作为个人站框架"
slug: "why-astro"
published: "2026-08-01"
tags: ["技术选型", "前端架构"]
description: "从 Hugo Blox 到 Astro 的决策过程，以及 Static Site Generation 的技术选型思考。"
draft: false
---

## 背景

在决定做个人品牌展示站时，我花了大量时间调研现有方案。

主要候选有三：

1. **Hugo Blox**（原 Wowchemy）：模块化、开箱即用，但学术基因太重、Go 模板定制成本高
2. **Next.js**：生态庞大但太重，静态博客不需要 SSR
3. **Astro**：岛架构、零 JS 默认输出、组件模型像 HTML

## 为什么 Astro 胜出

### 岛架构

Astro 的核心创新是 Islands Architecture——页面默认输出零字节 JavaScript，只有需要交互的组件才 "hydrate"。

```
传统框架：整个页面都是 JS → 200KB+
Astro：   只有 Giscus 评论加载 React → 60KB
```

### 内容管理

`import.meta.glob` 让我用 Markdown 管理所有内容，无需 CMS、无需数据库。

### 零成本部署

纯静态 HTML → GitHub Pages → `git push` 即上线。一分钱不花。

## 踩过的坑

1. **Content Collections vs `import.meta.glob`**：Astro 5 的 Content Collections 和 legacy mode 切换有坑，最终选 `import.meta.glob` 最简单
2. **防 FOUC 脚本**：主题切换必须在 `<head>` 最前面用 `is:inline` 阻塞执行
3. **`slug` 字段冲突**：Content Collections 内置了 `slug` 属性，自定义字段需要另取名

## 结论

如果你也想要一个专属于自己的静态站点，Astro 是 2026 年最好的选择。
