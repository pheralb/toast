import type { ReactNode } from 'react';

export type Variant = 'success' | 'error' | 'warning' | 'info';
export type Position =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom-center';
export type Theme = 'light' | 'dark' | 'system';

export type ToastProps = {
  id?: number;
  variant: Variant;
  text: string;
  description?: string;
  icon?: ReactNode;
  iconSize?: number;
  delayDuration?: number;
  theme?: Theme;
  action?: () => void | (() => Promise<void>);
};

export type ToastProviderProperties = {
  children: ReactNode;
  theme?: Theme;
  maxToasts?: number;
  position?: Position;
};
