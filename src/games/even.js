import runGameLogic from '../index.js';
import getRandomInt from '../random.js';

const checkEquality = (num) => (num === 0);

const startDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const runGameEven = () => {
  const startInterval = 1;
  const endInterval = 51;
  const num = getRandomInt(startInterval, endInterval);
  const even = Math.sign(num % 2);
  const result = checkEquality(even) ? 'yes' : 'no';

  return [String(num), result];
};

export default () => {
  runGameLogic(startDescription, runGameEven);
};
