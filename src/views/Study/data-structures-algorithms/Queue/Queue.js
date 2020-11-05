class Queue {
  constructor() {
    this.lowestCount = 0; // 第一个元素的index
    this.count = 0;
    this.items = {};
  }

  size() {
    return this.count - this.lowestCount;
  }

  isEmpty() {
    return this.size() === 0;
  }

  // 入列
  enqueue(...elements) {
    [...elements].forEach(item => {
      this.items[this.count] = item;
      this.count++;
    });
  }

  // 出列
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    const first = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;

    return first;
  }

  peak() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.lowestCount];
  }

  clear() {
    this.lowestCount = 0;
    this.count = 0;
    this.items = {};
  }
}

`击鼓传花游戏，游戏中，孩子们围成一个圈。鼓声响起时，把花尽快的传给下一个人；鼓声停止时，花在谁手中，谁就淘汰。不断重复，直至剩下一人`;

function playGame(list, num) {
  const queue = new Queue();
  const eliminatedList = []; // 淘汰列表

  list.forEach(item => {
    queue.enqueue(item);
  });

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }

    eliminatedList.push(queue.dequeue());
  }

  return {
    eliminated: eliminatedList,
    winner: queue.dequeue()
  };
}

const names = ["a", "b", "c", "e", "f"];
const result = playGame(names, 5);
console.log(result.eliminated, result.winner);
