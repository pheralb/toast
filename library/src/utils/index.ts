// support for conditional classnames
export const classNames = (...classes: string[]): string =>
  classes.filter(Boolean).join(' ');

// generating random id
export const generateRandomId = () => Math.floor(Math.random() * 1000000);
