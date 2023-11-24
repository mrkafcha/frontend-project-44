/* eslint-disable no-console */
/* eslint-disable import/extensions */
import random from 'lodash/random.js';

const evenResult = (num) => {
  let i = Math.round(num / 2);
  for (i; i >= 2; i -= 1) {
    if (num % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

const gamePrime = () => {
  const startDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const num = random(2, 53);
  const result = evenResult(num);
  const question = `${num}`;

  return [startDescription, question, result];
};

export default gamePrime;
