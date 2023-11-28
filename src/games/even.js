import runGameLogic from '../index.js';
import getRandomInt from '../random.js';

const isEven = (num) => (num % 2 === 0);

const startDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const startInterval = 1;
const endInterval = 51;

const runGameEven = () => {
  const num = getRandomInt(startInterval, endInterval);
  const result = isEven(num) ? 'yes' : 'no';

  return [String(num), result];
};

export default () => {
  runGameLogic(startDescription, runGameEven);
};
