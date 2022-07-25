const fs = require('fs');
const input = fs.readFileSync('2741_input.txt').toString().trim().split('\n');

let result = '';

for (let i = Number(input); i > 0; i--) {
  result += `${i}\n`;
}

console.log(result);
