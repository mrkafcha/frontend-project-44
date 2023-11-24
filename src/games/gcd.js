const getRandomInt = (min, max) => Math.ceil(Math.random() * (max - min)) + min;

const getResultDivider = (numOne, numTwo) => {
  const divider = numOne >= numTwo ? numTwo : numOne;

  for (let i = divider; i >= 1; i -= 1) {
    if (numOne % i === 0 && numTwo % i === 0) {
      return i;
    }
  }
  return 1;
};

const runGameGcd = () => {
  const startInterval = 0;
  const endInterval = 50;
  const startDescription = 'Find the greatest common divisor of given numbers.';
  const numOne = getRandomInt(startInterval, endInterval);
  const numTwo = getRandomInt(startInterval, endInterval);
  const result = String(getResultDivider(numOne, numTwo));
  const question = `${numOne} ${numTwo}`;

  return [startDescription, question, result];
};

export default runGameGcd;
