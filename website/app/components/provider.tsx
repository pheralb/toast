import type { Position } from '@pheralb/toast';
import { useToast } from '@pheralb/toast';

import { useDocsStore } from '@/store';
import { Button } from '@/ui/button';
import { CheckIcon } from 'lucide-react';

interface CodeBlockProps {
  label: string;
  value: string;
}

const ProviderCodeBlock = (props: CodeBlockProps) => {
  return (
    <pre
      style={{
        backgroundColor: '#101010',
        color: '#FFFFFF',
        margin: '0',
      }}
      data-language="jsx"
      data-theme="vesper"
    >
      <code data-language="jsx" data-theme="vesper" style={{ display: 'grid' }}>
        <span data-line="">
          <span style={{ color: '#A0A0A0' }}>&lt;</span>
          <span style={{ color: '#FFC799' }}>ToastProvider</span>
          <span style={{ color: '#A0A0A0' }}> {props.label}=</span>
          <span style={{ color: '#99FFE4' }}>&quot;{props.value}&quot;</span>
          <span style={{ color: '#A0A0A0' }}>&gt;</span>
        </span>
        <span data-line="">
          <span style={{ color: '#A0A0A0' }}>&nbsp;&nbsp;&lt;</span>
          <span style={{ color: '#FFC799' }}>App</span>
          <span style={{ color: '#A0A0A0' }}> /&gt;</span>
        </span>
        <span data-line="">
          <span style={{ color: '#A0A0A0' }}>&lt;/</span>
          <span style={{ color: '#FFC799' }}>ToastProvider</span>
          <span style={{ color: '#A0A0A0' }}>&gt;</span>
        </span>
      </code>
    </pre>
  );
};

const Positions = () => {
  const { toastPosition, setToastPosition } = useDocsStore();
  const t = useToast();

  const handleChangePosition = (position: Position) => {
    t.open({
      text: `Position changed to ${position}`,
      variant: 'info',
    });
    setToastPosition(position);
  };
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center space-x-2 py-2">
        <Button
          onClick={() => handleChangePosition('top-left')}
          className="font-mono"
        >
          {toastPosition === 'top-left' && <CheckIcon size={16} />}
          <span>top-left</span>
        </Button>
        <Button
          onClick={() => handleChangePosition('top-right')}
          className="font-mono"
        >
          {toastPosition === 'top-right' && <CheckIcon size={16} />}
          <span>top-right</span>
        </Button>
        <Button
          onClick={() => handleChangePosition('bottom-right')}
          className="font-mono"
        >
          {toastPosition === 'bottom-right' && <CheckIcon size={16} />}
          <span>bottom-right</span>
        </Button>
        <Button
          onClick={() => handleChangePosition('bottom-left')}
          className="font-mono"
        >
          {toastPosition === 'bottom-left' && <CheckIcon size={16} />}
          <span>bottom-left</span>
        </Button>
        <Button
          onClick={() => handleChangePosition('bottom-center')}
          className="font-mono"
        >
          {toastPosition === 'bottom-center' && <CheckIcon size={16} />}
          <span>bottom-center</span>
        </Button>
      </div>
      <ProviderCodeBlock label="position" value={toastPosition} />
    </div>
  );
};

export { Positions };
