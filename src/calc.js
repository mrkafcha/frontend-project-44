/* eslint-disable no-console */
/* eslint-disable import/extensions */
import random from 'lodash/random.js';
import readlineSync from 'readline-sync';

const randomOperators = (operation) => {
  const randomIndex = random(0, operation.length);
  return operation[randomIndex];
};

const resultOperations = (numOne, numTwo, operation) => {
  let result;
  switch (operation) {
    case '-':
      result = numOne - numTwo;
      break;
    case '+':
      result = numOne + numTwo;
      break;
    case '*':
      result = numOne * numTwo;
      break;
    default:
  }
  return result;
};

const gameCalc = () => {
  for (let i = 1; i <= 3; i += 1) {
    const numOne = random(1, 20);
    const numTwo = random(1, 20);
    const operation = randomOperators(['+', '-', '*']);
    console.log(`Question: ${numOne} ${operation} ${numTwo}`);
    const answer = Number(readlineSync.question('Your answer: '));
    const result = resultOperations(numOne, numTwo, operation);

    if (answer === result) {
      console.log('Correct!');
    } else {
      return `'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, `;
    }
  }

  return 'Congratulations, ';
};

export default gameCalc;
