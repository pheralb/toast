import type { ToastProps } from '../types/toast.types';
import { createContext } from 'react';

type ToastContextValue = {
  default: (data: ToastProps) => ToastProps;
  success: (data: ToastProps) => ToastProps;
  error: (data: ToastProps) => ToastProps;
  warning: (data: ToastProps) => ToastProps;
  info: (data: ToastProps) => ToastProps;
};

export const ToastContext = createContext<ToastContextValue>({
  default: (data: ToastProps) => data,
  success: (data: ToastProps) => data,
  error: (data: ToastProps) => data,
  warning: (data: ToastProps) => data,
  info: (data: ToastProps) => data,
});
