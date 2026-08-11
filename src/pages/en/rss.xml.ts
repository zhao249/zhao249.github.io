import rss from '@astrojs/rss';

export async function GET() {
  const allPosts = Object.values(import.meta.glob('../../content/blog/*.en.md', { eager: true })) as any[];
  const posts = allPosts
    .filter((p: any) => !p.frontmatter.draft)
    .sort((a: any, b: any) => new Date(b.frontmatter.published).getTime() - new Date(a.frontmatter.published).getTime());

  return rss({
    title: 'ZHAO — Blog',
    description: 'Tech thoughts and personal reflections',
    site: 'https://zhao249.github.io',
    items: posts.map((p: any) => ({
      title: p.frontmatter.title,
      description: p.frontmatter.description,
      pubDate: new Date(p.frontmatter.published),
      link: `/en/blog/${p.frontmatter.slug}/`,
    })),
    customData: '<language>en</language>',
  });
}
