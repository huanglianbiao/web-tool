/*
 * 散列表
 * */

import { defaultToStr, loseloseHashCode, isInvalidValue, DJB2HashCode } from "../utils";
import { ValuePair } from "../models/table-models";

export default class HashTable {
  constructor(toStrFn = defaultToStr) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  hashCode(key) {
    // return loseloseHashCode(key, this.toStrFn) % 37;
    // 使用hash值对任意一个数取余的目的是，避免数值多大超过安全范围。
    // 但是，却会导致有可能余数相同的情况，造成hash冲突。

    // 解决hash碰撞
    return DJB2HashCode(key, this.toStrFn);
  }

  put(key, value) {
    if (isInvalidValue(key) && isInvalidValue(value)) {
      return false;
    }

    const position = this.hashCode(key);
    this.table[position] = new ValuePair(key, value);
    return true;
  }

  get(key) {
    return this.table[this.hashCode(key)];
  }

  remove(key) {
    const hash = this.hashCode(key);
    const valuePair = this.table[hash];

    if (!isInvalidValue(valuePair)) {
      delete this.table[hash];
      return true;
    }
    return false;
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
