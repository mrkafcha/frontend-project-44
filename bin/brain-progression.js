#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import name from '../src/index.js';
import gameProgression from '../src/games/progression.js';

console.log(`Hello, ${name}!`);
console.log(`${gameProgression(3)}${name}!`);