import type { Position, Theme, Variant } from '@pheralb/toast';
import { create } from 'zustand';

interface DocsStore {
  toastPosition: Position;
  toastVariant: Variant;
  toastTheme: Theme;
  setToastPosition: (position: Position) => void;
  setToastVariant: (variant: Variant) => void;
  setToastTheme: (theme: Theme) => void;
}

export const useDocsStore = create<DocsStore>((set) => ({
  toastPosition: 'bottom-right',
  toastVariant: 'success',
  toastTheme: 'light',
  setToastPosition: (position) => set({ toastPosition: position }),
  setToastVariant: (variant) => set({ toastVariant: variant }),
  setToastTheme: (theme) => set({ toastTheme: theme }),
}));
