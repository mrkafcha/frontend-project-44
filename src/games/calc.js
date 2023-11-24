/* eslint-disable no-console */
/* eslint-disable import/extensions */
import random from 'lodash/random.js';

const randomOperators = (operation) => {
  const lastIndex = operation.length - 1;
  const randomIndex = random(0, lastIndex);
  return operation[randomIndex];
};

const resultOperation = (numOne, numTwo, operator) => {
  let result;
  switch (operator) {
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
  const startDescription = 'What is the result of the expression?';
  const numOne = random(1, 20);
  const numTwo = random(1, 20);
  const operator = randomOperators(['+', '-', '*']);
  const question = `${numOne} ${operator} ${numTwo}`;
  const result = resultOperation(numOne, numTwo, operator);

  return [startDescription, question, result];
};

export default gameCalc;
