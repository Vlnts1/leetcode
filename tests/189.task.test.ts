const rotate = require('../tasks/189.task');

describe('rotate Array', () => {
  test('first array', () => {
    const nums: number[] = [1, 2, 3, 4, 5, 6, 7];
    const k: number = 3;
    expect(rotate(nums, k)).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });
  test('second array', () => {
    const nums: number[] = [-1, -100, 3, 99];
    const k: number = 2;
    expect(rotate(nums, k)).toEqual([3, 99, -1, -100]);
  });
});
