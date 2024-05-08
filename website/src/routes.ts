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
        title: 'Positions',
        path: '/positions',
      },
      {
        title: 'Variants',
        path: '/variants',
      },
    ],
  },
  {
    category: 'Customization',
    routes: [
      {
        title: 'Rich Colors',
        path: '/colors',
      },
      {
        title: 'Dark Mode',
        path: '/dark-mode',
      },
      {
        title: 'Tailwind CSS',
        path: '/tailwind-css',
      },
    ],
  },
];
