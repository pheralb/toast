import { useEffect, useRef, useState } from 'react';

export const useTimeout = (callbackFn: () => void, delay: number) => {
  const [remainingTime, setRemainingTime] = useState<number>(delay);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const timerIdRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const startTimer = () => {
    if (timerIdRef.current !== null) return;

    startTimeRef.current = Date.now();
    timerIdRef.current = window.setTimeout(() => {
      callbackFn();
      timerIdRef.current = null;
    }, remainingTime);
  };

  const clearTimer = () => {
    if (timerIdRef.current !== null) {
      window.clearTimeout(timerIdRef.current);
      timerIdRef.current = null;
    }
  };

  const pauseTimer = () => {
    if (timerIdRef.current !== null && startTimeRef.current !== null) {
      clearTimer();
      const elapsedTime = Date.now() - startTimeRef.current;
      setRemainingTime(remainingTime - elapsedTime);
      setIsPaused(true);
    }
  };

  const resumeTimer = () => {
    if (isPaused) {
      startTimer();
      setIsPaused(false);
    }
  };

  useEffect(() => {
    startTimer();

    return () => clearTimer();
  }, []);

  return { pauseTimer, resumeTimer, clearTimer };
};
