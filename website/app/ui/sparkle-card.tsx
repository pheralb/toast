import { SparkleSvg, type Position } from '@/components/icons';
import { cn } from '@/utils';
import type { ReactNode } from 'react';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  sparklePositions?: Position[];
  useTopDivider?: boolean;
  useBottomDivider?: boolean;
  className?: string;
}

export const SparkleCard = ({
  children,
  sparklePositions = ['top-left'],
  useTopDivider = false,
  useBottomDivider = true,
  className,
  ...props
}: SectionProps) => {
  return (
    <>
      {useTopDivider && <div className="h-4 border-b" />}
      <section
        className={cn(
          'p-4 sm:p-12',
          sparklePositions.length > 0 && 'relative',
          className,
        )}
        {...props}
      >
        {children}
        {sparklePositions.length > 0 &&
          sparklePositions.map((sparklePosition, index) => {
            return (
              <SparkleSvg key={`sparkle_${index}`} position={sparklePosition} />
            );
          })}
      </section>
      {useBottomDivider && (
        <div className="h-4 border-b dark:border-neutral-800" />
      )}
    </>
  );
};
