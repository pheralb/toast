// support for conditional classnames
export const classNames = (...classes: string[]): string =>
  classes.filter(Boolean).join(' ');

// generating random id
export const generateRandomId = () => Math.floor(Math.random() * 1000000);

// Disable transitions when prefers reduced motion is enabled:
export const prefersReducedMotion = (() => {
  let shouldReduceMotion: boolean | undefined = undefined;
  return () => {
    if (shouldReduceMotion === undefined && typeof window !== 'undefined') {
      const mediaQuery = matchMedia('(prefers-reduced-motion: reduce)');
      shouldReduceMotion = !mediaQuery || mediaQuery.matches;
    }
    return shouldReduceMotion;
  };
})();
