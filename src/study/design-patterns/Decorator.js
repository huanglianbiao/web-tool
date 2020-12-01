/*
 * @name    装饰者模式
 * @定义
 * */

// 应用场景1（飞机大战游戏）
`
const Plane = function () {}
Plane.prototype.fire = function () {
  console.log('发射普通子弹~~');
}

// 增加两个更厉害的导弹和原子弹装饰类
const MissileDecorator = function (plane) {
  this.plane = plane;
}
MissileDecorator.prototype.fire = function () {
  this.plane.fire();
  console.log('发射导弹~~~');
}

const AtomDecorator = function (plane) {
  this.plane = plane;
}
AtomDecorator.prototype.fire = function () {
  this.plane.fire();
  console.log('发射原子弹~~~~~');
}
`;

// ES6
class Plane {
  fire() {
    console.log("发射普通子弹~~");
  }
}

class MissileDecorator {
  constructor(plane) {
    this.plane = plane;
  }
  fire() {
    this.plane.fire();
    console.log("发射导弹~~~");
  }
}

class AtomDecorator {
  constructor(plane) {
    this.plane = plane;
  }
  fire() {
    this.plane.fire();
    console.log("发射原子弹~~~~~");
  }
}

console.log(`***************************Decorator Start.**************************************`);
let plane = new Plane();
plane = new MissileDecorator(plane);
// plane = new AtomDecorator(plane)
plane.fire();

// 用AOP（面向切片编程）装饰函数
Function.prototype.before = function(beforeFn) {
  const self = this;

  return function() {
    beforeFn.apply(this, arguments);
    return self.apply(this, arguments);
  };
};

Function.prototype.after = function(afterFn) {
  const self = this;

  return function() {
    const res = self.apply(this, arguments);
    afterFn.apply(this, arguments);
    return res;
  };
};

function test() {
  console.log(1, arguments);
}

test
  .before(function() {
    console.log(0, arguments);
  })
  .after(function() {
    console.log(2, arguments);
  })("test");

console.log(`****************************Decorator End.****************************************`);
