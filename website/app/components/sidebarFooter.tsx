import useSWR from 'swr';
import { ArrowUpRight, Loader } from 'lucide-react';

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

  return (
    <div className="w-full border-b-2 border-dashed border-neutral-200 py-2 text-sm dark:border-neutral-800">
      <div className="font-medium">
        {isLoading ? (
          <Loader className="animate-spin" size={14} />
        ) : (
          <a
            href={`https://github.com/pheralb/toast/releases/tag/v${version}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center py-1 text-neutral-600 transition-colors duration-100 hover:text-black dark:text-neutral-400 dark:decoration-neutral-700 dark:hover:text-white"
          >
            <span>v{version}</span>
            <ArrowUpRight height={12} />
          </a>
        )}
      </div>
      <a
        href="https://github.com/pheralb/toast/issues/new"
        target="_blank"
        rel="noreferrer"
        className="flex items-center py-1 text-neutral-600 transition-colors duration-100 hover:text-black dark:text-neutral-400 dark:decoration-neutral-700 dark:hover:text-white"
      >
        <span>Found a bug?</span>
        <ArrowUpRight height={12} />
      </a>
    </div>
  );
};

export default SidebarFooter;
