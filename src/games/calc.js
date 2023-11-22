/* eslint-disable no-console */
/* eslint-disable import/extensions */
import random from 'lodash/random.js';
import readlineSync from 'readline-sync';

const randomOperators = (operation) => {
  const lastIndex = operation.length - 1
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
  console.log('What is the result of the expression?');
  for (let i = 1; i <= 3; i += 1) {
    const numOne = random(1, 20);
    const numTwo = random(1, 20);
    const operator = randomOperators(['+', '-', '*']);
    console.log(`Question: ${numOne} ${operator} ${numTwo}`);
    const answer = Number(readlineSync.question('Your answer: '));
    const result = resultOperation(numOne, numTwo, operator);

    if (answer === result) {
      console.log('Correct!');
    } else {
      return `'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, `;
    }
  }

  return 'Congratulations, ';
};

export default gameCalc;
