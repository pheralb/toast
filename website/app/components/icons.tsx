import { cn } from '@/utils';
import type { ComponentProps, FC } from 'react';

export type Position =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';

const Logo: FC<ComponentProps<'svg'>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="M224 71.1a8 8 0 01-10.78-3.42 94.13 94.13 0 00-33.46-36.91 8 8 0 118.54-13.54 111.46 111.46 0 0139.12 43.09A8 8 0 01224 71.1zM35.71 72a8 8 0 007.1-4.32 94.13 94.13 0 0133.46-36.91 8 8 0 10-8.54-13.54 111.46 111.46 0 00-39.12 43.09A8 8 0 0035.71 72zm186.1 103.94A16 16 0 01208 200h-40.8a40 40 0 01-78.4 0H48a16 16 0 01-13.79-24.06C43.22 160.39 48 138.28 48 112a80 80 0 01160 0c0 26.27 4.78 48.38 13.81 63.94zM150.62 200h-45.24a24 24 0 0045.24 0zM208 184c-10.64-18.27-16-42.49-16-72a64 64 0 00-128 0c0 29.52-5.38 53.74-16 72z" />
  </svg>
);

export const SparkleSvg = ({ position }: { position: Position }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(
        'absolute z-10 size-4 fill-black',
        position === 'top-right' && '-right-2 -top-2',
        position === 'bottom-left' && '-bottom-2 -left-2',
        position === 'bottom-right' && '-bottom-2 -right-2',
        position === 'top-left' && '-left-2 -top-2',
      )}
    >
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"></path>
    </svg>
  );
};

export { Logo };
