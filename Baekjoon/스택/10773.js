const fs = require('fs');
const input = fs.readFileSync('10773_input.txt').toString().split('\n');

//왜 이렇게 하면 틀렸다고 할까..........모르겠다......
// const [k, ...numbers] = input;
// const stack = [];

// numbers.forEach(el => {
//   const num = Number(el);

//   if (num === 0) {
//     stack.pop();
//   } else {
//     stack.push(num);
//   }
// });

// console.log(stack)

const caseCount = Number(input[0]);
const stack = [];

for (let i = 1; i <= caseCount; i += 1) {
  const value = Number(input[i]);

  if (value === 0) {
    stack.pop();
  } else {
    stack.push(value);
  }
}


const result = stack.length ? stack.reduce((a, b) => a + b, 0) : 0;
console.log(result);
