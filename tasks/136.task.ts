//136 Single Number task O(n)
const singleNumber = (nums: number[]): number => {
  const set = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      set.delete(nums[i]);
    } else {
      set.add(nums[i]);
    }
  }

  return Array.from(set)[0];
};

module.exports = singleNumber;
