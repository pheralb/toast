'use client';

import { testAction, testErrorAction } from '@/actions/testAction';
import { toast } from '@pheralb/toast';
import { PartyPopperIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useState } from 'react';

export default function Home() {
  const { setTheme } = useTheme();
  const [duration, setDuration] = useState<number>(8000);
  const buttonStyles =
    'p-2 m-2 bg-neutral-100 border border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 text-sm dark:text-white rounded-md';

  const renderToast = () => {
    toast.default({
      text: 'Rendered toast!',
      description: 'This is a success toast!',
      delayDuration: duration,
    });
  };

  const renderToastWithIcon = () => {
    toast.default({
      text: 'Rendered toast without icon',
      description: 'This is a default toast!',
      delayDuration: duration,
    });
    toast.success({
      text: 'Rendered toast with library icon',
      description: 'This is a success toast',
      delayDuration: duration,
    });
    toast.error({
      text: 'Rendered toast without library icon',
      description: 'This is a error toast',
      delayDuration: duration,
    });
    toast.warning({
      text: 'Rendered toast with library icon',
      description: 'This is a warning toast',
      delayDuration: duration,
    });
    toast.default({
      text: 'Rendered toast with custom icon',
      description: 'This is a default toast',
      delayDuration: duration,
      icon: <PartyPopperIcon width={18} height={18} />,
    });
  };

  const testLoading = () => {
    toast.loading({
      text: 'Loading toast',
      description: 'This returns success toast!',
      delayDuration: duration,
      options: {
        promise: testAction('pheralb'),
        success: 'Success toast',
        error: 'Error toast',
        autoDismiss: true,
        onSuccess(data) {
          console.log(`Success: ${data.data}`);
        },
        onError(error) {
          console.error(`Error: ${error}`);
        },
      },
    });
    toast.loading({
      text: 'Loading toast',
      description: 'This returns error toast!',
      delayDuration: duration,
      options: {
        promise: testErrorAction(),
        success: 'Success toast',
        error: 'Error toast',
        autoDismiss: true,
        onSuccess(data) {
          console.log(`Success: ${data.data}`);
        },
        onError(error) {
          console.error(`Error: ${error}`);
        },
      },
    });
  };

  return (
    <>
      <input
        type="number"
        value={duration}
        onChange={(e) => setDuration(Number(e.target.value))}
      />
      <button className={buttonStyles} onClick={() => setTheme('system')}>
        Set System Theme
      </button>
      <button className={buttonStyles} onClick={() => setTheme('dark')}>
        Set Dark Theme
      </button>
      <button className={buttonStyles} onClick={() => setTheme('light')}>
        Set Light Theme
      </button>
      <button className={buttonStyles} onClick={() => renderToast()}>
        Render Toast
      </button>
      <button className={buttonStyles} onClick={() => renderToastWithIcon()}>
        Render Toast with/without icon and custom icon
      </button>
      <button className={buttonStyles} onClick={() => testLoading()}>
        Test Loading with Next.js Server Action
      </button>
    </>
  );
}
