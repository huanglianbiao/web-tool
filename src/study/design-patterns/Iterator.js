/*
 * @name    迭代器模式
 * @定义     是指提供一种方法顺序访问一个聚合对象中的各个元素，而又不需要暴露该对象的内部表示
 * */
// 实现jquery中的迭代器

// a. 内部迭代器（内部已经定义好了迭代规则，它完全接手整个迭代过程，外部只需要一次初始调用）
const each = function(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback.call(arr[i], i, arr[i]);
  }
};

Array.prototype.myForEach = function(callback) {
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    callback.call(arr[i], arr[i], i);
  }
};

console.log(`***************************Iterator Start.************************************`);

const arr = ["a", "b", "c"];

each(arr, function(index, item) {
  console.log(index, item);
});

arr.myForEach(item => {
  console.log(`myForEach: ${item}`);
});

// b. 外部迭代器
const externalIterator = function(arr) {
  let index = 0;

  const next = function() {
    index += 1;
  };

  const getItem = function() {
    return arr[index];
  };

  const isDone = function() {
    return index >= arr.length;
  };

  return {
    next,
    getItem,
    isDone
  };
};

const iterator1 = externalIterator(arr);

while (!iterator1.isDone()) {
  console.log(iterator1.getItem());
  iterator1.next();
}

// 终止迭代
const myEach = function(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback.call(arr[i], i, arr[i]) === false) {
      break;
    }
  }
};
myEach(arr, function(index, item) {
  if (index > 1) {
    return false;
  }
  console.log("myEach: ", index, item);
});

// 实际场景中的应用。如：不同的浏览器使用的上传方式不同；
const webkitUpload = function() {
  //  具体略
};
const ieUpload = function() {};
const formUpload = function() {};

const iteratorUpload = function() {
  for (let i = 0; i < arguments.length; i++) {
    let fn = arguments[i]();
    if (fn) {
      return fn;
    }
  }
};
iteratorUpload(webkitUpload, ieUpload, formUpload);

console.log(`***************************Iterator Start.************************************`);
