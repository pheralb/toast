import { cn } from '@/utils';

export const proseClasses = cn(
  'prose prose-neutral dark:prose-invert',
  'prose-headings:font-semibold prose-headings:tracking-tight',
  'prose-h1:mb-0 prose-h2:mb-4 prose-h2:font-medium',
  'prose-a:underline-offset-[4px] prose-a:decoration-solid dark:prose-a:decoration-neutral-500 prose-a:decoration-neutral-400',
  'prose-figure:my-0 prose-p:mb-1 prose-p:text-pretty',
  'prose-ol:mb-0',
  'prose-th:text-start',
  'prose-pre:my-0 prose-pre:border prose-pre:border-neutral-100 prose-pre:dark:border-neutral-800',
  'prose-inline-code:rounded prose-inline-code:font-mono prose-inline-code:p-[2px] prose-inline-code:border prose-inline-code:border-neutral-300 prose-inline-code:bg-neutral-200/50 prose-inline-code:dark:border-neutral-800 prose-inline-code:dark:bg-neutral-800/50',
  'prose-quoteless prose-blockquote:not-italic prose-blockquote:text-neutral-700 dark:prose-blockquote:text-neutral-300 prose-blockquote:text-sm',
);
