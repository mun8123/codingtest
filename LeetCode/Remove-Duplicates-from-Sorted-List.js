const values = [1, 1, 1];

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.insert = function (val) {
  const currentHead = this.head;

  const newNode = new ListNode(val);
  newNode.next = currentHead;
  this.head = newNode;
}

var deleteDuplicates = function (head) {
  let currentHead = head;

  while(currentHead) {
    if (currentHead.next !== null && currentHead.val === currentHead.next.val) {
      currentHead.next = currentHead.next.next;
      continue;
    }

    currentHead = currentHead.next;
  }

  return head;
};

function main() {
  const list = new LinkedList();

  for (let i = 0; i < values.length; i++) {
    list.insert(values[i]);
  }

  console.log(deleteDuplicates(list.head));
}

main();


