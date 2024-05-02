import type { ComponentProps, FC } from "react";

const Success: FC<ComponentProps<"svg">> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
    <path d="M128 24a104 104 0 10104 104A104.11 104.11 0 00128 24zm45.66 85.66l-56 56a8 8 0 01-11.32 0l-24-24a8 8 0 0111.32-11.32L112 148.69l50.34-50.35a8 8 0 0111.32 11.32z"></path>
  </svg>
);

const Warning: FC<ComponentProps<"svg">> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
    <path d="M236.8 188.09L149.35 36.22a24.76 24.76 0 00-42.7 0L19.2 188.09a23.51 23.51 0 000 23.72A24.35 24.35 0 0040.55 224h174.9a24.35 24.35 0 0021.33-12.19 23.51 23.51 0 00.02-23.72zM120 104a8 8 0 0116 0v40a8 8 0 01-16 0zm8 88a12 12 0 1112-12 12 12 0 01-12 12z"></path>
  </svg>
);

const Error: FC<ComponentProps<"svg">> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
    <path d="M128 24a104 104 0 10104 104A104.11 104.11 0 00128 24zm-8 56a8 8 0 0116 0v56a8 8 0 01-16 0zm8 104a12 12 0 1112-12 12 12 0 01-12 12z"></path>
  </svg>
);

const Info: FC<ComponentProps<"svg">> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
    <path d="M128 24a104 104 0 10104 104A104.11 104.11 0 00128 24zm-4 48a12 12 0 11-12 12 12 12 0 0112-12zm12 112a16 16 0 01-16-16v-40a8 8 0 010-16 16 16 0 0116 16v40a8 8 0 010 16z"></path>
  </svg>
);

export { Success, Warning, Error, Info };
