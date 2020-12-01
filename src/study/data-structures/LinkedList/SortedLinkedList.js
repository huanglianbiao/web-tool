/*
 * 有序链表
 * */

import LinkedList from "./LinkedList";
import { defaultEquals, defaultCompare, Compare } from "../utils";

export default class SortedLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn);
    this.compareFn = compareFn;
  }

  push(item) {
    return this.insert(item);
  }

  insert(item, index = 0) {
    if (this.isEmpty()) {
      return super.insert(item, index);
    }

    const position = this.getIndexNextSortedItem(item);

    return super.insert(item, position);
  }

  getIndexNextSortedItem(item) {
    let currNode = this.head;
    let i = 0;

    for (; i < this.size(); i++) {
      const compare = this.compareFn(item, currNode.item);
      if (compare === Compare.LESS_THAN) {
        return i;
      }

      currNode = currNode.next;
    }
    return i;
  }
}
