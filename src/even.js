/* eslint-disable no-console */
/* eslint-disable import/extensions */
import random from 'lodash/random.js';
import readlineSync from 'readline-sync';

const evenResult = (num) => {
  if (num === 0) {
    return 'yes';
  }
  return 'no'
};

const gameParity = (part) => {
  for (let i = 1; i <= part; i += 1) {
    const num = random(1, 50);
    const even = Math.sign(num % 2);
    const result = evenResult(even);
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

export default gameParity;
