/*
 * @name     代理模式
 * */

// a. 虚拟代理实现图片预加载（虚拟代理：把一些开销较大的操作，延迟到使用的时候才创建）
const url = `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591272186937&di=292dbba229133a756f12dff3585621bf&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F68%2F61%2F300000839764127060614318218_950.jpg`;
const loadingURL =
  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591272454372&di=e39e91f2cea2fdb386dd0072356536b6&imgtype=0&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D1857154222%2C1797593736%26fm%3D214%26gp%3D0.jpg";

const myImage = (function() {
  const imgNode = document.createElement("img");
  imgNode.style.width = "750px";
  imgNode.style.height = "500px";

  document.body.appendChild(imgNode);

  return {
    setSrc: function(src) {
      imgNode.src = src;
    }
  };
})();

// myImage.setSrc(url);
const proxyImage = (function() {
  const image = new Image();
  image.onload = function() {
    myImage.setSrc(image.src);
  };
  return {
    setSrc: function(src) {
      myImage.setSrc(loadingURL);
      image.src = src;
    }
  };
})();

proxyImage.setSrc(url);
// 代理模式代理和本体应该保持接口一致性。假如未来不需要预加载了，用户可以直接请求本体。因为代理和本体都提供了setSrc方法；在调用者看来代理和本体是一致的。
console.log(`***************************Proxy Start.************************************`);
// b。虚拟代理合并http请求
const postRequest = function(ids) {
  console.log(`发送请求的id：${ids}`);
};

// 每次点击都会像服务端发送一次请求，花销较大。通过虚拟代理的方式改为将2s内的请求进行合并，然后发送一次请求；
const proxyPostRequest = (function() {
  let timer = null;
  let cache = [];

  return function(id) {
    cache.push(id);
    if (timer) {
      return;
    }

    timer = setTimeout(function() {
      postRequest(cache.join(","));
      clearTimeout(timer);
      timer = null;
      cache = [];
    }, 2000);
  };
})();

let id = 1;
document.getElementById("post").onclick = function() {
  // postRequest(id);
  proxyPostRequest(id);
  id++;
};

// c. 缓存代理（用于计算开销较大的场景，下次执行时，若入参相等，直接返回结果）

// eg。累乘
const mult = function() {
  let res = 1;

  for (let i = 0; i < arguments.length; i++) {
    res *= arguments[i];
  }
  return res;
};

// console.log(mult(1, 2, 3, 4));

const proxyMult = (function() {
  const cache = {};
  return function() {
    const args = Array.prototype.join.call(arguments, ",");
    if (cache[args]) {
      return cache[args];
    }

    return (cache[args] = mult.apply(this, arguments));
  };
})();
// console.log(proxyMult(1, 2, 3, 4));
// console.log(proxyMult(1, 2, 3, 4));   // 再次计算时，不再调用计算方法，直接返回结果

// 用高阶函数动态创建代理
// 增加另一种算法
const plus = function() {
  let res = 0;
  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }
  return res;
};

// 动态缓存代理
const cacheProxyFactory = function(fn) {
  const cache = {};
  return function() {
    const args = Array.prototype.join.call(arguments, ",");
    if (args in cache) {
      return cache[args];
    }

    return (cache[args] = fn.apply(this, arguments));
  };
};

const proxyMult2 = cacheProxyFactory(mult);
const proxyPlus = cacheProxyFactory(plus);

console.log(proxyMult2(1, 2, 3, 4, 5));
console.log(proxyMult2(1, 2, 3, 4, 5));
console.log(proxyPlus(1, 2, 3, 4, 5));
console.log(proxyPlus(1, 2, 3, 4, 5));

console.log(`***************************Proxy End.**************************************`);
