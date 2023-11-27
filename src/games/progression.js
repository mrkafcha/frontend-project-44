import runGameLogic from '../index.js';
import getRandomInt from '../random.js';

const getArrProgression = (start, length, interval) => {
  const arrProgression = [];
  let numStart = start;

  for (let i = 0; i <= length; i += 1) {
    arrProgression.push(numStart);
    numStart += interval;
  }

  return arrProgression;
};

const startDescription = 'What number is missing in the progression?';

const runGameProgression = () => {
  const startInterval = 1;
  const endInterval = 41;
  const endLengthInterval = 11;
  const startLengthProgression = 4;
  const endLengthProgression = 10;
  const numstart = getRandomInt(startInterval, endInterval);
  const lengthProgression = getRandomInt(startLengthProgression, endLengthProgression);
  const hiddenNum = getRandomInt(startInterval, lengthProgression);
  const lengthInterval = getRandomInt(startInterval, endLengthInterval);
  const arrProgression = getArrProgression(numstart, lengthProgression, lengthInterval);
  const result = String(arrProgression[hiddenNum]);
  arrProgression[hiddenNum] = '..';
  const question = `${arrProgression.join(' ')}`;

  return [question, result];
};

export default () => {
  runGameLogic(startDescription, runGameProgression);
};
