import { Button, buttonVariants } from '@/ui/button';
import { SparkleCard } from '@/ui/sparkle-card';
import { useToast } from '@pheralb/toast';
import { Sparkles } from 'lucide-react';
import { Github } from './icons';
import ExternalLink from '@/ui/external-link';

const Hero = () => {
  const toast = useToast();
  return (
    <SparkleCard
      className="rounded-md border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"
      useBottomDivider={false}
    >
      <div className="mb-4 flex flex-col space-y-1">
        <h1 className="text-5xl font-bold tracking-tight lg:text-4xl">Toast</h1>
        <p className="font-medium text-neutral-500 dark:text-neutral-400">
          An accessible and beautiful toast library for React.
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant="default"
          onClick={() =>
            toast.open({
              text: 'pheralb/toast',
              description: '✨ A beautiful toast library for React',
            })
          }
        >
          <Sparkles size={14} />
          <span>Render a toast</span>
        </Button>
        <ExternalLink
          href="https://github.com/pheralb/toast"
          className={buttonVariants({
            variant: 'outline',
          })}
        >
          <Github height={14} />
          <span>View on GitHub</span>
        </ExternalLink>
      </div>
    </SparkleCard>
  );
};

export default Hero;
