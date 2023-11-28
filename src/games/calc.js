import runGameLogic from '../index.js';
import getRandomInt from '../random.js';

const getRandomOperators = (operation) => {
  const indexFirstOperator = 0;
  const indexLastOperator = operation.length;
  const randomIndex = getRandomInt(indexFirstOperator, indexLastOperator);
  return operation[randomIndex];
};

const calculateResult = (numOne, numTwo, operator) => {
  switch (operator) {
    case '-':
      return numOne - numTwo;
    case '+':
      return numOne + numTwo;
    case '*':
      return numOne * numTwo;
    default:
      throw new Error('Unknown state!');
  }
};

const startDescription = 'What is the result of the expression?';
const startInterval = 1;
const endInterval = 21;

const runGameCalc = () => {
  const firstNumber = getRandomInt(startInterval, endInterval);
  const secondNumber = getRandomInt(startInterval, endInterval);
  const operator = getRandomOperators(['+', '-', '*']);
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const result = String(calculateResult(firstNumber, secondNumber, operator));

  return [question, result];
};

export default () => {
  runGameLogic(startDescription, runGameCalc);
};
