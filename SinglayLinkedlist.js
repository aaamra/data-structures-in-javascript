class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor(array = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    if (Array.isArray(array)) {
      array.forEach((el) => {
        this.push(el);
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
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return undefined;
    }

    if (index === 0) {
      return this.unshift(val).length;
    }

    if (index === this.length) {
      return this.push(val).length;
    }

    let newNode = new ListNode(val);

    let currentNode = this.head;
    let counter = 0;
    while (currentNode) {
      if (counter === index - 1) {
        break;
      }
      counter++;
      currentNode = currentNode.next;
    }

    newNode.next = currentNode.next;
    currentNode.next = newNode;

    this.length++;

    return this.length;
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

  shift() {
    if (!this.head) {
      return undefined;
    }

    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;

    this.length--;

    return temp;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    let removedNode = null;

    if (this.length === 1) {
      removedNode = this.shift();
    } else {
      let previousNode = this.getNode(index - 1);
      removedNode = previousNode.next;
      previousNode.next = previousNode.next.next;
      removedNode.next = null;
    }

    this.length--;

    return removedNode;
  }

  pop() {
    if (!this.tail) {
      return undefined;
    }

    let previousNode = this.getNode(this.length - 2);

    let deletedNode = previousNode.next;
    previousNode.next = deletedNode.next;
    deletedNode.next = null;

    this.tail = previousNode;

    this.length--;

    return deletedNode;
  }

  reverse() {
    let node = this.head;
    let previousNode = null;

    this.tail = this.head;

    while (node) {
      let tempNode = node.next;

      node.next = previousNode;

      previousNode = node;

      node = tempNode;
    }

    this.head = previousNode;
  }
}

const list = new SingleLinkedList();

list.push(1);
list.push(2);
list.push(3);

list.insert(0, 4);
list.insert(4, 4);

console.log(JSON.stringify(list, null, 4));
