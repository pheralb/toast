import { type Options, defineConfig } from 'tsup';

export default defineConfig((options: Options) => ({
  entry: ['src/main.tsx'],
  clean: true,
  minify: true,
  target: 'esnext',
  external: ['react'],
  sourcemap: true,
  dts: true,
  format: ['esm', 'cjs'],
  injectStyle: true,
  tsconfig: 'tsconfig.json',
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
  ...options,
}));
