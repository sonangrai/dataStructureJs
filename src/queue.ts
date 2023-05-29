class Anode {
  value: string;
  next: Anode | null;

  constructor(value: string) {
    this.value = value;
    this.next = null;
  }
}

export default class Queue {
  first: Anode | null;
  last: Anode | null;
  size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value: string) {
    const newNode = new Anode(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last = newNode;
      this.last.next = newNode;
    }
    ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;

    --this.size;
  }
}
