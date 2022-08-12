# 数据类型判断

## 总结

- 基本数据类型：Number，String，Boolean，Symbol，BigInt，undefined 用 `typeof` 检测

- 引用数据类型：Array，Object，Date，RegExp 用 `instanceof `检测
- 引用数据类型 Function 可以同时用 `typeof` 和 `instanceof` 检测

- null 用`===null` 检测

## typeof

```js
console.log(
  typeof 100, //"number"
  typeof 'abc', //"string"
  typeof false, //"boolean"
  typeof undefined, //"undefined"
  typeof Symbol('s'), //"symbol"
  typeof BigInt(100), //"bigInt"
  typeof function () {
    console.log('aaa')
  }, //"function"

  typeof null, //"object"
  typeof [1, 2, 3], //"object"
  typeof { a: 1, b: 2, c: 3 }, //"object"
  typeof new Date(), //"object"
  typeof /^[a-zA-Z]{5,20}$/, //"object"
  typeof new Error(), //"object"

  typeof new Number(100), //"object"
  typeof new String('abc'), //"object"
  typeof new Boolean(true) //"object"
)
```

> 基本数据类型中：Number，String，Boolean，undefined 以及引用数据类型中 Function ,可以使用 typeof 检测数据类型,分别返回对应的数据类型小写字符

!>用 typeof 检测构造函数创建的 Number，String，Boolean 都返回 object

!>基本数据类型中：null 。引用数据类型中的：Array，Object，Date，RegExp。不可以用 typeof 检测。都会返回小写的 object

## instanceof

instanceof 运算符需要指定一个构造函数，或者说指定一个特定的类型，它用来判断这个构造函数的原型是否在给定对象的原型链上

```js
console.log(
  100 instanceof Number, //false
  'dsfsf' instanceof String, //false
  false instanceof Boolean, //false

  undefined instanceof Object, //false
  null instanceof Object, //false

  [1, 2, 3] instanceof Array, //true
  { a: 1, b: 2, c: 3 } instanceof Object, //true
  function () {
    console.log('aaa')
  } instanceof Function, //true
  new Date() instanceof Date, //true
  /^[a-zA-Z]{5,20}$/ instanceof RegExp, //true
  new Error() instanceof Error //true
)
```

基本数据类型中：Number，String，Boolean。字面量值不可以用 instanceof 检测，但是构造函数创建的值可以，如下：

```js
console.log(
  new Number(100) instanceof Number, //true
  new String('dsfsf') instanceof String, //true
  new Boolean(false) instanceof Boolean //true
)
```

!>还需要注意 null 和 undefined 都返回了 false，这是因为它们的类型就是自己本身，并不是 Object 创建出来它们，所以返回了 false
