// Single Node
class Anode {
  value: string;
  next: Anode | null;

  constructor(value: string) {
    this.value = value;
    this.next = null;
  }
}

// Stack
export default class Stack {
  first: Anode | null;
  last: Anode | null;
  size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value: string) {
    const newNode = new Anode(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    const temp = this.first;
    // If only one
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
