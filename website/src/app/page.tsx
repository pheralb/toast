'use client';

import { useToast } from 'react-bell';

export default function Home() {
  const toast = useToast();
  return (
    <>
      <button
        onClick={() =>
          toast?.open({
            text: 'Hello World!',
            variant: 'error',
            action: () => {
              alert('Action Clicked');
            },
          })
        }
      >
        Show Toast
      </button>
    </>
  );
}
