const strs1 = ['flower', 'flow', 'flight'];
const strs2 = ['dog', 'racecar', 'car'];
const strs3 = ['cir', 'car'];

var longestCommonPrefix = function (strs) {
  const minLength = Math.min(...strs.map(word => word.length));
  let prefix = '';

  for (let i = 0; i < minLength; i++) {
    const letters = strs.map(word => word[i]);
    const isSame = letters.every(letter => letter === letters[0]);

    if (isSame) {
      prefix += letters[0];
    } else {
      break;
    }
  }

  return prefix;
};

console.log(longestCommonPrefix(strs1));
console.log(longestCommonPrefix(strs2));
console.log(longestCommonPrefix(strs3));
