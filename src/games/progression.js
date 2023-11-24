/* eslint-disable no-console */
/* eslint-disable import/extensions */
import random from 'lodash/random.js';

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

const gameProgression = () => {
  const startDescription = 'What number is missing in the progression?';
  const numstart = random(1, 40);
  const lengthNum = random(4, 9);
  const hiddenNum = random(1, lengthNum);
  const orderNum = random(2, 7);
  const arrProgression = strNumbers(numstart, lengthNum, hiddenNum, orderNum);
  const question = `${arrProgression.join(' ')}`;
  const result = arrProgression[hiddenNum - 1] + orderNum;

  return [startDescription, question, result];
};

export default gameProgression;
