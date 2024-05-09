import { useToast } from '@pheralb/toast';

const Examples = () => {
  const toast = useToast();
  return (
    <>
      <button
        onClick={() =>
          toast.open({
            text: 'This is a warning message. 😢',
            description:
              'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus ratione, iusto reprehenderit perspiciatis illum illo mollitia cumque fugit, at eligendi quod, ipsa fugiat nihil! Sunt soluta dolorum suscipit ex voluptas!',
            variant: 'warning',
            delayDuration: 12000,
          })
        }
      >
        Show Warning
      </button>
      <button
        onClick={() =>
          toast.open({
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
};

export default Examples;
