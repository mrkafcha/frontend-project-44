#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import name from '../src/index.js';
import gameGcd from '../src/games/gcd.js';

console.log(`Hello, ${name}!`);
console.log(`${gameGcd(3)}${name}!`);
