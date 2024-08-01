import { useState } from 'react';
import type {
  ToastPropsWithVariant,
  ToasterProperties,
} from '../types/toast.types';

import '../styles/toast-context.css';

import ToastComponent from './toast';
import { classNames, generateRandomId } from '../utils';

let openToastGlobal: (data: ToastPropsWithVariant) => void;

export const Toaster = ({
  maxToasts = 4,
  position = 'bottom-right',
  theme = 'system',
  toastFont,
}: ToasterProperties) => {
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

  openToastGlobal = openToast;

  return (
    toasts.length > 0 && (
      <section
        aria-label="Toast Notifications"
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
        {toasts.map((toast) => (
          <ToastComponent
            key={toast.id}
            theme={theme}
            toastPosition={position}
            onClose={() => closeToast(toast.id!)}
            {...toast}
          />
        ))}
      </section>
    )
  );
};

export const openToast = (data: ToastPropsWithVariant) => openToastGlobal(data);
