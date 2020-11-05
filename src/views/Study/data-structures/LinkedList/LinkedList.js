import { Node } from "../models/linked-list-models";
import { defaultEquals } from "../utils";

export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(item) {
    const node = new Node(item);
    if (!this.head) {
      this.head = node;
    } else {
      let lastNode = this.head;

      while (lastNode.next) {
        lastNode = lastNode.next;
      }
      lastNode.next = node;
    }

    this.count++;
  }

  // 向指定位置插入一个元素
  insert(item, index) {
    if (index < 0 || index > this.count) {
      return false;
    }
    const node = new Node(item);

    if (index === 0) {
      const currNode = this.head;
      this.head = node;
      node.next = currNode;
    } else {
      const prevNode = this.getNodeByIndex(index - 1);
      const currNode = prevNode.next;

      prevNode.next = node;
      node.next = currNode;
    }

    this.count++;

    return true;
  }

  getNodeByIndex(index) {
    if (index < 0 || index >= this.count) {
      return undefined;
    }

    let node = this.head;
    let count = 0;

    while (count < index && !!node) {
      node = node.next;
      count++;
    }

    return node;
  }

  getItemByIndex(index) {
    return this.getNodeByIndex(index).item;
  }

  // 返回该元素在列表中的索引，否则返回-1
  indexOf(item) {
    let currNode = this.head;
    let count = 0;

    while (count < this.count) {
      if (this.equalsFn(item, currNode.item)) {
        return count;
      }

      currNode = currNode.next;
      count++;
    }

    return -1;
  }

  remove(item) {
    const index = this.indexOf(item);
    return this.removeByIndex(index);
  }

  removeByIndex(index) {
    if (index < 0 || index >= this.count) {
      return undefined;
    }
    let currNode = this.head;

    if (index === 0) {
      this.head = currNode.next;
    } else {
      // let prevNode;
      //
      // for (let i = 0; i < index; i++) {
      //   prevNode = currNode;
      //   currNode = currNode.next;
      // }
      //
      // prevNode.next = currNode.next;
      // 实现getItemByIndex后重构
      const prevNode = this.getNodeByIndex(index - 1);
      currNode = prevNode.next;
      prevNode.next = currNode.next;
    }
    this.count--;
    return currNode.item;
  }

  getHead() {
    return this.head;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count;
  }

  clear() {
    this.count = 0;
    this.head = undefined;
  }
}
