const fs = require('fs');
const input = fs.readFileSync('1052_input.txt').toString().trim().split(' ').map(Number);

let [N, K] = input;
let totalWater = 0;

while (1) {  
  const binaryN = N.toString(2).split('').reverse();
  const bottleCount = binaryN.filter(el => el === '1').length;

  if (K >= bottleCount) {
    break;
  }
  
  let pow = binaryN.indexOf('1');
  let newWater = 2 ** pow;

  N += newWater;
  totalWater += newWater;
}

console.log(totalWater);
