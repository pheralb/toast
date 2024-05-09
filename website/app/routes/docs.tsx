import { cn } from '@/utils';
import { Outlet } from '@remix-run/react';

export default function DocsLayout() {
  return (
    <article
      className={cn(
        'w-full max-w-3xl py-8',
        'prose prose-neutral dark:prose-invert',
        'prose-headings:font-medium prose-headings:tracking-tight',
        'prose-a:underline-offset-[4px] prose-a:decoration-solid dark:prose-a:decoration-neutral-500 prose-a:decoration-neutral-400',
        'prose-figure:my-0 prose-p:mb-1 prose-p:text-pretty',
        'prose-pre:border dark:prose-pre:border-neutral-800 prose-pre:border-neutral-200',
      )}
    >
      <Outlet />
    </article>
  );
}
