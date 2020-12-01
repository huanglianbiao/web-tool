/*
 * 循环链表
 * */

import LinkedList from "./LinkedList";
import { defaultEquals } from "../utils";
import { Node } from "@study/data-structures/models/linked-list-models";

export default class CircularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
  }

  push(item) {
    const node = new Node(item);

    let currNode;
    if (!this.head) {
      this.head = node;
    } else {
      currNode = this.getNodeByIndex(this.size() - 1);
      currNode.next = node;
    }
    node.next = this.head; // 将next指向head

    this.count++;
  }

  insert(item, index) {
    if (index < 0 || index > this.count) {
      return false;
    }
    const node = new Node(item);

    if (index === 0) {
      const lastNode = this.head ? this.getNodeByIndex(this.size() - 1) : {};
      const currNode = this.head;

      this.head = node;
      node.next = currNode;
      lastNode.next = this.head;
    } else if (index === this.count) {
      const currNode = this.getNodeByIndex(this.size() - 1);
      currNode.next = node;
      node.next = this.head;
    } else {
      const prevNode = this.getNodeByIndex(index - 1);
      const currNode = prevNode.next;

      prevNode.next = node;
      node.next = currNode;
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
      const lastNode = this.head ? this.getNodeByIndex(this.size() - 1) : {};
      this.head = currNode.next;
      lastNode.next = this.head;
    } else if (index === this.size() - 1) {
      const prevNode = this.getNodeByIndex(index - 1);
      prevNode.next = this.head;
    } else {
      const prevNode = this.getNodeByIndex(index - 1);
      currNode = prevNode.next;
      prevNode.next = currNode.next;
    }
    this.count--;
    return currNode.item;
  }
}
