// support for conditional classnames
export const classNames = (...classes: string[]): string =>
  classes.filter(Boolean).join(' ');

// generating random id
export const generateRandomId = () => Math.floor(Math.random() * 1000000);

// Disable transitions when prefers reduced motion is enabled:
export const prefersReducedMotion = (() => {
  let shouldReduceMotion: boolean | undefined = undefined;
  return () => {
    if (shouldReduceMotion === undefined) {
      if (typeof window !== 'undefined' && window.matchMedia !== undefined) {
        const mediaQuery = window.matchMedia(
          '(prefers-reduced-motion: reduce)',
        );
        shouldReduceMotion = mediaQuery.matches;
      } else {
        shouldReduceMotion = false;
      }
    }
    return shouldReduceMotion;
  };
})();
