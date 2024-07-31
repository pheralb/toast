'use client';

import { Toaster, ToastTheme, type ToasterProperties } from '@pheralb/toast';
import { useTheme } from 'next-themes';

const ToastClientProvider = (props: ToasterProperties) => {
  const { theme } = useTheme();
  return (
    <Toaster
      toastFont="font-sans"
      maxToasts={10}
      theme={theme as ToastTheme}
      {...props}
    />
  );
};

export default ToastClientProvider;
