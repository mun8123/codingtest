const fs = require('fs');
let input = fs.readFileSync('10757_input.txt').toString().trim().split(' ');

//BigInt 사용방법
// const [c, d] = input.map(BigInt);
// console.log((c + d).toString());

const inputLength = input.map(el => el.length);
const maxLength = Math.max(...inputLength);
const minLength = Math.min(...inputLength);
const zeros = Array.from({ length: maxLength - minLength }, () => '0');

if (input[0].length > input[1].length) {
  input = [[...input[0]], [...zeros, ...input[1]]];
} else if (input[0].length < input[1].length) {
  input = [[...zeros, ...input[0]], [...input[1]]];
} else {
  input = input.map(el => el.split(''));
}

const a = input[0].reverse();
const b = input[1].reverse();
const answer = [];
let carry = 0;

for (let i = 0; i < maxLength; i++) {
  let result = Number(a[i]) + Number(b[i]) + carry;
  carry = Math.floor(result / 10);
  sum = result % 10;
  answer[i] = sum;
}

if (carry) {
  answer.push(carry);
}

console.log(answer.reverse().join(''));
