/* eslint-disable no-console */
/* eslint-disable import/extensions */
import random from 'lodash/random.js';
import readlineSync from 'readline-sync';

const evenResult = (num) => {
  let i = Math.round(num / 2);
  for (i; i >= 2; i -= 1) {
    if (num % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

const gamePrime = (part) => {
  console.log("Answer 'yes' if given number is prime. Otherwise answer 'no'.");
  for (let i = 1; i <= part; i += 1) {
    const num = random(2, 53);
    const result = evenResult(num);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');

    if (result === answer) {
      console.log('Correct!');
    } else {
      return `'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, `;
    }
  }

  return 'Congratulations, ';
};

export default gamePrime;
