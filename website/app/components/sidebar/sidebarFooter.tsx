import {
  AlertTriangleIcon,
  ArrowUpRight,
  BoxIcon,
  HeartIcon,
} from 'lucide-react';
import { iSidebar } from './sidebar.types';

const SidebarFooter = ({ npmVersion }: iSidebar) => {
  const iconSize = 14;
  const externalStrokeIcon = 1.4;

  return (
    <div className="w-full border-b-2 border-dashed border-neutral-200 py-2 text-sm dark:border-neutral-800">
      <div className="font-medium">
        <a
          href={`https://github.com/pheralb/toast/releases/tag/${npmVersion}`}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center py-1 text-neutral-600 transition-colors duration-100 hover:text-black dark:text-neutral-400 dark:decoration-neutral-700 dark:hover:text-white"
        >
          <BoxIcon
            className="mr-1 group-hover:stroke-pink-600 dark:group-hover:stroke-pink-500"
            height={iconSize}
          />
          <span>v{npmVersion}</span>
          <ArrowUpRight height={iconSize} strokeWidth={externalStrokeIcon} />
        </a>
      </div>
      <a
        href="https://github.com/pheralb/toast/issues/new"
        target="_blank"
        rel="noreferrer"
        className="group flex items-center py-1 text-neutral-600 transition-colors duration-100 hover:text-black dark:text-neutral-400 dark:decoration-neutral-700 dark:hover:text-white"
      >
        <AlertTriangleIcon
          className="mr-1 group-hover:stroke-yellow-600 dark:group-hover:stroke-yellow-500"
          height={iconSize}
        />
        <span>Found a bug?</span>
        <ArrowUpRight height={12} strokeWidth={externalStrokeIcon} />
      </a>
      <a
        href="https://pheralb.dev"
        target="_blank"
        rel="noreferrer"
        className="group flex items-center py-1 text-neutral-600 transition-colors duration-100 hover:text-black dark:text-neutral-400 dark:decoration-neutral-700 dark:hover:text-white"
      >
        <HeartIcon
          className="mr-1 group-hover:animate-pulse group-hover:stroke-red-600"
          height={iconSize}
        />
        <span>Built by pheralb</span>
        <ArrowUpRight height={12} strokeWidth={externalStrokeIcon} />
      </a>
    </div>
  );
};

export default SidebarFooter;
