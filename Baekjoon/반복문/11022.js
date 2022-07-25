const fs = require('fs');
const input = fs.readFileSync('15552_input.txt').toString().trim().split('\n');

let result = '';

for (let i = 1; i < input.length; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  result += `Case #${i}: ${a} + ${b} = ${a + b}\n`;
}

console.log(result);
