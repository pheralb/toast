import type { Position, Theme, Variant } from '@pheralb/toast';
import { create } from 'zustand';

interface DocsStore {
  toastPosition: Position;
  toastVariant: Variant;
  toastTheme: Theme | undefined;
  setToastPosition: (position: Position) => void;
  setToastVariant: (variant: Variant) => void;
  setToastTheme: (theme: Theme | undefined) => void;
}

export const useDocsStore = create<DocsStore>((set) => ({
  toastPosition: 'bottom-right',
  toastVariant: 'success',
  toastTheme: undefined,
  setToastPosition: (position) => set({ toastPosition: position }),
  setToastVariant: (variant) => set({ toastVariant: variant }),
  setToastTheme: (theme) => set({ toastTheme: theme }),
}));
