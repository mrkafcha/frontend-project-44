/* eslint-disable no-console */
/* eslint-disable import/extensions */
import random from 'lodash/random.js';

const resultDivider = (numOne, numTwo) => {
  const divider = numOne >= numTwo ? numTwo : numOne;

  for (let i = divider; i >= 1; i -= 1) {
    if (numOne % i === 0 && numTwo % i === 0) {
      return i;
    }
  }
  return 1;
};

const gameGcd = () => {
  const startDescription = 'Find the greatest common divisor of given numbers.';
  const numOne = random(1, 50);
  const numTwo = random(1, 50);
  const result = resultDivider(numOne, numTwo);
  const question = `${numOne} ${numTwo}`;

  return [startDescription, question, result];
};

export default gameGcd;
