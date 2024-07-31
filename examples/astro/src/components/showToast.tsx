import { toast } from '@pheralb/toast';

const ShowToast = () => {
  const handleClick = () => {
    toast.default({
      text: 'Hello, world!',
    });
  };

  return (
    <button type="button" onClick={handleClick}>
      Show Toast
    </button>
  );
};

export default ShowToast;
