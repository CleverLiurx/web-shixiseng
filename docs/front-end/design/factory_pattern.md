# 说说你对工厂模式的理解？应用场景？

## 一、是什么

工厂模式是用来创建对象的一种最常用的设计模式，不暴露创建对象的具体逻辑，而是将将逻辑封装在一个函数中，那么这个函数就可以被视为一个工厂

其就像工厂一样重复的产生类似的产品，工厂模式只需要我们传入正确的参数，就能生产类似的产品

举个例子：

- 编程中，在一个 A 类中通过 new 的方式实例化了类 B，那么 A 类和 B 类之间就存在关联（耦合）
- 后期因为需要修改了 B 类的代码和使用方式，比如构造函数中传入参数，那么 A 类也要跟着修改，一个类的依赖可能影响不大，但若有多个类依赖了 B 类，那么这个工作量将会相当的大，容易出现修改错误，也会产生很多的重复代码，这无疑是件非常痛苦的事；
- 这种情况下，就需要将创建实例的工作从调用方（A 类）中分离，与调用方**解耦**，也就是使用工厂方法创建实例的工作封装起来（**减少代码重复**），由工厂管理对象的创建逻辑，调用方不需要知道具体的创建过程，只管使用，**而降低调用者因为创建逻辑导致的错误**；

## 二、实现

工厂模式根据抽象程度的不同可以分为：

- 简单工厂模式（Simple Factory）
- 抽象工厂模式（Abstract Factory）

### 简单工厂模式

简单工厂模式也叫静态工厂模式，用一个工厂对象创建同一类对象类的实例

假设我们要开发一个公司岗位及其工作内容的录入信息，不同岗位的工作内容不一致

代码如下：

```js
function Factory(career) {
  function User(career, work) {
    this.career = career;
    this.work = work;
  }
  let work;
  switch (career) {
    case "coder":
      work = ["写代码", "修Bug"];
      return new User(career, work);
      break;
    case "hr":
      work = ["招聘", "员工信息管理"];
      return new User(career, work);
      break;
    case "driver":
      work = ["开车"];
      return new User(career, work);
      break;
    case "boss":
      work = ["喝茶", "开会", "审批文件"];
      return new User(career, work);
      break;
  }
}
let coder = new Factory("coder");
```

`Factory`就是一个简单工厂。当我们调用工厂函数时，只需要传递 name、age、career 就可以获取到包含用户工作内容的实例对象

### 抽象工厂模式

简单来说就是抽象工厂不干活，由具体工厂来干活！抽象方法除了用来约定通用能力之外，啥也不干。如果你尝试让它干点啥，它还会给你报错，提醒你“我不是让你拿去 new 一个实例的，我就是个定规矩的”。

> 上面提到的抽象方法是指声明但不能使用的方法。在其他传统面向对象的语言中常用 abstract 进行声明，但是在 JavaScript 中，abstract 是属于保留字，但是我们可以通过在类的方法中抛出错误来模拟抽象类。

假设我们创建一个手机,工厂里必须是既准备好了操作系统(OS)，也准备好了硬件(HardWare)，才能实现手机的`"量产"`

示例代码如下：

```js
class MobilePhoneFactory {
  // 提供操作系统的接口
  createOS() {
    throw new Error("抽象工厂方法不允许直接调用，你需要将我重写！");
  }
  // 提供硬件的接口
  createHardWare() {
    throw new Error("抽象工厂方法不允许直接调用，你需要将我重写！");
  }
}
// 具体工厂继承自抽象工厂
class FakeStarFactory extends MobilePhoneFactory {
  createOS() {
    // 提供安卓系统实例
    return new AndroidOS();
  }
  createHardWare() {
    // 提供高通硬件实例
    return new QualcommHardWare();
  }
}
// 定义具体操作系统的具体产品类
class AndroidOS {
  controlHardWare() {
    console.log("我是安卓操作系统");
    console.log("我会用安卓的方式去操作硬件");
  }
}
// 定义具体硬件的具体产品类
class QualcommHardWare {
  operateByOrder() {
    console.log("我是硬件系统");
    console.log("我会用高通的方式去运转");
  }
}

// 这是我的手机
const myPhone = new FakeStarFactory();
// 让它拥有操作系统
const myOS = myPhone.createOS();
// 让它拥有硬件
const myHardWare = myPhone.createHardWare();
// 启动操作系统
myOS.controlHardWare();
// 唤醒硬件
myHardWare.operateByOrder();
```

假如有一天，FakeStar 过气了，我们需要产出一款新机投入市场，这时候怎么办？我们是不是不需要对抽象工厂 MobilePhoneFactory 做任何修改，只需要拓展它的种类：

```js
class newStarFactory extends MobilePhoneFactory {
  createOS() {
    // 操作系统实现代码
  }
  createHardWare() {
    // 硬件实现代码
  }
}
```

## 三、应用场景

从上面可看到，简单简单工厂的优点就是我们只要传递正确的参数，就能获得所需的对象，而不需要关心其创建的具体细节

应用场景也容易识别，有构造函数的地方，就应该考虑简单工厂，但是如果函数构建函数太多与复杂，会导致工厂函数变得复杂，所以不适合复杂的情况

抽象工厂模式一般用于严格要求以面向对象思想进行开发的超大型项目中

综上，工厂模式适用场景如下：

- 如果你不想让某个子系统与较大的那个对象之间形成强耦合，而是想运行时从许多子系统中进行挑选的话，那么工厂模式是一个理想的选择
- 将 new 操作简单封装，遇到 new 的时候就应该考虑是否用工厂模式；
- 需要依赖具体环境创建不同实例，这些实例都有相同的行为,这时候我们可以使用工厂模式，简化实现的过程，同时也可以减少每种对象所需的代码量，有利于消除对象间的耦合，提供更大的灵活性

### 四、实际场景

曾经我们熟悉的 JQuery 的$()就是一个工厂函数，它根据传入参数的不同创建元素或者去寻找上下文中的元素，创建成相应的 jQuery 对象

```js
class jQuery {
  constructor(selector) {
    super(selector);
  }
  add() {}
  // 此处省略若干API
}

window.$ = function (selector) {
  return new jQuery(selector);
};
```

## 参考文献

- https://www.runoob.com/design-pattern/factory-pattern.html
- https://juejin.cn/post/6844903653774458888
- https://zhuanlan.zhihu.com/p/344119981
