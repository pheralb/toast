'use server';

export const testAction = async (name: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    data: `Hello, ${name}!`,
  };
};

export const testErrorAction = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Test error'));
    }, 1000);
  });
};
