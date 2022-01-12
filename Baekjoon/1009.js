const fs = require('fs');
const input = fs
  .readFileSync('1009_input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(el => el.split(' '))
  .splice(1);

//제곱하면 일의 자리 수는 계속 반복됨
//ex) 3의 제곱 => 3, 9, 7, 1, 3, 9, 7, 1, 3...
const answer = input.map(el => {
  let [a, b] = el;
  let pow = 1;

  for (let i = 0; i < b; i++) {
    pow = (pow * a) % 10;
  }

  if (pow === 0) {
    pow = 10;
  }

  return pow;
});

console.log(answer.join('\n'));
