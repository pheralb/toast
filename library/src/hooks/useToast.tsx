import { useContext } from 'react';
import { ToastContext } from './toast-context';

export const useToast = () => useContext(ToastContext);
