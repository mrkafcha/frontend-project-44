#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import name from '../src/index.js';
import gamePrime from '../src/games/prime.js';

console.log(`Hello, ${name}!`);
console.log(`${gamePrime(3)}${name}!`);
