//977. Squares of a Sorted Array O(n^2)
const sortedSquares = (nums: number[]): number[] => {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * nums[i];
  }
  return nums.sort((a, b) => a - b);
};

module.exports = sortedSquares;
