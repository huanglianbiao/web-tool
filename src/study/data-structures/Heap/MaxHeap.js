/*
 * 最大堆
 * */
import MinHeap from "./MinHeap";
import { defaultCompare, reverseCompare } from "../utils";

export default class MaxHeap extends MinHeap {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = reverseCompare;
  }
}
