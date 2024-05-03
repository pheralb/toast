import { useEffect, useRef } from 'react';

export const useTimeout = (callbackFn: () => void, duration: number) => {
  const savedCallback = useRef(callbackFn);

  useEffect(() => {
    savedCallback.current = callbackFn;
  }, [callbackFn]);

  useEffect(() => {
    const id = setTimeout(() => savedCallback.current(), duration);
    return () => clearTimeout(id);
  }, []);
};
