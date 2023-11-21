import readlineSync from 'readline-sync';

const name = (str) => {
  const nameUser = readlineSync.question(str);
  return nameUser;
};

export default name;
