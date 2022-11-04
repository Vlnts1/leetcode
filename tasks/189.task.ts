// Rotate Array O(n^2)
const rotate = (nums: number[], k: number): void => {
  for (let i = nums.length - 1; i >= 0; i--) {
    nums[i + k] = nums[i];
  }

  for (let i = k - 1; i >= 0; i--) {
    nums[i] = nums.pop();
  }
  return nums;
};
module.exports = rotate;
