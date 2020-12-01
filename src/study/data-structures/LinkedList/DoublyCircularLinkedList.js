/*
 * 双向循环链表
 * */

import DoublyLinkedList from "./DoublyLinkedList";
import { defaultEquals } from "../utils";
import { DoublyNode } from "@study/data-structures/models/linked-list-models";

export default class DoublyCircularLinkedList extends DoublyLinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
  }

  push(item) {
    const node = new DoublyNode(item);

    if (!this.head) {
      this.head = node;
    } else {
      const lastNode = this.tail;
      lastNode.next = node;
      node.prev = lastNode;

      node.next = this.head;
      this.head.prev = node;
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
        this.tail = node;
      } else {
        const currNode = this.head;
        currNode.prev = node;
        node.next = currNode;

        node.prev = this.tail;
        this.tail.next = node;
      }
      this.head = node;
    } else if (index === this.count) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;

      this.tail.next = this.head;
      this.head.prev = node;
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
        this.head.prev = this.tail;
        this.tail.next = this.head;
      }
    } else if (index === this.size() - 1) {
      currNode = this.tail;
      this.tail = currNode.prev;

      this.head.prev = this.tail;
      this.tail.next = this.head;
    } else {
      currNode = this.getNodeByIndex(index);
      const prevNode = currNode.prev;

      prevNode.next = currNode.next;
      currNode.next.prev = prevNode;
    }

    this.count--;
    return currNode.item;
  }
}
