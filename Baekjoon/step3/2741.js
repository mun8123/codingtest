const fs = require('fs');
const input = fs.readFileSync('2741_input.txt').toString().trim().split('\n');

let result = '';

for (let i = 0; i < Number(input); i++) {
  result += `${i + 1}\n`;
}

console.log(result);