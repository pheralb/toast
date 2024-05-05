'use client';

import { DocsRoutes } from '@/routes';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/ui/collapsible';
import { cn } from '@/utils';
import { NavArrowDown } from 'iconoir-react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SidebarContent = () => {
  const pathname = usePathname();
  return (
    <nav
      className={cn(
        'fixed z-50 h-full overflow-y-auto overflow-x-hidden pb-10',
        'bg-white dark:bg-neutral-900',
      )}
    >
      <div className="flex flex-col space-y-8 py-7">
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
    </nav>
  );
};

export default SidebarContent;
