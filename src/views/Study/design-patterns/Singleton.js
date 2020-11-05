/*
 * @name      单例模式
 * @定义       保证一个类只有一个实例，并提供一个访问它的全局访问点
 * @使用场景
 *
 * */

/*
 * @惰性单例    只有在使用的时候才去创建实例
 * @例子        WebQQ登录弹出框，任何需要登录情况下都只会出现一个登录弹框
 * */

// a. 该方式虽然达到了单例的目的，但是在初始化的时候就已创建，不符合
const loginLayer = (function() {
  const div = document.createElement("div");
  div.innerText = "登出弹出框~";
  div.style.display = "none";
  document.body.appendChild(div);

  return div;
})();

// document.getElementById("loginBtn").onclick = function () {
//   loginLayer.style.display = "inline-block";
// }

// b. 该方式虽然满足了使用时再创建，但每次点击都会创建一个新的实例
const creatLoginLayer = function() {
  const div = document.createElement("div");
  div.innerText = "登出弹出框~";
  div.style.display = "none";
  document.body.appendChild(div);

  return div;
};

// document.getElementById("loginBtn").onclick = function () {
//   const div = creatLoginLayer();
//   div.style.display = "inline-block";
// }

// c. 结合a、b实现最终的惰性单例
const creatLoginLayer2 = (function() {
  let div;
  return function() {
    if (!div) {
      div = document.createElement("div");
      div.innerText = "登出弹出框~";
      div.style.display = "none";
      document.body.appendChild(div);
    }
    return div;
  };
})();
// document.getElementById("loginBtn").onclick = function () {
//   const div = creatLoginLayer2();
//   div.style.display = "inline-block";
// }

// d。 通用（可复用）单例。 c虽然实现了单例，但并不能复用，将c抽象化
const singleton = function(fn) {
  let result;
  return function() {
    return result || (result = fn.apply(this, arguments));
  };
};

// 最终结果
let creatLoginSingleLayer = singleton(creatLoginLayer);
document.getElementById("loginBtn").onclick = function() {
  const div = creatLoginSingleLayer();
  div.style.display = "inline-block";
};

export { singleton };
