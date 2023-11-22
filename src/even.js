/* eslint-disable no-console */
/* eslint-disable import/extensions */
import random from 'lodash/random.js';
import readlineSync from 'readline-sync';

const gameParity = (part) => {
  for (let i = 1; i <= part; i += 1) {
    const num = random(1, 50);
    const result = Math.sign(num % 2);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');

    if (result === 0) {
      if (answer === 'yes') {
        console.log('Correct!');
      } else {
        return `'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, `;
      }
    } else if (result !== 0) {
      if (answer === 'no') {
        console.log('Correct!');
      } else {
        return `'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, `;
      }
    }
  }

  return 'Congratulations, ';
};

export default gameParity;
