import type { ReactNode } from 'react';

export type Variant = 'success' | 'error' | 'warning' | 'info' | 'loading';

export type Position =
  | 'top-left'
  | 'top-right'
  | 'top-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom-center';
export type Theme = 'light' | 'dark' | 'system';

export interface Action {
  text?: string;
  onClick: () => void | (() => Promise<void>);
}

export type ToastProps = {
  id?: number;
  text: string;
  description?: string;
  icon?: ReactNode;
  delayDuration?: number;
  theme?: Theme;
  action?: Action;
};

export interface LoadingType {
  promise:
    | (() => Promise<void>)
    | Promise<void>
    | (() => Promise<any>)
    | Promise<unknown>;
  success: string;
  error: string;
  autoDismiss: boolean;
  onSuccess?: (data: any) => void;
  onError?: (error: Error) => void;
}

export type ToasterProperties = {
  theme?: Theme;
  maxToasts?: number;
  position?: Position;
  toastFont?: string;
};

export interface ToastPropsWithVariant extends ToastProps {
  variant?: Variant;
}

export interface ToastPropsWithLoading extends ToastPropsWithVariant {
  options?: LoadingType;
}
