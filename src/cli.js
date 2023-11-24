import readlineSync from 'readline-sync';

const name = () => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  return console.log(`Hello, ${userName}!`);
};

export default name;
