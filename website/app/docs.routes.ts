interface iDocsRoutes {
  category: string;
  routes: {
    title: string;
    path: string;
  }[];
}

export const DocsRoutes: iDocsRoutes[] = [
  {
    category: 'Introduction',
    routes: [
      {
        title: 'Getting Started',
        path: '/',
      },
      {
        title: 'Usage with Next.js',
        path: '/docs/nextjs',
      },
    ],
  },
  {
    category: 'Settings',
    routes: [
      {
        title: 'Positions',
        path: '/docs/positions',
      },
      {
        title: 'Variants',
        path: '/docs/variants',
      },
    ],
  },
  {
    category: 'Customization',
    routes: [
      {
        title: 'Rich Colors',
        path: '/docs/colors',
      },
      {
        title: 'Dark Mode',
        path: '/docs/dark-mode',
      },
      {
        title: 'Tailwind CSS',
        path: '/docs/tailwind-css',
      },
    ],
  },
];
