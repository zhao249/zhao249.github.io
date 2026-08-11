/** Estimate reading time from raw markdown string */
export function getReadingTime(text: string, lang: 'zh' | 'en'): number {
  // Strip frontmatter
  const content = text.replace(/^---[\s\S]*?---\n?/, '');

  // Strip code blocks
  const noCodeBlocks = content.replace(/```[\s\S]*?```/g, '');

  // Strip inline code
  const noInlineCode = noCodeBlocks.replace(/`[^`]*`/g, '');

  // Strip markdown syntax: headers, bold, italic, links, images, blockquotes, lists
  const cleaned = noInlineCode
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/__([^_]+)__/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/_([^_]+)_/g, '$1')
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/\[([^\]]*)\]\(.*?\)/g, '$1')
    .replace(/^>\s*/gm, '')
    .replace(/^[-*+]\s+/gm, '')
    .replace(/^\d+\.\s+/gm, '')
    .replace(/<[^>]*>/g, '')
    .replace(/\n{2,}/g, '\n')
    .trim();

  if (lang === 'zh') {
    // Chinese: ~400 characters per minute
    return Math.ceil(cleaned.length / 400);
  } else {
    // English: ~200 words per minute
    const words = cleaned.split(/\s+/).filter(Boolean).length;
    return Math.ceil(words / 200);
  }
}
