import runGameLogic from '../index.js';
import getRandomInt from '../random.js';

const getResultDivider = (numOne, numTwo) => {
  const divider = numOne >= numTwo ? numTwo : numOne;

  for (let i = divider; i >= 1; i -= 1) {
    if (numOne % i === 0 && numTwo % i === 0) {
      return i;
    }
  }
  return 1;
};

const startDescription = 'Find the greatest common divisor of given numbers.';
const startInterval = 1;
const endInterval = 51;

const runGameGcd = () => {
  const numOne = getRandomInt(startInterval, endInterval);
  const numTwo = getRandomInt(startInterval, endInterval);
  const result = String(getResultDivider(numOne, numTwo));
  const question = `${numOne} ${numTwo}`;

  return [question, result];
};

export default () => {
  runGameLogic(startDescription, runGameGcd);
};
