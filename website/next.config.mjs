import createMDX from '@next/mdx';
import rehypePrettyCode from 'rehype-pretty-code';

// Next.js Config:
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@pheralb/toast'],
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

// Rehype Pretty Options:
/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: 'vesper',
};

// MDX Config:
const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, options]],
  },
});

export default withMDX(nextConfig);
