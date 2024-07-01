import { useState } from 'react';
import { cn } from '@/utils';
import { ClipboardIcon, CheckIcon } from 'lucide-react';

const buttonClasses =
  'flex items-center text-xs font-medium text-white rounded';

interface CopyButtonProps {
  text: string;
  className?: string;
}

export function CopyButton({ text, className }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2500);
  };

  const Icon = isCopied ? CheckIcon : ClipboardIcon;

  return (
    <button
      disabled={isCopied}
      onClick={copy}
      className={cn(buttonClasses, className)}
    >
      <Icon className="mr-1 h-4 w-4" />
      <span>{isCopied ? 'Copied!' : 'Copy'}</span>
    </button>
  );
}
