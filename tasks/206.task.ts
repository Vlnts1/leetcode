// 206. Reverse Linked List O(n)

const reverseList = (head: any) => {
  let prevNode = null;
  let current = head;
  while (current) {
    const nextNode = current.next;
    current.next = prevNode;
    prevNode = current;
    current = nextNode;
  }
  return prevNode;
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

console.log(reverseList(head));

module.exports = reverseList;
