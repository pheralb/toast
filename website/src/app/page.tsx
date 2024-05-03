'use client';

import { useToast } from 'react-bell';

export default function Home() {
  const toast = useToast();
  return (
    <>
      <button
        onClick={() =>
          toast?.open({
            text: 'This is a warning message. 😢',
            variant: 'warning',
            delayDuration: 5000,
            action: () => {
              alert('Action Clicked');
            },
          })
        }
      >
        Show Warning
      </button>
      <button
        onClick={() =>
          toast?.open({
            text: 'Hello World! This is a toast message.',
            variant: 'info',
            action: () => {
              alert('Action Clicked');
            },
          })
        }
      >
        Show Info
      </button>
    </>
  );
}
