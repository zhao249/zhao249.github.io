export const UI = {
  zh: {
    siteTitle: 'ZHAO — 个人品牌站',
    siteDescription: 'ZHAO 的个人品牌展示站 — 作品、技能、里程碑、思考',
    nav: {
      works: '作品',
      blog: '博客',
      milestones: '里程碑',
    },
    theme: {
      dark: '深色模式',
      light: '亮色模式',
    },
    lang: {
      label: '切换语言',
      switchTo: 'English',
    },
    footer: {
      builtWith: '由 Astro 构建',
      rights: '版权所有',
    },
    notFound: {
      title: '页面未找到',
      description: '你访问的页面不存在。',
      backHome: '返回首页',
    },
    noTranslation: '该内容暂无{lang}版本',
    home: '首页',
    viewAll: '查看全部 →',
    readingTime: '{minutes} 分钟',
    backToList: '返回列表',
    previous: '上一篇',
    next: '下一篇',
  },
  en: {
    siteTitle: 'ZHAO — Personal Hub',
    siteDescription: "ZHAO's personal branding hub — works, skills, milestones, thoughts",
    nav: {
      works: 'Works',
      blog: 'Blog',
      milestones: 'Milestones',
    },
    theme: {
      dark: 'Dark Mode',
      light: 'Light Mode',
    },
    lang: {
      label: 'Switch Language',
      switchTo: '中文',
    },
    footer: {
      builtWith: 'Built with Astro',
      rights: 'All rights reserved',
    },
    notFound: {
      title: 'Page Not Found',
      description: "The page you're looking for doesn't exist.",
      backHome: 'Back to Home',
    },
    noTranslation: 'This content is not yet available in {lang}',
    home: 'Home',
    viewAll: 'View All →',
    readingTime: '{minutes} min read',
    backToList: 'Back to list',
    previous: 'Previous',
    next: 'Next',
  },
} as const;

export type Lang = 'zh' | 'en';
export type UIDict = typeof UI.zh;
