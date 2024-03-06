import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

export type SocialLink = {
  platform: string;
  href: string;
  me?: string;
  text: string;
  icon: React.ReactNode;
  footerOnly?: boolean;
  email: string;
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
  email: string;
};

export const twitterHandle = '@shaifarfan08';

export const siteInfo: SiteInfo = {
  name: 'Shaif Arfan',
  title: 'Experienced Web Developer and Educator',
  description:
    'Crafting innovative solutions through comprehensive full-stack expertise in JavaScript and top-tier framework utilization.',
  email: 'shaifarfan08@gmail.com',
  image: {
    src: '/og/social.png',
    alt: 'Experienced Web Developer and Educator',
  },
  socialLinks: [
    {
      platform: 'Instagram',
      href: 'https://instagram.com/shaifarfan08',
      text: 'Arfan Instagram',
      icon: <FaInstagram />,
    },
    {
      platform: 'Facebook',
      href: 'https://www.facebook.com/fb.ShaifArfan08',
      text: 'Arfan Facebook',
      icon: <FaFacebook />,
    },
    {
      platform: 'twitter',
      href: 'https://x.com/shaifarfan08',
      text: 'Arfan Twitter',
      icon: <FaTwitter />,
    },
    {
      platform: 'linkedin',
      href: 'https://www.linkedin.com/in/shaifarfan08',
      text: 'Arfan LinkedIn',
      icon: <FaLinkedin />,
    },
    {
      platform: 'github',
      href: 'https://github.com/shaifarfan',
      text: 'Arfan GitHub',
      icon: <FaGithub />,
    },
  ],
};
