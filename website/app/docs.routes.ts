import type { SVGProps } from 'react';
import { X, Github, Nextjs, Remix } from './components/icons';

interface iDocsRoutes {
  category: string;
  routes: {
    title: string;
    path: string;
    icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  }[];
}

export const FrameworkGuides: iDocsRoutes[] = [
  {
    category: 'Framework Guides',
    routes: [
      {
        title: 'Next.js',
        path: '/nextjs',
        icon: Nextjs,
      },
      {
        title: 'Remix',
        path: '/remix',
        icon: Remix,
      },
    ],
  },
];

export const SocialLinks: iDocsRoutes[] = [
  {
    category: 'Social Links',
    routes: [
      {
        title: 'Twitter',
        path: 'https://twitter.com/pheralb_',
        icon: X,
      },
      {
        title: 'GitHub',
        path: 'https://github.com/pheralb/toast',
        icon: Github,
      },
    ],
  },
];

export const SidebarRoutes: iDocsRoutes[] = [
  {
    category: 'Introduction',
    routes: [
      {
        title: 'Getting Started',
        path: '/',
      },
    ],
  },
  {
    category: 'Framework Guides',
    routes: [
      {
        title: 'Next.js',
        path: '/nextjs',
      },
      {
        title: 'Remix',
        path: '/remix',
      },
    ],
  },
  {
    category: 'Components',
    routes: [
      {
        title: 'ToastProvider',
        path: '/provider',
      },
      {
        title: 'useToast',
        path: '/useToast',
      },
    ],
  },
  {
    category: 'Customization',
    routes: [
      {
        title: 'Dark Mode',
        path: '/dark-mode',
      },
    ],
  },
];
