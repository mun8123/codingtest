const values = [1, 2];
const pos = -1;

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.insert = function (val) {
  const currentHead = this.head;

  const newNode = new ListNode(val);
  newNode.next = currentHead;
  this.head = newNode;
};

var hasCycle = function (head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {    
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      return true;
    }
  }

  return false;
};

function main() {
  const list = new LinkedList();

  for (let i = 0; i < values.length; i++) {
    list.insert(values[i]);
  }

  console.log(hasCycle(list.head));
}

main();
