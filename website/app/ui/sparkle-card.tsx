import { SparkleSvg, type Position } from '@/components/icons';
import { cn } from '@/utils';
import type { ReactNode } from 'react';

/**
 * ✨ Sparkle Card created by suyalcinkaya
 * 📦 https://github.com/suyalcinkaya/gauge
 */

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
          'p-4 shadow-sm sm:p-12',
          sparklePositions.length > 0 && 'relative',
          className,
        )}
        {...props}
      >
        {children}
        {sparklePositions.length > 0 &&
          sparklePositions.map((sparklePosition, index) => {
            return (
              <SparkleSvg
                key={`sparkle_${index}`}
                position={sparklePosition}
                className="hover:animate-rotate"
              />
            );
          })}
      </section>
      {useBottomDivider && (
        <div className="mb-2 h-4 border-b-2 border-dotted dark:border-neutral-800" />
      )}
    </>
  );
};
