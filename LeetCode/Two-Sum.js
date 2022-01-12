const nums = [0, 4, 3, 0];
const target = 0;

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const indexOfPair = nums.indexOf(target - nums[i], i + 1);

    if (indexOfPair !== i && indexOfPair !== -1) {
      return [i, indexOfPair];
    }
  }
};

var twoSum2 = function (nums, target) {
  const indexesOfNums = {};

  for (let i = 0; i < nums.length; i++) {
    const pair = target - nums[i];

    if (indexesOfNums.hasOwnProperty(pair)) {
      return [indexesOfNums[pair], i];
    }

    indexesOfNums[nums[i]] = i;
  }
};

console.log(twoSum2(nums, target));
