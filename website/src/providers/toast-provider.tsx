'use client';

import {
  ToastProvider as ToastGlobalProvider,
  type ToastProviderProperties,
} from '@pheralb/toast';
import { useTheme } from 'next-themes';

export function ToastProvider({ children, ...props }: ToastProviderProperties) {
  const { theme } = useTheme();
  const getTheme = () => {
    if (theme === 'dark') {
      return 'dark';
    }
    if (theme === 'light') {
      return 'light';
    }
    return 'system';
  };
  return (
    <ToastGlobalProvider {...props} theme={getTheme()} position="bottom-right">
      {children}
    </ToastGlobalProvider>
  );
}
