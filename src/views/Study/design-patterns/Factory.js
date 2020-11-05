/*
 * @name    工厂模式
 * @定义     也称创建模式，
 * @使用场景   1. 处理大量具有相同属性的对象；2.
 * @分类      简单工厂模式、工厂方法模式、抽象工厂模式
 * */

`1. 简单工厂模式（静态工厂）常用于根据用户角色获取对应权限

简单工厂模式使用场景：
    正确传参，就可以获取所需要的对象，无需知道内部实现细节；
    内部逻辑（工厂函数）通过传入参数判断实例化还是使用哪些类；
    创建对象数量少（稳定），对象的创建逻辑不复杂；
`;
// a. ES5实现
function Role(options) {
  this.role = options.role;
  this.permission = options.permission;
}
Role.prototype.show = function() {
  return {
    role: this.role,
    permission: this.permission
  };
};
function simpleFactory(role) {
  switch (role) {
    case "admin": {
      return new Role({
        role: "管理员",
        permission: ["create", "commit", "pull", "push", "merge"]
      });
    }
    case "development": {
      return new Role({
        role: "开发者",
        permission: ["commit", "pull", "push"]
      });
    }
    default:
      throw new Error("参数只能为admin或development");
  }
}

simpleFactory("admin").show(); // { permission: (5) ["create", "commit", "pull", "push", "merge"], role: "管理员" }
simpleFactory("guest").show(); // 报错

// b. ES6实现
class SimpleFactory {
  constructor({ role, permission }) {
    this.role = role;
    this.permission = permission;
  }

  static create(role) {
    switch (role) {
      case "admin": {
        return new SimpleFactory({
          role: "管理员",
          permission: ["create", "commit", "pull", "push", "merge"]
        });
      }
      case "development": {
        return new SimpleFactory({
          role: "开发者",
          permission: ["commit", "pull", "push"]
        });
      }
      default:
        throw new Error("参数只能为admin或development");
    }
  }

  show() {
    return {
      role: this.role,
      permission: this.permission
    };
  }
}
SimpleFactory.create("development").show();

// c. ES6实现2
class Role2 {
  constructor({ role, permission }) {
    this.role = role;
    this.permission = permission;
  }

  show() {
    return {
      role: this.role,
      permission: this.permission
    };
  }
}
class RoleSimpleFactor {
  constructor(role) {
    if (typeof this[role] !== "function") {
      throw new Error("参数只能为admin或development");
    }
    return this[role]();
  }

  admin() {
    return new Role2({
      role: "管理员",
      permission: ["create", "commit", "pull", "push", "merge"]
    });
  }

  development() {
    return new Role2({
      role: "开发者",
      permission: ["commit", "pull", "push"]
    });
  }
}
new RoleSimpleFactor("admin").show();

`2. 工厂方法模式
    定义：把实际创建类的工作推迟到子类中创建，这样核心类就变成了抽象类
`;
class RoleFactoryBase {
  constructor({ role, permission }) {
    if (new.target === RoleFactoryBase) {
      throw new Error("抽象类不能实例化");
    }
    this.role = role;
    this.permission = permission;
  }
}

class RoleFactory extends RoleFactoryBase {
  constructor({ role, permission }) {
    super({ role, permission });
  }

  static create(role) {
    switch (role) {
      case "admin": {
        return new RoleFactory({
          role: "管理员",
          permission: ["create", "commit", "pull", "push", "merge"]
        });
      }
      case "development": {
        return new RoleFactory({
          role: "开发者",
          permission: ["commit", "pull", "push"]
        });
      }
    }
  }

  show() {
    return {
      role: this.role,
      permission: this.permission
    };
  }
}

const admin = RoleFactory.create("admin");
admin.show();
