//876. Middle of the Linked List O(n)

const middleNode = (head: any) => {
  let fast = head;
  let slow = head;

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
        },
      },
    },
  },
};
console.log(middleNode(head));
