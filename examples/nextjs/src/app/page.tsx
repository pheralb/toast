'use client';

import { useToast } from '@pheralb/toast';
import { PartyPopperIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useState } from 'react';

export default function Home() {
  const { setTheme } = useTheme();
  const [duration, setDuration] = useState<number>(8000);
  const t = useToast();
  const buttonStyles =
    'p-2 m-2 bg-neutral-100 border border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 text-sm dark:text-white rounded-md';

  const renderToast = () => {
    t.default({
      text: 'Rendered toast!',
      description: 'This is a success toast!',
      delayDuration: duration,
    });
  };

  const renderToastWithIcon = () => {
    t.default({
      text: 'Rendered toast without icon',
      description: 'This is a default toast!',
      delayDuration: duration,
    });
    t.success({
      text: 'Rendered toast with library icon',
      description: 'This is a success toast',
      delayDuration: duration,
    });
    t.error({
      text: 'Rendered toast without library icon',
      description: 'This is a error toast',
      delayDuration: duration,
    });
    t.warning({
      text: 'Rendered toast with library icon',
      description: 'This is a warning toast',
      delayDuration: duration,
    });
    t.default({
      text: 'Rendered toast with custom icon',
      description: 'This is a default toast',
      delayDuration: duration,
      icon: <PartyPopperIcon width={18} height={18} />,
    });
  };

  return (
    <>
      <input
        type="number"
        value={duration}
        onChange={(e) => setDuration(Number(e.target.value))}
      />
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
    </>
  );
}
