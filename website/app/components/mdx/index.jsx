/* eslint-disable react/prop-types */

import { cn } from '../../utils';
import { CopyButton } from '../copyToClipboard';

export function Pre({
  children,
  raw,
  buttonClasses = 'absolute top-3 right-3 bg-zinc-900',
  ...props
}) {
  return (
    <pre {...props} className={cn('relative', props.className)}>
      {children}
      <CopyButton text={raw} className={buttonClasses} />
    </pre>
  );
}

/**
 * @type {import('mdx').MDXProviderComponents}
 */
export const mdxComponents = {};
