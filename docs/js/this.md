## 总结

- 在浏览器里，在全局范围内 this 指向 window 对象；
- 在函数中，this 永远指向最后调用他的那个对象；
- 构造函数中，this 指向 new 出来的那个新的对象；
- call、apply、bind 中的 this 被强绑定在指定的那个对象上；
- 箭头函数中 this 比较特殊,箭头函数 this 为父作用域的 this，不是调用时的 this.要知道前四种方式,都是调用时确定,也就是动态的,而箭头函数的 this 指向是静态的
- 声明的时候就确定了下来；
- apply、call、bind 都是 js 给函数内置的一些 API，调用他们可以为函数指定 this 的执行,同时也可以传参。

![](./img/20200722213136284.png)

## 前言

在讲 this 之前，先得说说 环境 这个概念。一门语言在运行的时候，需要一个环境，叫做宿主环境。对于 JavaScript，宿主环境最常见的是 web 浏览器，另一个最为常见的就是 Node 了，同样作为宿主环境，node 也有自己的 JavaScript 引擎：V8（目前最快 JavaScript 引擎、Google 生产）

## this 的初衷

this 设计的初衷是在函数内部使用，用来指代当前的运行环境。为什么这么说呢？
JavaScript 中的对象的赋值行为是将地址赋给一个变量，引擎在读取变量的时候其实就是要了个地址然后再从原始地址中读取对象。而 JavaScript 允许函数体内部引用当前环境的其他变量，而这个变量是由运行环境提供的。由于函数又可以在不同的运行环境执行（如全局作用域内执行，对象内执行…），所以需要一个机制来表明代码到底在哪里执行！于是 this 出现了，它的设计目的就是在函数体内部，指代函数当前的运行环境

## 全局中的 this

在浏览器里，在全局范围内：

1. this 等价于 window 对象；
2. 用 var 声明一个变量和给 this 或者 window 添加属性是等价的；
3. 如果你在声明一个变量的时候没有使用 var 或者 let、const(es6),你就是在给全局的 this 添加或者改变属性值。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>

  <script>
    console.log(this === window) //true

    var name = 'Jake'
    console.log(this.name) // "Jake"
    console.log(window.name) // "Jake"

    age = 23
    function testThis() {
      age = 18
    }
    console.log(this.age) // 23
    testThis()
    console.log(this.age) // 18

    acolor = 'red'
    console.log(this)
  </script>
</html>
```

##### 结果如下

![](./img/微信截图_20220427112637.png)

> 总结起来就是：在全局范围内 this 是大哥大，它等价于 window 对象（即指向 window），如果你声明一些全局变量(不管在任何地方)，这些变量都会作为 this 的属性

## 函数中的 this

对于函数中的 this 的指向问题，有一句话很好用：运行时 this 永远指向最后调用它的那个对象

###### 示例 1

```js
var name = 'windowsName'
function sayName() {
  var name = 'Jake'
  console.log(this.name) // windowsName
  console.log(this) // Window
}
sayName()
console.log(this) // Window
```

我们看最后调用 sayName 的地方 sayName();，前面没有调用的对象那么就是全局对象 window，这就相当于是 window.sayName()。

!>需要注意的是，对于严格模式来说，默认绑定全局对象是不合法的，this 被置为 undefined。会报错 Uncaught TypeError: Cannot read property 'name' of undefined。

###### 示例 2

```js
function foo() {
  console.log(this.age)
}

const obj1 = {
  age: 23,
  foo: foo,
}

const obj2 = {
  age: 18,
  obj1: obj1,
}

obj2.obj1.foo() // 23
```

!>还是开头的那句话，最后调用 foo()的是 obj1，所以 this 指向 obj1，输出 23。

## 构造函数中的 this

所谓构造函数，就是通过这个函数生成一个新对象（object）。当一个函数作为构造器使用时(通过 new 关键字), 它的 this 值绑定到新创建的那个对象。如果没使用 new 关键字, 那么他就只是一个普通的函数, this 将指向 window 对象。

这又是另一个经典话题：new 的过程

```js
var a = new Foo("zhang","jake")

new Foo{
    var obj = {}
    obj.__proto__ = Foo.prototype
    var result = Foo.call(obj,"zhang","jake")
    return typeof result === 'obj'? result : obj
}
```

若执行 new Foo()，过程如下：
1） 创建新对象 obj；
2） 给新对象的内部属性赋值，构造原型链（将新对象的隐式原型指向其构造函数的显示原型）；
3） 执行函数 Foo，执行过程中内部 this 指向新创建的对象 obj（这里使用了 call 改变 this 指向）；
4） 如果 Foo 内部显式返回对象类型数据，则返回该数据，执行结束；否则返回新创建的对象 obj。

```js
var name = 'Jake'
function testThis() {
  this.name = 'jakezhang'
  this.sayName = function () {
    return this.name
  }
}
console.log(this.name) // Jake

new testThis()
console.log(this.name) // Jake

var result = new testThis()
console.log(result.name) // jakezhang
console.log(result.sayName()) // jakezhang

testThis()
console.log(this.name) // jakezhang
```

很显然，谁被 new 了，this 就指向谁

## class 中的 this

在 es6 中，类，是 JavaScript 应用程序中非常重要的一个部分。类通常包含一个 constructor ， this 可以指向任何新创建的对象。
不过在作为方法时，如果该方法作为普通函数被调用， this 也可以指向任何其他值。与方法一样，类也可能失去对接收器的跟踪

```js
class Hero {
  constructor(heroName) {
    this.heroName = heroName
  }
  dialogue() {
    console.log(`I am ${this.heroName}`)
  }
}
const batman = new Hero('Batman')
batman.dialogue()
```

构造函数里的 this 指向新创建的 类实例。当我们调用 batman.dialogue()时， dialogue()作为方法被调用， batman 是它的接收器。
但是如果我们将 dialogue()方法的引用存储起来，并稍后将其作为函数调用，我们会丢失该方法的接收器，此时 this 参数指向 undefined

```js
const say = batman.dialogue
say()
```

出现错误的原因是 JavaScript 类是隐式的运行在严格模式下的。我们是在没有任何自动绑定的情况下调用 say()函数的。要解决这个问题，我们需要手动使用 bind()将 dialogue()函数与 batman 绑定在一起

```js
const say = batman.dialogue.bind(batman)
say()
```

## call，apply 和 bind 中的 this

call，apply，bind 被称之为 this 的强绑定，用来改变函数执行时的 this 指向，目前所有关于它们的运用，都是基于这一点来进行的。

```js
var name = 'zjk'
function fun() {
  console.log(this.name)
}

var obj = {
  name: 'jake',
}
fun() // zjk
fun.call(obj) // Jake
```

上面的`fun.call(obj)`等价于`fun.apply(obj)`和`fun.bind(obj)()`

## 箭头函数中的 this

es5 中的 this 要看函数在什么地方调用（即要看运行时），通过谁是最后调用它该函数的对象来判断 this 指向。但 es6 的箭头函数中没有 this 绑定，必须通过查找作用域链来决定其值，如果箭头函数被非箭头函数包含，则 this 绑定的是最近一层非箭头函数的 this，否则，this 为 undefined。箭头函数的 this 始终指向函数定义时的 this，而非执行时

```js
let name = 'zjk'

let o = {
  name: 'Jake',
  sayName: function () {
    console.log(this.name)
  },
  func: function () {
    setTimeout(() => {
      this.sayName()
    }, 100)
  },
}
o.func() // Jake
```
