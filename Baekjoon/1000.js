const fs = require('fs');
const input = fs.readFileSync('1000_input.txt').toString().split(' ');

const [a, b] = input;
console.log(Number(a) + Number(b));
