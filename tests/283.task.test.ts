const moveZeroes = require('../tasks/283.task');

describe('moveZeroes', () => {
  test('first array', () => {
    const nums = [0, 1, 0, 3, 12];
    expect(moveZeroes(nums)).toEqual([1, 3, 12, 0, 0]);
  });
  test('second array', () => {
    const nums = [0];
    expect(moveZeroes(nums)).toEqual([0]);
  });
});
