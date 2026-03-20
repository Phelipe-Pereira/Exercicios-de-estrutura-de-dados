class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertAtBeginning(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }

  removeFromEnd() {
    if (!this.tail) return null;

    const removedValue = this.tail.value;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return removedValue;
    }

    this.tail = this.tail.prev;
    this.tail.next = null;

    return removedValue;
  }

  printForward() {
    let current = this.head;
    const values = [];

    while (current) {
      values.push(current.value);
      current = current.next;
    }

    console.log(values.join(" <-> "));
  }

  printBackward() {
    let current = this.tail;
    const values = [];

    while (current) {
      values.push(current.value);
      current = current.prev;
    }

    console.log(values.join(" <-> "));
  }

  printBothDirections() {
    this.printForward();
    this.printBackward();
  }
}

const list = new DoublyLinkedList();

list.insertAtBeginning(10);
list.insertAtBeginning(20);
list.insertAtBeginning(30);

list.printBothDirections();

list.removeFromEnd();
list.printBothDirections();