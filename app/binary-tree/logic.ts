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

  inOrder(node = this.root) {
    if (node != null) {
      this.inOrder(node.left);
      console.log(node.data);
      this.inOrder(node.right);
    }
  }

  preOrder(node = this.root) {
    if (node != null) {
      console.log(node.data);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  postOrder(node = this.root) {
    if (node != null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.data);
    }
  }

  getMin() {
    let min = this.root;
    while (min?.left != null) {
      min = min.left;
    }
    return min;
  }

  getMax() {
    let max = this.root;
    while (max?.right != null) {
      max = max.right;
    }
    return max;
  }

  find(data: number) {
    let current: NodeItem | null = this.root;
    while (current?.data != data) {
      if (current && data < current.data) {
        current = current.left;
      } else {
        current = current?.right as NodeItem;
      }
      if (current == null) return null;
    }
    return current;
  }
}
