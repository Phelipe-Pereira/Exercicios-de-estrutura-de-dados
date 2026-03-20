class QueueNode {
  constructor(value) {
    this._value = value;
    this._next = null;
  }

  set next(value) {
    this._next = value;
  }

  get next() {
    return this._next;
  }

  get value() {
    return this._value;
  }
}

export default class Queue {
  constructor(value) {
    this._size = 0;
    this._first = null;
    this._last = null;

    if (value !== undefined) {
      this.enqueue(value);
    }
  }

  get size() {
    return this._size;
  }

  get empty() {
    return this._size === 0;
  }

  enqueue(value) {
    const newNode = new QueueNode(value);

    if (this.empty) {
      this._first = newNode;
      this._last = newNode;
    } else {
      this._last.next = newNode;
      this._last = newNode;
    }

    this._size++;
  }

  dequeue() {
    if (this.empty) return undefined;

    const nodeToRemove = this._first;
    this._first = nodeToRemove.next;

    this._size--;

    if (this._first === null) {
      this._last = null;
    }

    return nodeToRemove.value;
  }

  peek() {
    if (this.empty) return undefined;
    return this._first.value;
  }

  toArray() {
    if (this.empty) return [];

    const result = [];
    let current = this._first;

    for (let i = 0; i < this._size; i++) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }
}

//-------------------------------------------------- Fila circular -------------------------------------------------------------------------------

export class CircularQueue {
  constructor(value) {
    this._size = 0;
    this._first = null;
    this._last = null;

    if (value !== undefined) {
      this.enqueue(value);
    }
  }

  get size() {
    return this._size;
  }

  get empty() {
    return this._size === 0;
  }

  enqueue(value) {
    const newNode = new QueueNode(value);

    if (this.empty) {
      this._first = newNode;
      this._last = newNode;
      this._last.next = this._first;
    } else {
      newNode.next = this._first;
      this._last.next = newNode;
      this._last = newNode;
    }

    this._size++;
  }

  dequeue() {
    if (this.empty) return undefined;

    const nodeToRemove = this._first;

    if (this._size === 1) {
      this._first = null;
      this._last = null;
      this._size = 0;
      return nodeToRemove.value;
    }

    this._first = nodeToRemove.next;
    this._last.next = this._first;

    this._size--;

    return nodeToRemove.value;
  }

  peek() {
    if (this.empty) return undefined;
    return this._first.value;
  }

  toArray() {
    if (this.empty) return [];

    const result = [];
    let current = this._first;

    for (let i = 0; i < this._size; i++) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }
}
