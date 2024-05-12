import { Button } from '@/ui/button';
import { SparkleCard } from '@/ui/sparkle-card';
import { useToast } from '@pheralb/toast';
import { Sparkles } from 'lucide-react';
import { Github } from './icons';

const Hero = () => {
  const toast = useToast();
  return (
    <SparkleCard className="rounded-md border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
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
              variant: 'success',
              description: '✨ A beautiful toast library for React',
            })
          }
        >
          <Sparkles size={14} />
          <span>Render a toast</span>
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.open({
              text: 'Hello, world!',
              description: 'This is a description',
              variant: 'info',
              action() {
                console.log('Action clicked');
              },
            })
          }
        >
          <Github height={14} />
          <span>View on GitHub</span>
        </Button>
      </div>
    </SparkleCard>
  );
};

export default Hero;
