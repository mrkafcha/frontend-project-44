/* eslint-disable no-console */
/* eslint-disable import/extensions */
import random from 'lodash/random.js';

const gameEven = () => {
  const startDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  const num = random(1, 50);
  const even = Math.sign(num % 2);
  let result;
  const question = `${num}`;

  if (even === 0) {
    result = 'yes';
  } else {
    result = 'no';
  }

  return [startDescription, question, result];
};

export default gameEven;
