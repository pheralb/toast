import { toast } from '../main';

const ToastTestComponent = () => {
  return (
    <button
      onClick={() =>
        toast.success({
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
