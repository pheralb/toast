'use client';

import { ToastProvider, type ToastProviderProperties } from '@pheralb/toast';
import { useTheme } from 'next-themes';

const ToastClientProvider = (props: ToastProviderProperties) => {
  const { theme } = useTheme();
  return (
    <ToastProvider
      toastFont="font-sans"
      maxToasts={10}
      theme={theme === 'dark' ? 'dark' : 'light'}
      {...props}
    />
  );
};

export default ToastClientProvider;
