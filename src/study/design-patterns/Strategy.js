/*
 * @name   策略模式
 * @定义    定义一系列的算法，把它们封装起来，并且使他们可以相互替换。
 *         也就是把一系列算法封装在策略类内部方法中，在对context发起请求时，context总是把请求委托给这些策略对象中的某一个进行。
 * */

/*
 * @场景1 公司的年终奖是根据员工的工资基数和年底绩效情况来发放的。
 * 例如，绩效为S的人年终奖有4倍工资，绩效为A的人年终奖有3倍工资，而绩效为B的人年终奖是2倍工资。
 * 假设财务部要求我们提供一段代码，来方便他们计算员工的年终奖
 * */

/* 实现方式 */
// a. 最直接的方式
const _calculatorBonus = function(performanceLevel, salary) {
  if (performanceLevel === "S") {
    return salary * 4;
  }
  if (performanceLevel === "A") {
    return salary * 3;
  }
  if (performanceLevel === "B") {
    return salary * 2;
  }
};

// b. 使用面向对象的策略模式进行重构
// 一个策略模式的程序至少要包含两个部分，第一个部分是一组策略类，封装一系列的算法，负责具体的计算过程；
// 另一个部分是, 环境类context, context接收请求后, 把请求委托给一个策略类.

// 策略类
const performanceS = function() {};
performanceS.prototype.calculator = function(salary) {
  return salary * 4;
};

const performanceA = function() {};
performanceA.prototype.calculator = function(salary) {
  return salary * 3;
};

const performanceB = function() {};
performanceB.prototype.calculator = function(salary) {
  return salary * 2;
};

// 奖金类
const Bonus = function() {
  this.salary = null; // 原始薪资
  this.strategy = null; // 对应的绩效策略
};

Bonus.prototype.setSalary = function(salary) {
  this.salary = salary;
};

Bonus.prototype.setStrategy = function(strategy) {
  this.strategy = strategy;
};

Bonus.prototype.getBonus = function() {
  return this.strategy.calculator(this.salary);
};
console.log(`***************************Strategy Start.************************************`);
const bonus = new Bonus();

bonus.setSalary(8000);
bonus.setStrategy(new performanceS());
console.log(bonus.getBonus());

bonus.setSalary(7000);
bonus.setStrategy(new performanceA());
console.log(bonus.getBonus());

// c. 使用js的方式实现
const strategy = {
  S: function(salary) {
    return salary * 4;
  },
  A: function(salary) {
    return salary * 3;
  },
  B: function(salary) {
    return salary * 2;
  }
};

const calculatorBonus = function(salary, level) {
  return strategy[level](salary);
};
console.log(calculatorBonus(5000, "S"));

console.log(`***************************Strategy End.**************************************`);
