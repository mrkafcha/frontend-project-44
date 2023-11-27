import readlineSync from 'readline-sync';

const lastRound = 3;

export default (initialDescription, runGameEngine) => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(initialDescription);

  for (let i = 1; i <= lastRound; i += 1) {
    const [question, result] = runGameEngine();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (result === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
