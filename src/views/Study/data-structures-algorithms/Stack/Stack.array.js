class Stack {
  constructor() {
    this.items = [];
  }
  push(...item) {
    this.items.push(...item);
  }

  pop() {
    return this.items.pop();
  }
  // 栈顶元素
  peak() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }
}

const stack = new Stack();
stack.push(1, 2, 3);
stack.pop();
console.log(stack.items);
