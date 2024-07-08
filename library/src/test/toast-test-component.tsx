import { ToastProvider, useToast } from '../main';

const ToastTestComponent = () => {
  const t = useToast();
  return (
    <ToastProvider position="bottom-right">
      <button
        onClick={() =>
          t.success({
            text: 'Hello Toast!',
            description: 'This is a success toast',
          })
        }
      >
        Show Toast
      </button>
    </ToastProvider>
  );
};

export default ToastTestComponent;
