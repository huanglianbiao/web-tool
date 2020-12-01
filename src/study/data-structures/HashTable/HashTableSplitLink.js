/*
 * 分离链表法
 * */

import { defaultToStr, isInvalidValue, loseloseHashCode } from "../utils";
import LinkedList from "../LinkedList/LinkedList";
import { ValuePair } from "../models/table-models";

export default class HashTableSplitLink {
  constructor(toStrFn = defaultToStr) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  hashCode(key) {
    return loseloseHashCode(key, this.toStrFn) % 37;
  }

  put(key, value) {
    if (isInvalidValue(key) && isInvalidValue(value)) {
      return false;
    }
    const position = this.hashCode(key);

    if (isInvalidValue(this.table[position])) {
      this.table[position] = new LinkedList();
    }

    this.table[position].push(new ValuePair(key, value));
    return true;
  }

  get(key) {
    const position = this.hashCode(key);
    const linkedList = this.table[position];

    if (!linkedList || linkedList.isEmpty()) {
      return undefined;
    }

    let currNode = linkedList.getHead();
    while (currNode) {
      if (currNode.item.key === key) {
        return currNode.item.value;
      }
      currNode = currNode.next;
    }
  }

  remove(key) {
    const position = this.hashCode(key);
    const linkedList = this.table[position];

    if (!linkedList || linkedList.isEmpty()) {
      return false;
    }

    let currNode = linkedList.getHead();
    while (currNode) {
      if (currNode.item.key === key) {
        linkedList.remove(currNode.item);

        if (linkedList.isEmpty()) {
          delete this.table[position];
        }
        return true;
      }
      currNode = currNode.next;
    }
  }

  keyValues() {
    const linkedLists = Object.values(this.table);
    const list = [];
    linkedLists.forEach(linkedList => {
      let currNode = linkedList.getHead();
      while (currNode) {
        list.push(currNode.item);

        currNode = currNode.next;
      }
    });
    return list;
  }

  keys() {
    return this.keyValues().map(item => item.key);
  }

  values() {
    return this.keyValues().map(item => item.value);
  }

  size() {
    return this.keyValues().length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.table = {};
  }
}
