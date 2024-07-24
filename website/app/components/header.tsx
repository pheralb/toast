import { Link } from '@remix-run/react';

import { Logo } from '@/components/icons';
import { Button, buttonVariants } from '@/ui/button';
import { cn } from '@/utils';
import { ModeToggle } from './theme-toggle';
import { SocialLinks } from '@/docs.routes';
import ExternalLink from '@/ui/external-link';
import MobileMenu from './mobile-menu';
import { MenuIcon } from 'lucide-react';

const Header = () => {
  return (
    <nav
      className={cn(
        'sticky top-0 z-50 bg-neutral-50/90 backdrop-blur-sm dark:bg-neutral-900/90',
        'flex w-full py-4 dark:border-neutral-800',
      )}
    >
      <div className="container flex max-w-7xl items-center justify-between">
        <div className="flex items-center">
          <MobileMenu>
            <Button
              variant="ghost"
              size="icon"
              className="mr-2 md:mr-0 md:hidden"
              aria-label="Open mobile menu"
            >
              <MenuIcon size={18} />
            </Button>
          </MobileMenu>
          <Link
            to="/"
            className="group flex items-center space-x-3 font-medium tracking-tight transition-opacity duration-75 hover:opacity-80"
          >
            <Logo width={22} className="group-hover:animate-pulse" />
            <span className="text-neutral-700 dark:text-neutral-300">
              pheralb/toast
            </span>
          </Link>
        </div>
        <div className="flex items-center space-x-1">
          {SocialLinks.map((link) =>
            link.routes.map((route) => (
              <ExternalLink
                key={route.path}
                href={route.path}
                className={buttonVariants({
                  variant: 'ghost',
                  size: 'icon',
                  className: 'group',
                })}
              >
                {route.icon && (
                  <route.icon
                    height={18}
                    width={18}
                    className="transition-transform duration-300 group-hover:-translate-y-[1.2px]"
                  />
                )}
                <span className="sr-only">{route.title}</span>
              </ExternalLink>
            )),
          )}
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Header;
