/* eslint-disable no-console */
/* eslint-disable import/extensions */
import random from 'lodash/random.js';
import readlineSync from 'readline-sync';

const strNumbers = (start, length, hidden, order) => {
  const arrNumbers = [];
  let numStart = start;

  for (let i = 0; i <= length; i += 1) {
    if (i === hidden) {
      arrNumbers.push('..');
      numStart += order;
    } else {
      arrNumbers.push(numStart);
      numStart += order;
    }
  }

  return arrNumbers;
};

const gameProgression = (part) => {
  console.log('What number is missing in the progression?');
  for (let i = 1; i <= part; i += 1) {
    const numstart = random(1, 40);
    const lengthNum = random(4, 9);
    const hiddenNum = random(1, lengthNum);
    const orderNum = random(2, 7);
    const arrProgression = strNumbers(numstart, lengthNum, hiddenNum, orderNum);
    console.log(`Question: ${arrProgression.join(' ')}`);
    const answer = Number(readlineSync.question('Your answer: '));
    const result = arrProgression[hiddenNum - 1] + orderNum;

    if (answer === result) {
      console.log('Correct!');
    } else {
      return `'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, `;
    }
  }

  return 'Congratulations, ';
};

export default gameProgression;
