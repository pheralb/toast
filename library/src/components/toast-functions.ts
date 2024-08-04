import type {
  ToastPropsWithLoading,
  ToastPropsWithVariant,
} from '../types/toast.types';
import { openToast } from './toaster';

interface ToastFunctions {
  default: (data: ToastPropsWithVariant) => ToastPropsWithVariant;
  success: (data: ToastPropsWithVariant) => ToastPropsWithVariant;
  error: (data: ToastPropsWithVariant) => ToastPropsWithVariant;
  warning: (data: ToastPropsWithVariant) => ToastPropsWithVariant;
  info: (data: ToastPropsWithVariant) => ToastPropsWithVariant;
  loading: (data: ToastPropsWithLoading) => ToastPropsWithLoading;
}

export const toast: ToastFunctions = {
  default: (data: ToastPropsWithVariant) => {
    openToast({ ...data });
    return data;
  },
  success: (data: ToastPropsWithVariant) => {
    openToast({ ...data, variant: 'success' });
    return data;
  },
  error: (data: ToastPropsWithVariant) => {
    openToast({ ...data, variant: 'error' });
    return data;
  },
  warning: (data: ToastPropsWithVariant) => {
    openToast({ ...data, variant: 'warning' });
    return data;
  },
  info: (data: ToastPropsWithVariant) => {
    openToast({ ...data, variant: 'info' });
    return data;
  },
  loading: (data: ToastPropsWithLoading) => {
    openToast({ ...data, variant: 'loading' });
    return data;
  },
};
