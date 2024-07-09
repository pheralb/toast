import type { ToastProps } from '../types/toast.types';
import { createContext, useContext } from 'react';

interface ToastContextValue {
  default: (data: ToastProps) => ToastProps;
  success: (data: ToastProps) => ToastProps;
  error: (data: ToastProps) => ToastProps;
  warning: (data: ToastProps) => ToastProps;
  info: (data: ToastProps) => ToastProps;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error(
      '🔔 pheralb/toast: useToast must be used within a ToastProvider component. Go to toast.pheralb.dev/provider for more information.',
    );
  }
  return context;
};

export default ToastContext;
