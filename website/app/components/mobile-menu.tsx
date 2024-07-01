import type { ReactNode } from 'react';
import { Link } from '@remix-run/react';
import { SidebarRoutes } from '@/docs.routes';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/ui/dropdown-menu';

interface MobileMenuProps {
  children: ReactNode;
  className?: string;
}

const MobileMenu = (props: MobileMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={props.className} asChild>
        {props.children}
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={4} align="start">
        {SidebarRoutes.map((data) => (
          <div key={data.category} className="my-1">
            <DropdownMenuLabel className="font-normal text-neutral-500 dark:text-neutral-400">
              {data.category}
            </DropdownMenuLabel>
            {data.routes.map((route) => (
              <Link to={route.path} key={route.title}>
                <DropdownMenuItem>{route.title}</DropdownMenuItem>
              </Link>
            ))}
            {data !== SidebarRoutes[SidebarRoutes.length - 1] && (
              <DropdownMenuSeparator />
            )}
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileMenu;
