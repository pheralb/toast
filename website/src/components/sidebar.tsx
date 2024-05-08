'use client';

import { DocsRoutes } from '@/routes';
import { buttonVariants } from '@/ui/button';
import { CardAnimatedBorder } from '@/ui/cards-spotlight';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/ui/collapsible';
import { cn } from '@/utils';
import { ArrowUpRight, NavArrowDown } from 'iconoir-react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SidebarContent = () => {
  const pathname = usePathname();
  return (
    <nav
      className={cn(
        '] fixed z-50 h-[calc(100vh-4rem)] overflow-y-auto overflow-x-hidden pb-10',
        'bg-white dark:bg-neutral-900',
        'flex flex-col',
      )}
    >
      <div className="flex flex-1 flex-col space-y-8 py-7">
        {DocsRoutes.map((route) => (
          <div key={route.category}>
            <p className="mb-1 flex w-full items-center justify-between space-x-2 py-1 text-start text-sm text-neutral-600 dark:text-neutral-400">
              {route.category}
            </p>
            <div className="flex max-w-full flex-col">
              {route.routes.map((r) => (
                <Link
                  key={r.path}
                  href={r.path}
                  className={cn(
                    'px-4 py-2 text-sm',
                    'border-l border-neutral-200 dark:border-neutral-800',
                    'text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white',
                    'transition-colors',
                    pathname === r.path
                      ? 'border-black font-medium text-black dark:border-white dark:text-white'
                      : 'bg-transparent',
                  )}
                >
                  {r.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full border-b border-neutral-200 py-2 text-sm dark:border-neutral-800">
        <p className="font-medium">Found an issue?</p>
        <a
          href="https://github.com/pheralb/toast/issues/new"
          target="_blank"
          rel="noreferrer"
          className="flex items-center py-1 text-neutral-600 transition-colors duration-100 hover:text-black dark:text-neutral-400 dark:decoration-neutral-700 dark:hover:text-white"
        >
          <span>Create an issue</span>
          <ArrowUpRight height={10} />
        </a>
      </div>
    </nav>
  );
};

export default SidebarContent;
