/*
 * @name       命令模式
 * @定义        一个执行某些特定事情的的指令
 * @使用场景     有些时候需要向某些对象发送请求，但并不知道请求的接收者是谁，也不知道被请求的操作是什么，
 *              此时希望用一种松耦合的方式来设计程序，使得请发送者和请求者能消除彼此之间的耦合关系。
 *              （如：日常点外卖，顾客发出一个点餐命令，但顾客不需要知道厨师是谁，也不用知道厨师的炒菜
 *              步骤）
 * */
export default class Command {
  executed = []; // 已执行队列
  unExecute = []; // 未执行队列

  // 执行
  execute = cmd => {
    cmd.execute();
    this.executed.push(cmd);
  };

  // 撤销
  undo = () => {
    const cmd = this.executed.pop();
    if (cmd) {
      cmd.unExecute && cmd.unExecute();
      this.unExecute.push(cmd);
    }
  };

  // 恢复
  redo = () => {
    const cmd = this.unExecute.pop();
    if (cmd) {
      cmd.execute && cmd.execute();
      this.executed.push(cmd);
    }
  };
}

// 宏命令
class MarcoCommand {
  cmdList = [];

  add = cmd => {
    this.cmdList.push(cmd);
  };

  execute = () => {
    this.cmdList.forEach(cmd => {
      cmd.execute && cmd.execute();
    });
  };
}

export { MarcoCommand };
