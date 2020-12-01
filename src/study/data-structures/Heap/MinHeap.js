/*
 * 最小堆
 * */

import { defaultCompare, isInvalidValue, swap, Compare } from "../utils";

export default class MinHeap {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.heap = [];
  }

  getLeftNodeIndex(index) {
    return index * 2 + 1;
  }

  getRightNodeIndex(index) {
    return index * 2 + 2;
  }

  getParentNodeIndex(index) {
    if (index === 0) {
      return undefined;
    }

    return Math.floor((index - 1) / 2);
  }

  insert(item) {
    if (isInvalidValue(item)) {
      return false;
    }

    this.heap.push(item);
    this.shiftUp(this.heap.length - 1);
    return true;
  }

  extract() {
    if (this.isEmpty()) {
      return undefined;
    }

    if (this.size() === 1) {
      return this.heap.shift();
    }

    const item = this.heap.shift();
    this.shiftDown(0);
    return item;
  }

  // 向上移动
  shiftUp(index) {
    let parentIndex = this.getParentNodeIndex(index);
    while (index > 0 && this.compareFn(this.heap[index], this.heap[parentIndex]) === Compare.LESS_THAN) {
      swap(this.heap, index, parentIndex);

      index = parentIndex;
      parentIndex = this.getParentNodeIndex(index);
    }
  }

  // 对heap执行shift后，使之结构满足MinHeap
  shiftDown(index) {
    let currIndex = index;
    const left = this.getLeftNodeIndex(currIndex);
    const right = this.getRightNodeIndex(currIndex);

    if (left < this.size() && this.compareFn(this.heap[currIndex], this.heap[left]) === Compare.BIGGER_THAN) {
      currIndex = left; // 若当前节点比左子节点大，则交换位置
    }

    if (right < this.size() && this.compareFn(this.heap[currIndex], this.heap[right]) === Compare.BIGGER_THAN) {
      currIndex = right;
    }

    if (currIndex !== index) {
      swap(this.heap, index, currIndex);
      this.shiftDown(currIndex);
    }
  }

  peak() {
    return this.isEmpty() ? undefined : this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }
}
