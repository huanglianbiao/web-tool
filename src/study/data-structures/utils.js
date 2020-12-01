const defaultEquals = (a, b) => {
  return a === b;
};

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1
};

const defaultCompare = (a, b) => {
  if (a === b) {
    return 0;
  }

  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
};

const reverseCompare = (a, b) => {
  return defaultCompare(b, a);
};

const actualType = value => {
  return Object.prototype.toString.call(value).slice(8, -1);
};

const isInvalidValue = value => {
  return actualType(value) === "Null" || actualType(value) === "Undefined";
};

const defaultToStr = value => {
  if (isInvalidValue(value)) {
    return actualType(value).toUpperCase();
  }

  if (actualType(value) === "Object" || actualType(value) === "Array") {
    return JSON.stringify(value);
  }

  return value.toString();
};

const loseloseHashCode = (key, toStrFn) => {
  if (typeof key === "number") {
    return key;
  }

  const tableKey = toStrFn(key);
  let code = 0;
  for (let char of tableKey) {
    code += char.charCodeAt();
  }
  return code;
};

//  通过hash算法级别避免hash碰撞
const DJB2HashCode = (key, toStrFn) => {
  const tableKey = toStrFn(key);
  let hash = 5381; // 常常规使用5381

  for (let i = 0; i < tableKey.length; i++) {
    // hash * 33用作一个常量
    hash = hash * 33 + tableKey.charCodeAt(i);
  }
  // 对1013取余，表示认为散列表的大小为1000
  return hash % 1013;
};

const BalanceFactor = {
  UNBALANCED_RIGHT: Symbol("unbalance-right"),
  SLIGHTLY_UNBALANCED_RIGHT: Symbol("slightly-unbalanced_right"),
  BALANCED: Symbol("balanced"),
  SLIGHTLY_UNBALANCED_LEFT: Symbol("slightly-unbalanced-left"),
  UNBALANCED_LEFT: Symbol("unbalanced-left")
};

// 交换位置
const swap = (array, idx, idx2) => {
  [array[idx], array[idx2]] = [array[idx2], array[idx]];
};

export {
  Compare,
  BalanceFactor,
  defaultEquals,
  defaultCompare,
  reverseCompare,
  actualType,
  isInvalidValue,
  defaultToStr,
  loseloseHashCode,
  DJB2HashCode,
  swap
};
