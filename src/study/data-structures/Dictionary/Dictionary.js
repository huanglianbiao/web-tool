/*
 * 字典
 * */

import { defaultToStr, isInvalidValue } from "../utils";
import { ValuePair } from "../models/table-models";

export default class Dictionary {
  constructor(toStrFn = defaultToStr) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  hasKey(key) {
    const value = this.table[this.toStrFn(key)];
    return !isInvalidValue(value);
  }

  // 新增、或更新已有值
  set(key, value) {
    if (isInvalidValue(key) && isInvalidValue(value)) {
      return false;
    }

    const tableKey = this.toStrFn(key);
    this.table[tableKey] = new ValuePair(key, value);
    return true;
  }

  remove(key) {
    if (isInvalidValue(key)) {
      return false;
    }

    delete this.table[this.toStrFn(key)];
    return true;
  }

  get(key) {
    if (!this.hasKey(key)) {
      return undefined;
    }

    return this.table[this.toStrFn(key)].value;
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
