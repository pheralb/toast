import { Link, useLocation } from '@remix-run/react';

import { SidebarRoutes } from '@/docs.routes';
import { cn } from '@/utils/index';
import SidebarFooter from './sidebarFooter';
import { iSidebar } from './sidebar.types';

const SidebarContent = ({ npmVersion }: iSidebar) => {
  const location = useLocation();
  return (
    <nav
      className={cn(
        'fixed h-[calc(100vh-4rem)] overflow-y-auto overflow-x-hidden pb-10',
        'bg-neutral-50 dark:bg-neutral-900',
        'flex flex-col',
      )}
    >
      <div className="flex flex-1 flex-col space-y-8 py-7">
        {SidebarRoutes.map((route) => (
          <div key={route.category}>
            <p className="mb-1 flex w-full items-center justify-between space-x-2 py-1 text-start text-sm text-neutral-600 dark:text-neutral-400">
              {route.category}
            </p>
            <div className="flex max-w-full flex-col">
              {route.routes.map((r) => (
                <Link
                  key={r.path}
                  to={r.path}
                  unstable_viewTransition
                  className={cn(
                    'px-4 py-2 text-sm',
                    'border-l border-neutral-200 dark:border-neutral-800',
                    'text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white',
                    'transition-colors',
                    location.pathname === r.path
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
      <SidebarFooter npmVersion={npmVersion} />
    </nav>
  );
};

export default SidebarContent;
