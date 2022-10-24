const reverseList = require('../tasks/206.task');

describe('Reverse the Linked List', () => {
  test('first linked list', () => {
    const head: ListNode = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: {
              value: 5,
              next: null,
            },
          },
        },
      },
    };

    expect(reverseList(head)).toEqual({
      value: 5,
      next: {
        value: 4,
        next: {
          value: 3,
          next: {
            value: 2,
            next: {
              value: 1,
              next: null,
            },
          },
        },
      },
    });
  });
});
