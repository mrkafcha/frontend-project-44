/* eslint-disable no-console */
/* eslint-disable import/extensions */
import random from 'lodash/random.js';
import readlineSync from 'readline-sync';

const randomOperators = () => {
  const operation = ['+', '-', '*'];
  const randomIndex = random(0, 2);
  return operation[randomIndex];
};

const gameCalc = () => {
  for (let i = 1; i <= 3; i += 1) {
    const numOne = random(1, 20);
    const numTwo = random(1, 20);
    let result = 0;
    const operation = randomOperators();
    console.log(`Question: ${numOne} ${operation} ${numTwo}`);
    const answer = Number(readlineSync.question('Your answer: '));

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

    if (answer === result) {
      console.log('Correct!');
    } else {
      return `'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, `;
    }
  }

  return 'Congratulations, ';
};

export default gameCalc;
