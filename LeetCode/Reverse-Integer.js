const x = -123;

var reverse = function (x) {
  const MIN = (-2) ** 31;
  const MAX = 2 ** 31 - 1;
  const sign = Math.sign(x);

  if (sign === -1) {
    x *= -1;
  }

  const reverseX = String(x).split('').reverse().join('');
  let output = Number(reverseX);

  if (sign === -1) {
    output *= -1;
  }

  if (!(MIN <= output && output <= MAX)) {
    return 0;
  }

  return output;
};

console.log(reverse(x));
