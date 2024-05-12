import { Link } from '@remix-run/react';

import X, { Github, Logo } from '@/components/icons';
import { buttonVariants } from '@/ui/button';
import { cn } from '@/utils/index';
import { ModeToggle } from './theme-toggle';

const socialLinks = [
  {
    label: 'Twitter',
    href: 'https://twitter.com/pheralb_',
    icon: X,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/pheralb/toast',
    icon: Github,
  },
];

const Header = () => {
  return (
    <nav
      className={cn(
        'sticky top-0 z-50 bg-white/90 backdrop-blur-sm dark:bg-neutral-900/90',
        'flex w-full border-b border-neutral-200 py-3 dark:border-neutral-800',
      )}
    >
      <div className="container flex max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-2 font-medium tracking-tight transition-opacity duration-75 hover:opacity-80"
        >
          <Logo width={22} />
          <span className="text-neutral-700 dark:text-neutral-300">
            pheralb/toast
          </span>
        </Link>
        <div className="flex items-center space-x-1">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: 'ghost', size: 'icon' })}
            >
              <link.icon height={18} width={18} />
              <span className="sr-only">{link.label}</span>
            </a>
          ))}
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Header;
