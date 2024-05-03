import type { ToastProps } from '../types/toast.types';
import { createContext } from 'react';

type ToastContextValue = {
  open: (data: ToastProps) => void;
  close: (id: number) => void;
};

export const ToastContext = createContext<ToastContextValue>({
  open: (data: ToastProps) => data,
  close: (id: number) => id,
});
