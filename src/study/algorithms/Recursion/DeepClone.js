import { actualType } from "../../data-structures/utils";

const deepClone = function(sourceObj) {
  const obj = actualType(sourceObj) === "Array" ? [] : {};

  const fn = (source, target) => {
    Object.entries(source).forEach(([key, value]) => {
      if (typeof value === "object") {
        target[key] = actualType(value) === "Array" ? [] : {};
        fn(value, target[key]);
      } else {
        target[key] = value;
      }
    });
  };

  fn(sourceObj, obj);

  return obj;
};

export default deepClone;

const obj1 = {
  num: 1,
  prop: {
    age: 10
  },
  func: function() {}
};

const obj2 = deepClone(obj1);
obj2.prop.age = 22;
console.log("deepClone: ", obj2, obj1);
