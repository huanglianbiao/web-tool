import LinkedList from "./LinkedList";

export default class StackLinkedList {
  constructor() {
    this.linkedList = new LinkedList();
  }

  push(item) {
    return this.linkedList.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    const index = this.linkedList.size() - 1;
    return this.linkedList.removeByIndex(index);
  }
  // 栈顶元素
  peak() {
    const index = this.linkedList.size() - 1;
    return this.linkedList.getItemByIndex(index);
  }

  isEmpty() {
    return this.linkedList.isEmpty();
  }

  clear() {
    return this.linkedList.clear();
  }

  size() {
    return this.linkedList.size();
  }
}
