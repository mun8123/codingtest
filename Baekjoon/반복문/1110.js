const fs = require('fs');
const input = fs.readFileSync('1110_input.txt').toString().trim().split('');

if (input.length === 1) {
  input.unshift('0');
}

let count = 1;
let nums = input;

while (true) {
  const newNums = nums.reduce((prev, cur) => {
    const plus = Number(prev) + Number(cur);
    return plus < 10 ? [nums[1], `${plus}`] : [nums[1], `${plus % 10}`];
  });

  if (newNums.join('') === input.join('')) {
    break;
  }

  count++;
  nums = newNums;
}

console.log(count);
