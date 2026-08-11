export interface SkillItem {
  name: string;
  level: 'mastered' | 'proficient' | 'working' | 'learning';
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface SiteConfig {
  name: string;
  tagline: Record<'zh' | 'en', string>;
  bio: Record<'zh' | 'en', string>;
  avatar: string;
  socials: Array<{
    name: string;
    url: string;
    icon: string;
  }>;
}

export const siteConfig: SiteConfig = {
  name: 'ZHAO',
  tagline: {
    zh: '全栈开发者 · 开源爱好者 · 终身学习者',
    en: 'Full-Stack Developer · Open Source · Lifelong Learner',
  },
  bio: {
    zh: '热爱构建优雅的软件系统。专注于 Web 全栈开发与开源社区贡献。\n相信技术的力量可以改变世界，正在这条路上持续探索。',
    en: "I build elegant software systems. Focused on full-stack web development and open source.\nI believe technology can change the world, and I'm exploring that path every day.",
  },
  avatar: 'src/assets/avatar.jpg',
  socials: [
    { name: 'GitHub', url: 'https://github.com/zhao249', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourname', icon: 'linkedin' },
    { name: 'Twitter/X', url: 'https://x.com/yourhandle', icon: 'twitter' },
    { name: 'Email', url: 'mailto:hello@zhao249.me', icon: 'email' },
  ],
};

export const skills = {
  zh: [
    {
      category: '编程语言',
      items: [
        { name: 'TypeScript', level: 'proficient' as const },
        { name: 'Python', level: 'proficient' as const },
        { name: 'Go', level: 'working' as const },
        { name: 'Rust', level: 'learning' as const },
      ],
    },
    {
      category: '前端框架',
      items: [
        { name: 'React / Next.js', level: 'mastered' as const },
        { name: 'Astro', level: 'proficient' as const },
        { name: 'Vue', level: 'working' as const },
      ],
    },
    {
      category: '工具与基础设施',
      items: [
        { name: 'Docker', level: 'working' as const },
        { name: 'Git', level: 'mastered' as const },
        { name: 'Linux', level: 'proficient' as const },
      ],
    },
  ],
  en: [
    {
      category: 'Languages',
      items: [
        { name: 'TypeScript', level: 'proficient' as const },
        { name: 'Python', level: 'proficient' as const },
        { name: 'Go', level: 'working' as const },
        { name: 'Rust', level: 'learning' as const },
      ],
    },
    {
      category: 'Frontend',
      items: [
        { name: 'React / Next.js', level: 'mastered' as const },
        { name: 'Astro', level: 'proficient' as const },
        { name: 'Vue', level: 'working' as const },
      ],
    },
    {
      category: 'Tools & Infra',
      items: [
        { name: 'Docker', level: 'working' as const },
        { name: 'Git', level: 'mastered' as const },
        { name: 'Linux', level: 'proficient' as const },
      ],
    },
  ],
};
