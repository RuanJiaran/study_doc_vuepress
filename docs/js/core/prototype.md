# 原型与原型链

## 构造函数

构造函数和普通函数本质上没什么区别，只不过使用了 new 关键字创建对象的函数，被叫做了构造函数。构造函数的首字母一般是大写，用以区分普通函数，当然不大写也不会有什么错误。

```js
function Person(name, age) {
  this.name = name
  this.age = age
  this.species = '人类'
  this.say = function () {
    console.log('Hello')
  }
}

let per1 = new Person('xiaoming', 20)
```

## 原型

> 在 JavaScript 中，万物皆对象，每个对象被创建出来都有其对应的一个原型，使对象共享原型的属性与方法。所以原型存在的意义就是解决属性与方法共享的问题，减少不必要的内存消耗

- 所有函数，都有一个 `prototype（显示原型）` 属性，`prototype` 指向函数的 `counstruct `方法
- 所有对象，除了（ null 和 undefined ），都有一个 `__proto__(隐式原型)` 属性
- 所有实例对象的`__proto__（隐式原型）` 属性指向它创建时的 `构造函数` 的 `prototype（显示原型）`

先看下所有类型实例对象的`__proto__`吧，网上都是只说 object 实例的 `__proto__`，但其实除了 `null` 和 `undefiend` 所有数据类型的实例都有 `__proto__` 属性，这也说明了 `JavaScript` 中的所有事物都是对象

```js
const str = 'str'
const n = 100
const b = true
const s = Symbol('symbol')
const bg = BigInt(10)
const arr = [1, 2, 3]
const obj = { name: 'obj' }
const func = new Person()
const date = new Date()
const reg = new RegExp('reg')

function Person() {}

console.log('str', str.__proto__)
console.log('n', n.__proto__)
console.log('b', b.__proto__)
console.log('s', s.__proto__)
console.log('bg', bg.__proto__)
console.log('arr', arr.__proto__)
console.log('obj', obj.__proto__)
console.log('func', func.__proto__)
console.log('date', date.__proto__)
console.log('reg', reg.__proto__)
```

![](/img/微信截图_20220426174433.png)

```js
const arr = [1, 2, 3]
arr.__proto__ === Array.prototype // true

const obj = { name: 'b' }
obj.__proto__ === Object.prototype // true
```

## 原型链

获取对象属性时，如果对象本身没有这个属性，那就会去他的原型 `__proto__`上去找，如果还查不到，就去找原型的原型，一直找到最顶层(`Object.prototype`)为止。`Object.prototype` 对象也有 `__proto__` 属性值为 `null`

当访问一个对象的某个属性时，会先在这个对象本身属性上查找。如果没有找到，则会去它的`__proto__(隐式原型)`上查找，即它创建时 `构造函数的 prototype`。如果还没有找到就会再去 `构造函数的 prototype 的 __proto__`中查找。这样一层一层向上查找，一直找到最顶层(`Object.prototype`)为止，`Object.prototype` 对象也有 `__proto__` 属性值为 `null`，就会形成一个链式结构，我们称为原型链。

#### 示例

```js
function Parent(month) {
  this.month = month
}

const child = new Parent('Ann')

console.log(child.month) // Ann
console.log(child.father) // undefined
```

**执行步骤：**

![](/img/20180620134143385.png)

**访问链路：**

![](/img/20180620155400807.png)

> 一直往上层查找，直到找到 null 还没有找到，则返回`undefined`
>
> `Object.prototype.__proto__ === null`
>
> 所有原型或更高级原型中、执行的方法，其中的 this 在执行时，指向当前这个触发事件执行的对象
