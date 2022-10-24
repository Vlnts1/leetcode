const middleNode = require('../tasks/876.task');

describe('Middle of the Linked List', () => {
  test('first linked list', () => {
    const head = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: {
              value: 5,
            },
          },
        },
      },
    };

    expect(middleNode(head)).toEqual({ value: 3, next: { value: 4, next: { value: 5 } } });
  });
  test('second linked list', () => {
    const head = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: {
              value: 5,
              next: {
                value: 6,
              },
            },
          },
        },
      },
    };
    expect(middleNode(head)).toEqual({ value: 4, next: { value: 5, next: { value: 6 } } });
  });
});
