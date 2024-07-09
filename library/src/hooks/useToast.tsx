import { useContext } from 'react';
import { ToastContext } from './toast-context';

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error(
      '🔔 @pheralb/toast: useToast must be used within a ToastProvider. Go to toast.pheralb.dev/provider for more information.',
    );
  }
  return context;
};
