//876. Middle of the Linked List O(n)
type LinkedListNode = {
  value: number;
  next: LinkedListNode | null;
};

const middleNode = (head: LinkedListNode) => {
  let fast = head as LinkedListNode | null;
  let slow = head as LinkedListNode | null;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};

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
console.log(middleNode(head));
module.exports = middleNode;
