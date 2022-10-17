//977. Squares of a Sorted Array O(n^2)
const sortedSquares = (nums: number[]): number[] => {
  nums.map((num, i) => {
    nums[i] = Math.pow(num, 2);
  });
  return nums.sort((a, b) => a - b);
};

module.exports = sortedSquares;
