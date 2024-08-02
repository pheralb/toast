import type { ToastPosition, ToastTheme, ToastVariant } from '@pheralb/toast';
import { create } from 'zustand';

interface DocsStore {
  toastPosition: ToastPosition;
  toastVariant: ToastVariant;
  toastTheme: ToastTheme | undefined;
  setToastPosition: (position: ToastPosition) => void;
  setToastVariant: (variant: ToastVariant) => void;
  setToastTheme: (theme: ToastTheme | undefined) => void;
}

export const useDocsStore = create<DocsStore>((set) => ({
  toastPosition: 'bottom-right',
  toastVariant: 'success',
  toastTheme: undefined,
  setToastPosition: (position) => set({ toastPosition: position }),
  setToastVariant: (variant) => set({ toastVariant: variant }),
  setToastTheme: (theme) => set({ toastTheme: theme }),
}));
