import runGameLogic from '../index.js';
import getRandomInt from '../random.js';

const getEvenResult = (num) => {
  for (let i = Math.round(num / 2); i >= 2; i -= 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const startDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const runGamePrime = () => {
  const startInterval = 1;
  const endInterval = 53;
  const num = getRandomInt(startInterval, endInterval);
  const result = getEvenResult(num) ? 'yes' : 'no';

  return [String(num), result];
};

export default () => {
  runGameLogic(startDescription, runGamePrime);
};
