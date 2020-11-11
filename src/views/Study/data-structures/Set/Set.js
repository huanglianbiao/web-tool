export default class Set {
  constructor(...args) {
    this.items = {};
    [...args].forEach(item => this.add(item));
  }

  has(item) {
    return Object.prototype.hasOwnProperty.call(this.items, item);
  }

  add(item) {
    if (!this.has(item)) {
      this.items[item] = item;
      return true;
    }
    return false;
  }

  delete(item) {
    if (this.has(item)) {
      delete this.items[item];
      return true;
    }
    return false;
  }

  clear() {
    this.items = {};
  }

  size() {
    return Object.values(this.items).length;
  }

  values() {
    return Object.values(this.items);
  }

  /*
   *  其他应用方法
   * */
  //  并集
  union(otherSet) {
    const unionSet = new Set();
    const values = [...this.values(), ...otherSet.values()];
    values.forEach(item => unionSet.add(item));
    return unionSet;
  }

  // 交集
  intersection(otherSet) {
    const intersectionSet = new Set();
    const values = this.values();
    values.forEach(item => {
      if (otherSet.has(item)) {
        intersectionSet.add(item);
      }
    });
    return intersectionSet;
  }

  // 差集：集合A与集合B的差集表示为：A-B。即，元素在A中但不在B中
  difference(otherSet) {
    const differenceSet = new Set();
    const values = this.values();
    values.forEach(item => {
      if (!otherSet.has(item)) {
        differenceSet.add(item);
      }
    });
    return differenceSet;
  }

  //  子集
  isSubset(parentSet) {
    if (this.size() > parentSet.size()) {
      return false;
    }
    const values = this.values();
    return values.every(item => parentSet.has(item));
  }
}
