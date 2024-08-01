import { defineConfig } from 'astro/config';

// Integrations:
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// Astro config:
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: { theme: 'vesper' },
      gfm: true,
    }),
  ],
});
