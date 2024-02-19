import { FaGithub, FaTwitter } from 'react-icons/fa';

export type SocialLink = {
  platform: string;
  href: string;
  me?: string;
  text: string;
  icon: React.ReactNode;
  footerOnly?: boolean;
};

export type SiteInfo = {
  name: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  socialLinks: SocialLink[];
};

export const siteInfo: SiteInfo = {
  name: 'Shaif Arfan',
  title: 'Experienced Web Developer and Educator',
  description:
    'Crafting innovative solutions through comprehensive full-stack expertise in JavaScript and top-tier framework utilization.',
  image: {
    src: '/og/social.jpg',
    alt: 'Experienced Web Developer and Educator',
  },
  socialLinks: [
    {
      platform: 'github',
      href: 'https://github.com/shaifarfan',
      text: 'CifarX GitHub',
      icon: <FaGithub />,
    },
    {
      platform: 'twitter',
      href: 'https://x.com/shaifarfan08',
      text: 'CifarX Twitter',
      icon: <FaTwitter />,
    },
  ],
};
