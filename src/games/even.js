import gameLogic from '../index.js';

const getRandomInt = (min, max) => Math.ceil(Math.random() * (max - min)) + min;

const checkEven = (num) => (num === 0);

const runGameEven = () => {
  const startInterval = 1;
  const endInterval = 50;
  const startDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  const num = getRandomInt(startInterval, endInterval);
  const even = Math.sign(num % 2);
  const result = checkEven(even) ? 'yes' : 'no';
  const question = `${num}`;

  return [startDescription, question, result];
};

export default () => {
  gameLogic(runGameEven);
};
