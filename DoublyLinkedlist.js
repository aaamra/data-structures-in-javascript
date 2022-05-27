class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(array = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    if (Array.isArray(array)) {
      array.forEach((ele) => {
        this.push(ele);
      });
    }
  }

  push(val) {
    let newNode = new ListNode(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  unshift(val) {
    let newNode = new ListNode(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  getNode(index) {
    if (index < 0 || index > this.length) {
      return undefined;
    }

    let currentNode = this.head;
    let counter = 0;
    while (currentNode) {
      if (counter === index) {
        break;
      }
      counter++;
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  get(index) {
    let node = this.getNode(index);

    return node ? node.val : null;
  }

  set(index, val) {
    let node = this.getNode(index);

    if (node) {
      node.val = val;
      return true;
    }

    return false;
  }

  pop() {
    if (!this.tail) {
      return undefined;
    } else if (!this.tail.prev) {
      this.head = null;
      this.tail = null;
    }

    let temp = this.tail;
    let previousNode = this.tail.prev;
    temp.prev = null;
    previousNode.next = null;
    this.tail = previousNode;

    this.length--;

    return temp;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    if (this.head) this.head.prev = null;

    this.length--;

    return temp;
  }
}
