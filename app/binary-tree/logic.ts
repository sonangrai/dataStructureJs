/* eslint-disable no-console */
export class NodeItem {
  data: number;
  left: NodeItem | null;
  right: NodeItem | null;

  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  show() {
    console.log(this.data);
  }
}

export class BinaryTree {
  root: NodeItem | null;

  constructor() {
    this.root = null;
  }

  insert(data: number) {
    const newItem = new NodeItem(data, null, null);
    if (this.root == null) {
      this.root = newItem;
    } else {
      let current: NodeItem | null = this.root;
      let parent;
      while (true) {
        parent = current;
        if (data < current!.data) {
          current = current!.left;
          if (current == null) {
            parent.left = newItem;
            break;
          }
        } else {
          current = current!.right;
          if (current == null) {
            parent.right = newItem;
            break;
          }
        }
      }
    }
  }

  show() {
    console.log(this);
  }
}
