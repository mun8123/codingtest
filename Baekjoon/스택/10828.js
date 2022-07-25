const fs = require('fs');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync('10828_input.txt').toString().trim().split('\n');

const stack = [];
const answer = [];

input.forEach(el => {
  switch (el) {
    case 'pop':
      if (stack.length === 0) answer.push(-1);
      else answer.push(stack.pop());
      break;
    case 'size':
      answer.push(stack.length);
      break;
    case 'empty':
      if (stack.length === 0) answer.push(1);
      else answer.push(0);
      break;
    case 'top':
      if (stack.length === 0) answer.push(-1);
      else answer.push(stack[stack.length - 1]);
      break;
    default:
      if (el.includes('push')) {
        const [push, num] = el.split(' ');
        stack.push(num);
      }
      break;
  }
});

console.log(answer.join('\n'));
