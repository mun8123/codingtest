const fs = require('fs');
const input = fs.readFileSync('2480_input.txt').toString().trim().split(' ');

const [A, B, C] = input.map(n => Number(n)).sort((a, b) => a - b);

if (A === B && B === C) {
  console.log(10000 + A * 1000);
} else if (A === B || B === C) {
  console.log(1000 + B * 100);
} else {
  console.log(C * 100);
}
