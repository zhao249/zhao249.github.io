import type { Lang } from '../i18n/ui';

interface SEOProps {
  lang: Lang;
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
  /** Map of locale → path for hreflang. Omit locales that don't have a translation. */
  alternates?: Record<string, string>;
}

export function generateSEOMeta(props: SEOProps): {
  title: string;
  meta: Array<Record<string, string>>;
  link: Array<Record<string, string>>;
} {
  const { lang, title, description, canonicalUrl, ogImage = '/images/og/default.png', alternates } = props;

  const meta: Array<Record<string, string>> = [
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:image', content: ogImage },
    { property: 'og:locale', content: lang === 'zh' ? 'zh_CN' : 'en_US' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: ogImage },
  ];

  const link: Array<Record<string, string>> = [
    { rel: 'canonical', href: canonicalUrl },
  ];

  // hreflang alternates — only for languages that actually have a translation
  if (alternates) {
    for (const [locale, href] of Object.entries(alternates)) {
      link.push({ rel: 'alternate', hreflang: locale, href });
    }
    // x-default: prefer zh if available, otherwise first alternate
    const xDefault = alternates['zh'] ?? Object.values(alternates)[0];
    if (xDefault) {
      link.push({ rel: 'alternate', hreflang: 'x-default', href: xDefault });
    }
  }

  return { title, meta, link };
}
