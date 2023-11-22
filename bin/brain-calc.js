#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import name from '../src/cli.js';
import gameCalc from '../src/calc.js';

console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');
console.log(`${gameCalc()}${name}!`);
