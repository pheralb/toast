export const cn = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

let toastIdCounter = 0;
export const generateRandomId = () => ++toastIdCounter;

export const prefersReducedMotion = () => {
  if (typeof window !== "undefined" && window.matchMedia !== undefined) {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  return false;
};

// Get system theme:
export const getSystemTheme = () => {
  if (typeof window !== "undefined") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "t_dark-theme"
      : "t_light-theme";
  }
  return "t_light-theme";
};
