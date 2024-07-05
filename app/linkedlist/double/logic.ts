/* eslint-disable no-console */
export class NodeItem {
  value: string;
  previous: NodeItem | null;
  next: NodeItem | null;

  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

export class DoubleLinkedList {
  head: NodeItem;

  constructor() {
    this.head = new NodeItem("head");
  }

  find(item: string) {
    let currentItem: NodeItem | null = this.head;
    while (currentItem && currentItem.value != item) {
      currentItem = currentItem.next;
    }
    return currentItem;
  }

  insert(newItem: string, item: string) {
    let newNode = new NodeItem(newItem);
    let place = this.find(item);
    if (place) {
      newNode.next = place.next;
      newNode.previous = place;
      place.next = newNode;
    }
    console.log("added ->", newItem, "- after -> ", item);
  }

  remove(item: string) {
    let findItem: NodeItem | null = this.find(item);
    if (findItem && findItem.previous && findItem.next) {
      findItem.previous.next = findItem.next;
      findItem.next.previous = findItem.previous;
      findItem.next = null;
      findItem.previous = null;
    }
    console.log("removed : ", item);
  }

  display() {
    let currentNode = this.head;
    while (currentNode.next != null) {
      console.log(currentNode.next.value);
      currentNode = currentNode.next;
    }
  }
}
