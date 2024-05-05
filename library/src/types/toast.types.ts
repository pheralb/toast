import type { ReactNode } from 'react';

export type Variant = 'success' | 'error' | 'warning' | 'info';
export type Position =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom-center';

export type ToastProps = {
  id?: number;
  variant: Variant;
  text: string;
  description?: string;
  icon?: ReactNode;
  iconSize?: number;
  delayDuration?: number;
  action?: () => void | (() => Promise<void>);
};

export type ToastProviderProperties = {
  children: ReactNode;
  maxToasts?: number;
  position?: Position;
};
