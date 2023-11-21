/* eslint-disable no-console */
/* eslint-disable import/extensions */
import _ from 'lodash';
import name from './cli.js';

const question = () => {
  for (let i = 1; i <= 3; i += 1) {
    const random = _.random(1, 50);
    const parity = random % 2;
    console.log("Answer 'yes' if number even otherwise answer 'no'.");
    console.log(`Question: ${random}`);
    const answer = name('Your answer: ');

    switch (answer) {
      case 'yes':
        if (parity === 0) {
          console.log('Correct!');
        } else {
          return "'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ";
        }
        break;
      case 'no':
        if (parity !== 0) {
          console.log('Correct!');
        } else {
          return "'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ";
        }
        break;
      default:
        return `'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, `;
    }
  }

  return 'Congratulations, ';
};

export default question;
