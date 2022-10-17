const sortedSquares = require('../tasks/977.task');

describe('Squares of a Sorted Array', () => {
  test('first array', () => {
    const nums = [-4, -1, 0, 3, 10];
    expect(sortedSquares(nums)).toEqual([0, 1, 9, 16, 100]);
  });
  test('second array', () => {
    const nums = [-7, -3, 2, 3, 11];
    expect(sortedSquares(nums)).toEqual([4, 9, 9, 49, 121]);
  });
});
