import { vitePlugin as remix } from '@remix-run/dev';

// Vite Config & Presets:
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { vercelPreset } from '@vercel/remix/vite';

// MDX Config & Plugins:
import mdx from '@mdx-js/rollup';
import rehypePrettyCode, { type Options } from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';

// Rehype Pretty Options:
const options = {
  theme: 'vesper',
} as Options;

export default defineConfig({
  plugins: [
    mdx({
      remarkPlugins: [remarkGfm],
      rehypePlugins: [[rehypePrettyCode, options]],
    }),
    remix({
      presets: [vercelPreset()],
    }),
    tsconfigPaths(),
  ],
});
