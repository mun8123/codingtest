const x = -121;

var isPalindrome = function (x) {
  return String(x) === String(x).split('').reverse().join('');
};

console.log(isPalindrome(x));
