import type { Variant } from '@pheralb-toast/extra-types';
import type { CodeBlockProps } from './examples.types';

import { useRef, useState } from 'react';
import { Button } from '@/ui/button';
import { useToast } from '@pheralb/toast';
import JSConfetti from 'js-confetti';
import { CopyIcon, PartyPopperIcon } from 'lucide-react';
import { copyToClipboard } from '@/utils';
import { CopyCodeBtnStyles } from '../mdx/codeBlock';

const UseToastCodeBlock = (props: CodeBlockProps) => {
  const preRef = useRef<HTMLPreElement>(null);
  const t = useToast();

  const copyPreContent = async () => {
    const content = preRef.current?.textContent ?? '';
    await copyToClipboard(content);
    t.success({
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
        data-language="ts"
        data-theme="vesper"
      >
        <code
          data-language="ts"
          data-theme="vesper"
          style={{ display: 'block' }}
        >
          <span data-line="">
            <span style={{ color: 'rgb(255, 255, 255)' }}>toast.</span>
            <span style={{ color: 'rgb(255, 199, 153)' }}>{props.value}</span>
            <span style={{ color: 'rgb(255, 255, 255)' }}>({`{`}</span>
          </span>
          <span data-line="">
            <span style={{ color: 'rgb(255, 255, 255)' }}> text: </span>
            <span style={{ color: 'rgb(153, 255, 228)' }}>
              &apos;A {props.label} toast 🚀&apos;
            </span>
            <span style={{ color: 'rgb(255, 255, 255)' }}>,</span>
          </span>
          <span data-line="">
            <span style={{ color: 'rgb(255, 255, 255)' }}> description: </span>
            <span style={{ color: 'rgb(153, 255, 228)' }}>
              &apos;✨ A beautiful toast library for React&apos;
            </span>
          </span>
          <span data-line="">
            <span style={{ color: 'rgb(255, 255, 255)' }}>{`});`}</span>
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

const UseToastVariantExamples = () => {
  const [toastVariant, setToastVariant] = useState<string>('success');
  const variants: Variant[] = ['success', 'error', 'warning', 'info'];
  const t = useToast();

  const handleChangeVariant = (variant: Variant) => {
    setToastVariant(variant);
    t[variant]({
      text: `A ${variant} toast 🚀`,
      description: '✨ @pheralb/toast',
    });
  };

  const handleDefault = () => {
    setToastVariant('default');
    t.default({
      text: 'A default toast 🚀',
      description: '✨ @pheralb/toast',
    });
  };

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center space-x-2 overflow-y-auto pb-2">
        <Button variant="outline" onClick={() => handleDefault()}>
          default
        </Button>
        {variants.map((variant) => (
          <Button
            key={variant}
            variant="outline"
            onClick={() => handleChangeVariant(variant)}
          >
            {variant}
          </Button>
        ))}
      </div>
      <UseToastCodeBlock label={toastVariant} value={toastVariant} />
    </div>
  );
};

const UseToastActionsExamples = () => {
  const t = useToast();

  const handleChangeVariant = () => {
    t.default({
      text: `A toast with confetti 🎉`,
      description: 'Click the button to see the confetti',
      icon: <PartyPopperIcon size={14} />,
      action: {
        onClick: () => {
          if (typeof window !== 'undefined') {
            const confetti = new JSConfetti();
            confetti.addConfetti({
              confettiRadius: 3,
              confettiNumber: 100,
              confettiColors: [
                '#14532d',
                '#ff477e',
                '#f7f7f7',
                '#ffcc00',
                '#ffcc00',
              ],
            });
          }
        },
      },
    });
  };

  return (
    <Button
      className="mb-2"
      variant="outline"
      onClick={() => handleChangeVariant()}
    >
      <PartyPopperIcon size={16} />
      <span>Show a Toast with Confetti</span>
    </Button>
  );
};

export { UseToastVariantExamples, UseToastActionsExamples };
