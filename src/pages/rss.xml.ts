import rss from '@astrojs/rss';

export async function GET() {
  const allPosts = Object.values(import.meta.glob('../content/blog/*.zh.md', { eager: true })) as any[];
  const posts = allPosts
    .filter((p: any) => !p.frontmatter.draft)
    .sort((a: any, b: any) => new Date(b.frontmatter.published).getTime() - new Date(a.frontmatter.published).getTime());

  return rss({
    title: 'ZHAO — Blog',
    description: '技术思考与个人反思',
    site: 'https://zhao249.github.io',
    items: posts.map((p: any) => ({
      title: p.frontmatter.title,
      description: p.frontmatter.description,
      pubDate: new Date(p.frontmatter.published),
      link: `/blog/${p.frontmatter.slug}/`,
    })),
    customData: '<language>zh-CN</language>',
  });
}
