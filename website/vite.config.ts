import { vitePlugin as remix } from '@remix-run/dev';

// Vite Config & Presets:
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { vercelPreset } from '@vercel/remix/vite';

// MDX Config & Plugins:
import mdx from '@mdx-js/rollup';
import rehypePrettyCode, { type Options } from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import { postProcess, preProcess } from './rehype-plugins';

// Rehype Pretty Options:
const options = {
  theme: 'vesper',
} as Options;

export default defineConfig({
  plugins: [
    mdx({
      providerImportSource: '@mdx-js/react',
      remarkPlugins: [remarkGfm],
      rehypePlugins: [[rehypePrettyCode, options], preProcess, postProcess],
    }),
    remix({
      presets: [vercelPreset()],
    }),
    tsconfigPaths(),
  ],
});
