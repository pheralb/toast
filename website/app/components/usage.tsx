import { Link } from '@remix-run/react';
import { Astro, Nextjs, Remix } from './icons';

const usageLinks = [
  {
    label: 'Next.js',
    to: '/docs/nextjs',
    icon: Nextjs,
  },
  {
    label: 'Remix',
    to: '/docs/remix',
    icon: Remix,
  },
  {
    label: 'Astro',
    to: '/docs/astro',
    icon: Astro,
  },
];

const Usage = () => {
  return (
    <div className="flex items-center space-x-2">
      {usageLinks.map((link) => {
        return (
          <Link
            key={link.to}
            to={link.to}
            className="text-md flex flex-col items-center space-y-3 rounded-md border border-neutral-200 p-[20px] text-sm no-underline shadow-sm transition-colors duration-100 hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-800/50"
          >
            <link.icon height={35} />
            <span>Install on {link.label}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Usage;
