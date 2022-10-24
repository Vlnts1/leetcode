class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value = 0) {
    this.value = value;
    this.next = null;
  }
}

const reverseList = (head: ListNode) => {
  let prevNode = null as ListNode | null;
  let current = head as ListNode | null;
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
          next: null,
        },
      },
    },
  },
};
console.log(reverseList(head));
module.exports = reverseList;
