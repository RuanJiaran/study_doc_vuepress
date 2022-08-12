# bind/call/apply

## 什么时候用

```js
const a = {
  b: function () {
    console.log(this.c) //hello
    var func = function () {
      console.log(this.c) //undefined
    }
    func()
  },
  c: 'hello',
}
a.b()
```

大家可以打印看下，这个就是因为**fun()这个函数执行**的时候他的函数上下文为 window，而 a.b()的这个函数的执行的时候函数上下文 this 为 a 对象是什么意思呢？

这里有关于 this 指向的问题的解析那么问题来了当我们希望 func() 他的输出的值就是为 hello 怎么办

方法一：常用方法

```js
const a = {
  b: function () {
    var _this = this // 通过赋值的方式将this赋值给that
    var func = function () {
      console.log(_this.c)
    }
    func()
  },
  c: 'hello',
}
a.b() // hello
console.log(a.c) // hello
```

方法二：绑定 this 的值发生改变

```js
// 使用bind方法一
var a = {
  b: function () {
    var func = function () {
      console.log(this.c)
    }.bind(this)
    func()
  },
  c: 'hello',
}
a.b() // hello
console.log(a.c) // hello
```

## 其它示例

##### 示例 1

```js
var name = '小王'
var age = 17
const obj = {
  name: '小张',
  objAge: this.age,
  myFun: function () {
    console.log(this.name + '年龄' + this.age)
  },
}

obj.objAge // 17
obj.myFun() // 小张年龄undefined
```

###### 示例 2

```js
var fav = '盲僧'
function show() {
  console.log(this.fav)
}

show() // 盲僧
```

比较一下这两者 `this` 的差别，第一个打印里面的 `this` 指向 `obj`，第二个全局声明的 `show()` 函数 `this` 是 `window`

## call/apply/bind 重定义 this 对象

```js
var name = '小王'
var age = 17
const obj = {
  name: '小张',
  objAge: this.age,
  myFun: function () {
    console.log(this.name + '年龄' + this.age)
  },
}
const db = {
  name: 'db',
  age: 88,
}

obj.myFun.call(db) //db年龄88
obj.myFun.apply(db) //db年龄88
obj.myFun.bind(db)() //db年龄88
```

以上除了 `bind` 方法后面多了个 `()` 外 ，结果返回都一致！由此得出结论，`bind` 返回的是一个新的函数，你必须调用它才会被执行。

## call/bind/apply 传参对比

```js
var name = '小王'
var age = 17
const obj = {
  name: '小张',
  objAge: this.age,
  myFun: function (fm, t) {
    console.log(this.name + '年龄' + this.age, '来自' + fm + '去往' + t)
  },
}
const db = {
  name: 'db',
  age: 88,
}

obj.myFun.call(db, '武汉', '深圳') //db年龄88 来自武汉去往深圳
obj.myFun.apply(db, ['武汉', '深圳']) //db年龄88 来自武汉去往深圳
obj.myFun.bind(db, '武汉', '深圳')() //db年龄88 来自武汉去往深圳
```

从上面结果可以看出:

- `call` 、`bind` 、 `apply` 这三个函数的第一个参数都是 this 的指向对象，第二个参数差别就来了

- `call` 的参数是直接放进去的，第二第三第 n 个参数全都用逗号分隔，直接放到后面 `obj.myFun.call(db,'成都', ... ,'string' )`

- `apply` 的所有参数都必须放在一个数组里面传进去 `obj.myFun.apply(db,['成都', ..., 'string' ])`

- `bind` 除了返回是函数以外，它 的参数和 `call` 一样

当然，三者的参数不限定是 string 类型，允许是各种类型，包括函数 、 object 等等！
