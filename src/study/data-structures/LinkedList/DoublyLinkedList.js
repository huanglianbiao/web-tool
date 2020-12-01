/*
 * 双向链表
 * */

import { DoublyNode } from "../models/linked-list-models";
import { defaultEquals } from "../utils";
import LinkedList from "./LinkedList";

export default class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this.tail = undefined; // 尾部
  }

  push(item) {
    const node = new DoublyNode(item);
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
    }
    this.tail = node;
    this.count++;
  }

  insert(item, index) {
    if (index < 0 || index > this.count) {
      return false;
    }
    const node = new DoublyNode(item);

    if (index === 0) {
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        const currNode = this.head;
        currNode.prev = node;
        node.next = currNode;
        this.head = node;
      }
    } else if (index === this.count) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    } else {
      const prevNode = this.getNodeByIndex(index - 1);
      const currNode = prevNode.next;

      prevNode.next = node;
      node.prev = prevNode;

      node.next = currNode;
      currNode.prev = node;
    }

    this.count++;
    return true;
  }

  removeByIndex(index) {
    if (index < 0 || index >= this.count) {
      return undefined;
    }
    let currNode = this.head;

    if (index === 0) {
      if (this.count === 1) {
        this.head = undefined;
        this.tail = undefined;
      } else {
        this.head = currNode.next;
        this.head.prev = undefined;
      }
    } else if (index === this.count - 1) {
      currNode = this.tail;
      this.tail = currNode.prev;
      this.tail.next = undefined;
    } else {
      currNode = this.getNodeByIndex(index);
      const prevNode = currNode.prev;

      prevNode.next = currNode.next;
      currNode.next.prev = prevNode;
    }

    this.count--;
    return currNode.item;
  }

  clear() {
    super.clear();
    this.tail = undefined;
  }

  getTail() {
    return this.tail;
  }
}
