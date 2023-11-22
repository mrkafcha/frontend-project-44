#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import name from '../src/cli.js';
import gameParity from '../src/even.js';

console.log(`Hello, ${name}!`);
console.log("Answer 'yes' if number even otherwise answer 'no'.");
console.log(`${gameParity(3)}${name}!`);
