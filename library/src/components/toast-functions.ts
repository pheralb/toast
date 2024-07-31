import { ToastPropsWithVariant } from '../types/toast.types';
import { openToast } from './toaster';

export const toast = {
  default: (data: ToastPropsWithVariant) => {
    openToast({ ...data });
  },
  success: (data: ToastPropsWithVariant) => {
    openToast({ ...data, variant: 'success' });
  },
  error: (data: ToastPropsWithVariant) => {
    openToast({ ...data, variant: 'error' });
  },
  warning: (data: ToastPropsWithVariant) => {
    openToast({ ...data, variant: 'warning' });
  },
  info: (data: ToastPropsWithVariant) => {
    openToast({ ...data, variant: 'info' });
  },
};
