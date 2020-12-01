/*
 * @name  发布订阅模式
 * */

class PubSub {
  topics = {};

  // 订阅
  subscribe = (topic, fn) => {
    if (!(topic in this.topics)) {
      this.topics[topic] = [];
    }
    this.topics[topic].push(fn);
  };

  // 发布
  publish = (topic, ...args) => {
    if (!(topic in this.topics)) {
      return false;
    }

    this.topics[topic].forEach(fn => {
      fn(...args);
    });
  };

  // 取消订阅
  unsubscribe = (topic, fn = null) => {
    if (!(topic in this.topics)) {
      return false;
    }

    if (fn && typeof fn === "function") {
      this.topics[topic].forEach((item, index) => {
        if (item === fn) {
          this.topics[topic].splice(index, 1);
        }
      });
    } else {
      this.topics[topic].length = 0;
    }
  };
}

export default new PubSub();
