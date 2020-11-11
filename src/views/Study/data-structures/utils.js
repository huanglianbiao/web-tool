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

export { defaultEquals, Compare, defaultCompare, actualType, isInvalidValue, defaultToStr };
