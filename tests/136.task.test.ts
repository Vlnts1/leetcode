const singleNumber = require('../tasks/136.task');

describe('return singleNumber from an array', () => {
  test('first array', () => {
    const nums: number[] = [2, 2, 1];
    expect(singleNumber(nums)).toEqual(1);
  });
  test('second array', () => {
    const nums: number[] = [4, 1, 2, 1, 2];
    expect(singleNumber(nums)).toEqual(4);
  });
  test('third array', () => {
    const nums: number[] = [1];
    expect(singleNumber(nums)).toEqual(1);
  });
});
