import { useMemo, useState } from 'react';
import type { ToastProps, ToastProviderProperties } from '../types/toast.types';

import '../styles/toast-context.css';

import { ToastContext } from '../hooks/toast-context';
import ToastComponent from '../components/toast';
import { classNames } from '../utils';

const generateRandomId = () => Math.floor(Math.random() * 1000000);

export const ToastProvider = ({
  children,
  maxToasts = 4,
  position = 'top-left',
  theme = 'system',
  toastFont,
}: ToastProviderProperties) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  // Open a new toast:
  const openToast = (data: ToastProps) => {
    const newToast = {
      ...data,
      id: generateRandomId(),
    };
    setToasts((prevToasts) => {
      if (prevToasts.length >= maxToasts) {
        return [newToast, ...prevToasts.slice(0, prevToasts.length - 1)];
      } else {
        return [newToast, ...prevToasts];
      }
    });
  };

  // Close a toast:
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
      <div
        className={classNames(
          't_toasts',
          position === 'top-left' ? 't_top-left' : '',
          position === 'top-right' ? 't_top-right' : '',
          position === 'bottom-left' ? 't_bottom-left' : '',
          position === 'bottom-right' ? 't_bottom-right' : '',
          position === 'bottom-center' ? 't_bottom-center' : '',
          toastFont ? toastFont : 't_default_font',
        )}
      >
        {toasts &&
          toasts.map((toast) => {
            return (
              <ToastComponent
                key={toast.id}
                theme={theme}
                toastPosition={position}
                onClose={() => closeToast(toast.id!)}
                {...toast}
              />
            );
          })}
      </div>
    </ToastContext.Provider>
  );
};
