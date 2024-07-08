import { useRef } from 'react';

import { copyToClipboard } from '@/utils';
import { useToast } from '@pheralb/toast';
import { CopyIcon } from 'lucide-react';

export default function CodeBlock({
  children,
  ...props
}: React.HTMLProps<HTMLPreElement>) {
  const preRef = useRef<HTMLPreElement>(null);
  const t = useToast();

  const handleCopy = async () => {
    const content = preRef.current?.textContent ?? '';
    await copyToClipboard(content);
    t.success({
      text: 'Copied to clipboard',
    });
  };

  return (
    <div className="relative">
      <pre ref={preRef} {...props}>
        {children}
      </pre>
      <button
        onClick={handleCopy}
        className="absolute right-0 top-0 m-3 text-white opacity-50 transition-opacity hover:opacity-100"
      >
        <span className="sr-only">Copy</span>
        <CopyIcon size={16} />
      </button>
    </div>
  );
}
