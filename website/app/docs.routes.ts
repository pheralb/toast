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
        path: '/nextjs',
      },
    ],
  },
  {
    category: 'Settings',
    routes: [
      {
        title: 'Toast Provider',
        path: '/provider',
      },
      {
        title: 'Toast Props',
        path: '/props',
      },
    ],
  },
  {
    category: 'Customization',
    routes: [
      {
        title: 'Variants',
        path: '/variants',
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
