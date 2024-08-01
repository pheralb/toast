import { vitePlugin as remix } from '@remix-run/dev';

// Vite Config & Presets:
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { vercelPreset } from '@vercel/remix/vite';
import { flatRoutes } from 'remix-flat-routes';

// MDX Config & Plugins:
import mdx from '@mdx-js/rollup';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode, { type Options } from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import { HEADING_LINK_ANCHOR } from './app/ui/headings';

// Rehype Pretty Options:
const options = {
  theme: 'vesper',
} as Options;

export default defineConfig({
  plugins: [
    mdx({
      providerImportSource: '@mdx-js/react',
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        [rehypeSlug],
        [
          rehypeAutolinkHeadings,
          { behavior: 'wrap', properties: { className: HEADING_LINK_ANCHOR } },
        ],
        [rehypePrettyCode, options],
      ],
    }),
    remix({
      presets: [vercelPreset()],
      routes: async (defineRoutes) => {
        return flatRoutes('routes', defineRoutes, {
          ignoredRouteFiles: ['**/*.test.{js,jsx,ts,tsx}', '**/__*.*'],
        });
      },
    }),
    tsconfigPaths(),
  ],
});
