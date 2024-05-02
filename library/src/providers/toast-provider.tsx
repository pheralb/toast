import { type ReactNode, useMemo, useState } from 'react';
import type { ToastProps } from '../types/toast.types';

import { ToastContext } from '../hooks/toast-context';
import ToastComponent from '../components/toast';

type ToastProviderProperties = {
  children: ReactNode;
};

const generateRandomId = () => Math.floor(Math.random() * 1000000);

export const ToastProvider = ({ children }: ToastProviderProperties) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const openToast = (data: ToastProps) => {
    const newToast = {
      ...data,
      id: generateRandomId(),
    };
    setToasts((prevToasts) => [...prevToasts, newToast]);
  };

  const closeToast = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const contextValue = useMemo(
    () => ({
      open: openToast,
      close: closeToast,
    }),
    [],
  );

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      {toasts &&
        toasts.map((toast) => {
          return <ToastComponent key={toast.id} {...toast} />;
        })}
    </ToastContext.Provider>
  );
};
