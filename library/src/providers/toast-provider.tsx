import { useMemo, useState } from 'react';
import type {
  ToastProps,
  ToastPropsWithVariant,
  ToastProviderProperties,
} from '../types/toast.types';

import '../styles/toast-context.css';

import { ToastContext } from '../hooks/toast-context';
import ToastComponent from '../components/toast';
import { classNames, generateRandomId } from '../utils';

export const ToastProvider = ({
  children,
  maxToasts = 4,
  position = 'top-left',
  theme = 'system',
  toastFont,
}: ToastProviderProperties) => {
  const [toasts, setToasts] = useState<ToastPropsWithVariant[]>([]);

  // Open a new toast:
  const openToast = (data: ToastPropsWithVariant) => {
    const newToast = {
      ...data,
      id: generateRandomId(),
    };
    setToasts((prevToasts) => {
      if (prevToasts.length >= maxToasts) {
        if (
          position === 'top-left' ||
          position === 'top-right' ||
          position === 'top-center'
        ) {
          return [newToast, ...prevToasts.slice(0, prevToasts.length - 1)];
        } else {
          return [...prevToasts.slice(1), newToast];
        }
      } else {
        if (
          position === 'top-left' ||
          position === 'top-right' ||
          position === 'top-center'
        ) {
          return [newToast, ...prevToasts];
        } else {
          return [...prevToasts, newToast];
        }
      }
    });
  };

  // Close a toast:
  const closeToast = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  // Context value:
  const contextValue = useMemo(
    () => ({
      default: (data: ToastProps) => {
        openToast({ ...data });
        return data;
      },
      success: (data: ToastProps) => {
        openToast({ variant: 'success', ...data });
        return data;
      },
      error: (data: ToastProps) => {
        openToast({ variant: 'error', ...data });
        return data;
      },
      warning: (data: ToastProps) => {
        openToast({ variant: 'warning', ...data });
        return data;
      },
      info: (data: ToastProps) => {
        openToast({ variant: 'info', ...data });
        return data;
      },
      close: closeToast,
    }),
    [],
  );

  // Toast container:
  const toastContainer = (
    <div
      className={classNames(
        't_toasts',
        position === 'top-left' ? 't_top-left' : '',
        position === 'top-right' ? 't_top-right' : '',
        position === 'top-center' ? 't_top-center' : '',
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
  );

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      {toastContainer}
    </ToastContext.Provider>
  );
};
