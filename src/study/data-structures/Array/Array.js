/*
 * 列表（数组）
 * */

// 1. 在数组结尾添加元素(相对于push())
Array.prototype.insert = function(value) {
  this[this.length] = value;
};

// 2. 在数组开头添加元素(相对于unshift())
Array.prototype.insertFirst = function(value) {
  for (let i = this.length; i > 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = value;
  return this;
};

var arr = [1, 2, 3];

arr.insert(4);
arr.insertFirst(111);

console.log(arr);
