/*
 * 线性探查法——删除补位法
 * */

import { defaultToStr, loseloseHashCode, isInvalidValue } from "../utils";
import { ValuePair } from "../models/table-models";

export default class HashTableLinearProbing {
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

    let position = this.hashCode(key);
    const item = new ValuePair(key, value);

    if (!isInvalidValue(this.table[position])) {
      position += 1;
      while (!isInvalidValue(this.table[position])) {
        position++;
      }
    }

    this.table[position] = item;
    return true;
  }

  get(key) {
    let position = this.hashCode(key);
    let item = this.table[position];

    if (isInvalidValue(item)) {
      return undefined;
    }

    if (item.key === key) {
      return item.value;
    }

    position += 1;

    while (!isInvalidValue(this.table[position]) && this.table[position].key !== key) {
      position++;
    }

    if (!isInvalidValue(this.table[position]) && this.table[position].key === key) {
      return this.table[position].value;
    } else {
      return undefined;
    }
  }

  remove(key) {
    let position = this.hashCode(key);
    let item = this.table[position];

    if (isInvalidValue(item)) {
      return false;
    }

    if (item.key === key) {
      delete this.table[position];
      this.verifyRemoveSideEffect(key, position);
      return true;
    }

    position += 1;

    while (!isInvalidValue(this.table[position]) && this.table[position].key !== key) {
      position++;
    }

    if (!isInvalidValue(this.table[position]) && this.table[position]?.key === key) {
      delete this.table[position];
      this.verifyRemoveSideEffect(key, position);
      return true;
    } else {
      return false;
    }
  }

  // 处理删除位置后的元素位置
  verifyRemoveSideEffect(key, removedPosition) {
    const baseHash = this.hashCode(key);
    let position = removedPosition + 1;

    while (!isInvalidValue(this.table[position])) {
      let currHash = this.hashCode(this.table[position].key);

      if (currHash <= baseHash || currHash <= removedPosition) {
        this.table[removedPosition] = this.table[position];
        delete this.table[position];
        removedPosition = position;
      }
      position++;
    }
  }

  keyValues() {
    return Object.values(this.table);
  }

  keys() {
    return Object.values(this.table).map(item => item.key);
  }

  values() {
    return Object.values(this.table).map(item => item.value);
  }

  forEach(callback) {
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i++) {
      const res = callback(valuePairs[i].value, valuePairs[i].key);
      if (res === false) {
        break;
      }
    }
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
