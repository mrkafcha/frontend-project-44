#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import name from '../src/cli.js';
import question from '../src/even.js';

const userName = name('Welcome to the Brain Games!\nMay I have your name? ');

console.log(`Hello, ${userName}!`);
console.log(`${question()}${userName}!`);
