#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import name from '../src/index.js';
import gameCalc from '../src/games/calc.js';

console.log(`Hello, ${name}!`);
console.log(`${gameCalc(3)}${name}!`);
