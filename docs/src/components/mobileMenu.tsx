import type { ReactNode } from 'react';
import { SidebarRoutes } from '@/docs.config';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/ui/dropdown-menu';
import { Button } from '@/ui/button';
import { MenuIcon } from 'lucide-react';

interface MobileMenuProps {
  className?: string;
}

const MobileMenu = (props: MobileMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={props.className} asChild>
        <Button
          variant="ghost"
          size="icon"
          className="mr-2 md:mr-0 md:hidden"
          aria-label="Open mobile menu"
        >
          <MenuIcon size={18} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={4} align="start">
        {SidebarRoutes.map((data) => (
          <div key={data.category} className="my-1">
            <DropdownMenuLabel className="font-normal text-neutral-500 dark:text-neutral-400">
              {data.category}
            </DropdownMenuLabel>
            {data.routes.map((route) => (
              <a href={route.path} key={route.title}>
                <DropdownMenuItem>{route.title}</DropdownMenuItem>
              </a>
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
