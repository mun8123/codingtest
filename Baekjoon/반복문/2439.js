const fs = require('fs');
const input = fs.readFileSync('2741_input.txt').toString().trim().split('\n');

let result = '';
const star = '*';

for (let i = 1; i <= Number(input); i++) {
  result += `${' '.repeat(Number(input) - i)}${star.repeat(i)}\n`;
}

console.log(result);
