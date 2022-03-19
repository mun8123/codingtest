const fs = require('fs');
const input = fs.readFileSync('1076_input.txt').toString().trim().split('\n');

const data = {
  black: [0, 1],
  brown: [1, 10],
  red: [2, 100],
  orange: [3, 1000],
  yellow: [4, 10000],
  green: [5, 100000],
  blue: [6, 1000000],
  violet: [7, 10000000],
  grey: [8, 100000000],
  white: [9, 1000000000],
};

let value = [data[input[0]][0], data[input[1]][0]].join('');
console.log(Number(value) * data[input[2]][1]);
