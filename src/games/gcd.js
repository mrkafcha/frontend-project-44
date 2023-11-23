/* eslint-disable no-console */
/* eslint-disable import/extensions */
import random from 'lodash/random.js';
import readlineSync from 'readline-sync';

const resultDivider = (numOne, numTwo) => {
  const divider = numOne >= numTwo ? numTwo : numOne;

  for (let i = divider; i >= 1; i -= 1) {
    if (numOne % i === 0 && numTwo % i === 0) {
      return i;
    }
  }
  return 1;
};

const gameGcd = (part) => {
  console.log('What is the result of the expression?');
  for (let i = 1; i <= part; i += 1) {
    const numOne = random(1, 50);
    const numTwo = random(1, 50);
    console.log(`Question: ${numOne} ${numTwo}`);
    const answer = Number(readlineSync.question('Your answer: '));
    const result = resultDivider(numOne, numTwo);

    if (answer === result) {
      console.log('Correct!');
    } else {
      return `'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, `;
    }
  }

  return 'Congratulations, ';
};

export default gameGcd;
