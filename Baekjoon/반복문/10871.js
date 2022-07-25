const fs = require('fs');
const input = fs.readFileSync('10871_input.txt').toString().trim().split('\n');

const [N, X] = input[0].split(' ').map(Number);
const result = input[1]
  .split(' ')
  .filter(n => n < X)
  .join(' ');

console.log(result);
