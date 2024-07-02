/* eslint-disable no-console */
export class NodeItem {
  value: string;
  next: NodeItem | null;

  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  head: NodeItem;

  constructor() {
    this.head = new NodeItem("Head");
  }

  find(item: string) {
    let currentItem: NodeItem | null = this.head;
    while (currentItem && currentItem.value != item) {
      currentItem = currentItem.next;
    }
    return currentItem;
  }

  insert(item: string, place: string) {
    let newNode = new NodeItem(item);
    let current = this.find(place);
    if (current) {
      newNode.next = current.next;
      current.next = newNode;
    }
  }

  findPrevious(item: string) {
    let currentNode: NodeItem | null = this.head;
    while (currentNode && currentNode.next?.value != item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  remove(item: string) {
    let prev: NodeItem | null = this.findPrevious(item);
    if (prev && prev.next) {
      prev.next = prev.next.next;
    }
  }

  display() {
    let currentNode = this.head;
    while (currentNode.next != null) {
      console.log(currentNode.next.value);
      currentNode = currentNode.next;
    }
  }
}
