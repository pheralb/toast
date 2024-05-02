import type { ReactNode } from 'react';

export type Variant = 'success' | 'error' | 'warning' | 'info';

export type ToastProps = {
  id?: number;
  variant: Variant;
  text: string;
  description?: string;
  action?: () => void | (() => Promise<void>);
  icon?: ReactNode;
  iconSize?: number;
};
