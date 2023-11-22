/* eslint-disable no-console */
/* eslint-disable import/extensions */
import random from 'lodash/random.js';
import readlineSync from 'readline-sync';

const gameParity = () => {
  let i = 1;
  while (i <= 3) {
    const num = random(1, 50);
    const result = num % 2;
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');

    switch (answer) {
      case 'yes':
        if (result === 0) {
          console.log('Correct!');
        } else {
          return "'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ";
        }
        break;
      case 'no':
        if (result !== 0) {
          console.log('Correct!');
        } else {
          return "'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ";
        }
        break;
      default:
        return `'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, `;
    }
    i += 1;
  }

  return 'Congratulations, ';
};

export default gameParity;
