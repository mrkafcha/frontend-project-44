import readlineSync from 'readline-sync';

let startRound = 1;
const lastRound = 3;

export default (gameLogic) => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
  const [initialDescription] = gameLogic();
  console.log(initialDescription);

  for (; startRound <= lastRound; startRound += 1) {
    const [, question, result] = gameLogic();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (result === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`);
      return null;
    }
  }

  console.log(`Congratulations, ${userName}!`);
  return null;
};
