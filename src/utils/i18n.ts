import type { Lang } from '../i18n/ui';

/** Detect language from URL pathname. Returns 'en' if path starts with /en/, otherwise 'zh'. */
export function getLangFromUrl(url: URL): Lang {
  const pathname = url.pathname;
  if (pathname === '/en' || pathname.startsWith('/en/')) {
    return 'en';
  }
  return 'zh';
}

/** Get the path for a given language. Strips or adds /en/ prefix as needed. */
export function getLocalizedPath(currentPath: string, targetLang: Lang): string {
  const normalized = currentPath.endsWith('/') && currentPath !== '/' ? currentPath.slice(0, -1) : currentPath;
  const isEn = normalized === '/en' || normalized.startsWith('/en/');

  if (targetLang === 'zh') {
    // Remove /en prefix
    if (!isEn) return normalized || '/';
    return normalized.replace(/^\/en/, '') || '/';
  } else {
    // Add /en prefix
    if (isEn) return normalized;
    return '/en' + (normalized === '/' ? '/' : normalized);
  }
}

/** Get the alternate URL for hreflang. Returns null if translation doesn't exist. */
export function getAlternateUrl(
  currentPath: string,
  targetLang: Lang,
  hasTranslation: boolean = true,
): string | null {
  if (!hasTranslation) return null;
  return getLocalizedPath(currentPath, targetLang);
}

/** Resolve a locale-aware slug to a content filename. E.g. "project-a" + "zh" → "project-a.zh" */
export function localeSlug(slug: string, lang: Lang): string {
  return `${slug}.${lang}`;
}
