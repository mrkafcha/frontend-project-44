const getRandomInt = (min, max) => Math.ceil(Math.random() * (max - min)) + min;

const getEvenResult = (num) => {
  let i = Math.round(num / 2);
  for (i; i >= 2; i -= 1) {
    if (num % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

const runGamePrime = () => {
  const startInterval = 1;
  const endInterval = 53;
  const startDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const num = getRandomInt(startInterval, endInterval);
  const result = String(getEvenResult(num));
  const question = `${num}`;

  return [startDescription, question, result];
};

export default runGamePrime;
