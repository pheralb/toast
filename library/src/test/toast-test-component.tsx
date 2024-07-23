import { useToast } from '../main';

const ToastTestComponent = () => {
  const t = useToast();
  return (
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
  );
};

export default ToastTestComponent;
