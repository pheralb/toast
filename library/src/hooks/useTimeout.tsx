import { useEffect, useRef } from 'react';

export const useTimeout = (callbackFn: () => void, delay: number | null) => {
  const savedCallback = useRef(callbackFn);
  const timerId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    savedCallback.current = callbackFn;
  }, [callbackFn]);

  const startTimer = () => {
    if (delay !== null) {
      timerId.current = setTimeout(() => {
        savedCallback.current();
      }, delay);
    }
  };

  const clearTimer = () => {
    if (timerId.current) {
      clearTimeout(timerId.current);
      timerId.current = null;
    }
  };

  useEffect(() => {
    startTimer();
    return clearTimer;
  }, [delay]);

  return { startTimer, clearTimer };
};
