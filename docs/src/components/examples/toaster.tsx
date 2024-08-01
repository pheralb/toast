import type { CodeBlockProps } from './examples.types';

import type {
  ToastPosition as Position,
  ToastTheme as Theme,
} from '@pheralb/toast';

import { useRef } from 'react';
import { useDocsStore } from '@/store';

import { toast } from '@pheralb/toast';
import { Button } from '@/ui/button';
import {
  CheckIcon,
  CopyIcon,
  MoonIcon,
  RefreshCcwIcon,
  SunIcon,
} from 'lucide-react';
import { cn, copyToClipboard } from '@/utils';
import { CopyCodeBtnStyles } from '@/ui/copyCodeBtn';

const activeBtn = cn('border-neutral-600 dark:border-neutral-800');

const ProviderCodeBlock = (props: CodeBlockProps) => {
  const preRef = useRef<HTMLPreElement>(null);

  const copyPreContent = async () => {
    const content = preRef.current?.textContent ?? '';
    await copyToClipboard(content);
    toast.success({
      text: 'Copied to clipboard',
    });
  };

  return (
    <div className="relative">
      <pre
        style={{
          backgroundColor: '#101010',
          color: '#FFFFFF',
          margin: '0',
        }}
        data-language="jsx"
        data-theme="vesper"
        ref={preRef}
      >
        <code
          data-language="jsx"
          data-theme="vesper"
          style={{ display: 'grid' }}
        >
          <span data-line="">
            <span style={{ color: '#A0A0A0' }}>&lt;</span>
            <span style={{ color: '#FFC799' }}>Toaster</span>
            <span style={{ color: '#A0A0A0' }}> {props.label}=</span>
            <span style={{ color: '#99FFE4' }}>&quot;{props.value}&quot;</span>
            <span style={{ color: '#A0A0A0' }}>&nbsp;/&gt;</span>
          </span>
        </code>
      </pre>
      <button className={CopyCodeBtnStyles} onClick={copyPreContent}>
        <span className="sr-only">Copy</span>
        <CopyIcon size={16} />
      </button>
    </div>
  );
};

const Positions = () => {
  const { toastPosition, setToastPosition } = useDocsStore();
  const iconSize = 14;

  const handleChangePosition = (position: Position) => {
    toast.success({
      text: `Position changed`,
      description: `Position changed to ${position}`,
    });
    setToastPosition(position);
  };
  return (
    <div className="flex flex-col space-y-0">
      <div className="flex items-center space-x-2 overflow-y-auto py-2">
        <Button
          variant="outline"
          className={toastPosition === 'top-left' ? activeBtn : ''}
          onClick={() => handleChangePosition('top-left')}
        >
          {toastPosition === 'top-left' && <CheckIcon size={iconSize} />}
          <span>top-left</span>
        </Button>
        <Button
          variant="outline"
          className={toastPosition === 'top-right' ? activeBtn : ''}
          onClick={() => handleChangePosition('top-right')}
        >
          {toastPosition === 'top-right' && <CheckIcon size={iconSize} />}
          <span>top-right</span>
        </Button>
        <Button
          variant="outline"
          className={toastPosition === 'top-center' ? activeBtn : ''}
          onClick={() => handleChangePosition('top-center')}
        >
          {toastPosition === 'top-center' && <CheckIcon size={iconSize} />}
          <span>top-center</span>
        </Button>
        <Button
          variant="outline"
          className={toastPosition === 'bottom-right' ? activeBtn : ''}
          onClick={() => handleChangePosition('bottom-right')}
        >
          {toastPosition === 'bottom-right' && <CheckIcon size={iconSize} />}
          <span>bottom-right</span>
        </Button>
        <Button
          variant="outline"
          className={toastPosition === 'bottom-left' ? activeBtn : ''}
          onClick={() => handleChangePosition('bottom-left')}
        >
          {toastPosition === 'bottom-left' && <CheckIcon size={iconSize} />}
          <span>bottom-left</span>
        </Button>
        <Button
          variant="outline"
          className={toastPosition === 'bottom-center' ? activeBtn : ''}
          onClick={() => handleChangePosition('bottom-center')}
        >
          {toastPosition === 'bottom-center' && <CheckIcon size={iconSize} />}
          <span>bottom-center</span>
        </Button>
      </div>
      <ProviderCodeBlock label="position" value={toastPosition} />
    </div>
  );
};

const ThemeExamples = () => {
  const { toastTheme, setToastTheme } = useDocsStore();
  const iconSize = 14;

  const handleChangeTheme = (theme: Theme | undefined) => {
    if (theme === undefined) {
      toast.success({
        text: 'Theme reset to default',
      });
    } else {
      toast.success({
        text: `Theme changed to ${theme}`,
      });
    }
    setToastTheme(theme);
  };

  return (
    <div className="flex flex-col space-y-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 py-2">
          <Button
            variant="outline"
            className={toastTheme === 'light' ? activeBtn : ''}
            onClick={() => handleChangeTheme('light')}
          >
            {toastTheme === 'light' ? (
              <CheckIcon size={iconSize} />
            ) : (
              <SunIcon size={iconSize} />
            )}
            <span>light</span>
          </Button>
          <Button
            variant="outline"
            className={toastTheme === 'dark' ? activeBtn : ''}
            onClick={() => handleChangeTheme('dark')}
          >
            {toastTheme === 'dark' ? (
              <CheckIcon size={iconSize} />
            ) : (
              <MoonIcon size={iconSize} />
            )}
            <span>dark</span>
          </Button>
        </div>
        <Button variant="ghost" onClick={() => handleChangeTheme(undefined)}>
          <RefreshCcwIcon size={iconSize} />
          <span>reset</span>
        </Button>
      </div>
      <ProviderCodeBlock label="theme" value={toastTheme || 'system'} />
    </div>
  );
};

export { Positions, ThemeExamples };
