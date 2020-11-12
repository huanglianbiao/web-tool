/*
 * 栈（利用对象方式实现）
 * */

class Stack {
  constructor() {
    this.items = {};
    this.count = 0;
  }

  push(...item) {
    [...item].forEach(val => {
      this.items[this.count] = val;
      this.count++;
    });
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    this.count--;

    const last = this.items[this.count];
    delete this.items[this.count];
    return last;
  }
  // 栈顶元素
  peak() {
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.items = {};
    this.count = 0;
  }

  size() {
    return this.count;
  }
}

const stack = new Stack();
stack.push(1, 2);
stack.pop();
console.log(stack.peak());

console.log(stack.items, stack.size());
