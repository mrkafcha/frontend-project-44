/* eslint-disable no-console */
import readlineSync from 'readline-sync';

export default (gameLogic) => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
  const initialDescription = gameLogic();
  console.log(initialDescription[0]);

  for (let i = 1; i <= 3; i += 1) {
    const gameGenerator = gameLogic();
    const question = gameGenerator[1];
    const result = gameGenerator[2];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (String(result) === answer) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};
