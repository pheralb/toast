import type { MetaFunction } from '@vercel/remix';
import { useToast } from '@pheralb/toast';
import { SparkleCard } from '@/ui/sparkle-card';
import { Button } from '@/ui/button';
import { Sparkle } from '@phosphor-icons/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  const toast = useToast();
  return (
    <div className="py-8">
      <SparkleCard className="rounded-md border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
        <div className="mb-4 flex flex-col space-y-1">
          <h1 className="text-5xl font-bold tracking-tight lg:text-4xl">
            Toast
          </h1>
          <p className="font-medium text-neutral-500 dark:text-neutral-400">
            An accessible and beautiful toast library for React.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="secondary"
            onClick={() =>
              toast.open({
                text: 'pheralb/toast',
                variant: 'success',
                description: '✨ A beautiful toast library for React',
              })
            }
          >
            <Sparkle height={14} width={14} />
            <span>Render a toast</span>
          </Button>
          <Button
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
            Show Toast With Description
          </Button>
        </div>
      </SparkleCard>
    </div>
  );
}
