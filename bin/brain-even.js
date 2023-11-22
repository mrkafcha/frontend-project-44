#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import name from '../src/index.js';
import gameEven from '../src/games/even.js';

console.log(`Hello, ${name}!`);
console.log(`${gameEven(3)}${name}!`);
