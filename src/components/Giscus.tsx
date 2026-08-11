import { useEffect, useRef } from 'react';
import GiscusReact from '@giscus/react';

interface Props {
  theme: 'dark' | 'light';
}

export default function GiscusComments({ theme }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Two-phase theme sync: onLoad + MutationObserver
  useEffect(() => {
    const sendTheme = (iframe: HTMLIFrameElement, t: string) => {
      iframe.contentWindow?.postMessage(
        { giscus: { setConfig: { theme: t } } },
        'https://giscus.app'
      );
    };

    // Phase 1: onLoad callback handled by @giscus/react internally.
    // We add an additional check after iframe appears in DOM.
    const timer = setTimeout(() => {
      const iframe = document.querySelector('iframe.giscus-frame') as HTMLIFrameElement | null;
      if (iframe) {
        sendTheme(iframe, theme);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [theme]);

  return (
    <div ref={containerRef} className="mt-12 border-t border-theme pt-8">
      <GiscusReact
        repo="zhao249/zhao249.github.io"
        repoId={import.meta.env.PUBLIC_GISCUS_REPO_ID ?? ''}
        category="Announcements"
        categoryId={import.meta.env.PUBLIC_GISCUS_CATEGORY_ID ?? ''}
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={theme}
        lang="zh-CN"
        loading="lazy"
      />
    </div>
  );
}
