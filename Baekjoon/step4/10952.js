const fs = require('fs');
const input = fs.readFileSync('10952_input.txt').toString().trim().split('\n');

let i = 0;
while(i <= input.length - 2) {
  const [A, B] = input[i].split(' ').map(Number);
  console.log(A + B);
  i++;
}