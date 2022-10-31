//283. Move Zeroes O(n^2)
const moveZeroes = (nums: number[]) => {
  let target: number = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[target++] = nums[i];
    }
  }

  for (let i = target; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};

const nums: number[] = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums));
module.exports = moveZeroes;
