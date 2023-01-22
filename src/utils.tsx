export const shuffleArray = (array: any[]) => {
  const test = [...array].sort(() => Math.random() - 0.5);
  console.log({ test });
  return test;
};
