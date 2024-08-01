import { Link } from '@remix-run/react';
import { FrameworkGuides } from '@/docs.routes';

const Usage = () => {
  return (
    <div className="flex items-center space-x-2 overflow-hidden overflow-y-auto">
      {FrameworkGuides.map((guide) => {
        return guide.routes.map((route) => {
          return (
            <Link
              key={route.path}
              to={route.path}
              className="text-md flex w-full flex-col items-center space-y-3 rounded-md border border-neutral-200 p-[20px] text-sm no-underline shadow-sm transition-colors duration-100 hover:bg-neutral-100 md:w-40 dark:border-neutral-800 dark:hover:bg-neutral-800/50"
            >
              {route.icon && <route.icon height={35} />}
              <span className="hidden md:block">Install on {route.title}</span>
            </Link>
          );
        });
      })}
    </div>
  );
};

export default Usage;
