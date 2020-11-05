class Deque {
  constructor() {
    this.lowestCount = 0;
    this.count = 0;
    this.items = {};
  }

  size() {
    return this.count - this.lowestCount;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.lowestCount = 0;
    this.count = 0;
    this.items = {};
  }

  // 前端入列
  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }

      this.count++;
      this.lowestCount = 0;
      this.items[0] = element;
    }
  }

  // 后端入列
  addBack(...element) {
    [...element].forEach(item => {
      this.items[this.count] = item;
      this.count++;
    });
  }

  removeFront() {
    const first = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;

    return first;
  }

  removeBack() {
    this.count--;
    const last = this.items[this.count];
    delete this.items[this.count];

    return last;
  }

  peakFront() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.lowestCount];
  }

  peakBack() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.count - 1];
  }
}

// 回文检测
function isPalindrome(str) {
  if (!str) {
    return false;
  }

  const deque = new Deque();
  const lowerStr = str.toString().toLowerCase();
  const strArr = lowerStr.split("") || [];

  strArr.forEach(item => deque.addBack(item));

  let firstStr, lastStr;

  while (deque.size() > 1) {
    firstStr = deque.removeFront();
    lastStr = deque.removeBack();

    if (firstStr !== lastStr) {
      return false;
    }
  }

  return true;
}

const str = true;
console.log(isPalindrome(str).toString());
