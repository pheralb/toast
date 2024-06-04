import useSWR from 'swr';
import {
  AlertTriangleIcon,
  ArrowUpRight,
  BoxIcon,
  HeartIcon,
  Loader,
} from 'lucide-react';

interface NPM_REGISTRY_RESULT {
  _id: string;
  name: string;
  'dist-tags': DistTags;
}

interface DistTags {
  latest: string;
}

const NPM_REGISTRY_URL = 'https://registry.npmjs.org/@pheralb/toast';

function fetcher<T>(url: string) {
  return fetch(url).then((res) => res.json()) as Promise<T>;
}

const SidebarFooter = () => {
  const { data, isLoading } = useSWR<NPM_REGISTRY_RESULT>(
    NPM_REGISTRY_URL,
    fetcher,
  );
  const version = data?.['dist-tags']?.latest;
  const iconSize = 14;
  const externalStrokeIcon = 1.4;

  return (
    <div className="w-full border-b-2 border-dashed border-neutral-200 py-2 text-sm dark:border-neutral-800">
      <div className="font-medium">
        <a
          href={`https://github.com/pheralb/toast/releases/tag/v${version}`}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center py-1 text-neutral-600 transition-colors duration-100 hover:text-black dark:text-neutral-400 dark:decoration-neutral-700 dark:hover:text-white"
        >
          {isLoading ? (
            <>
              <Loader className="mr-1 animate-spin duration-700" size={12} />
              <span>Searching...</span>
            </>
          ) : (
            <>
              <BoxIcon
                className="mr-1 group-hover:stroke-pink-600 dark:group-hover:stroke-pink-500"
                height={iconSize}
              />
              <span>v{version}</span>
            </>
          )}
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
