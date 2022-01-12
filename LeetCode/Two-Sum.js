const nums = [2, 7, 11, 15];
const target = 9;

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const indexOfPair = nums.indexOf(target - nums[i], i + 1);

    if (indexOfPair !== i && indexOfPair !== -1) {
      return [i, indexOfPair];
    }
  }
};

console.log(twoSum(nums, target));
