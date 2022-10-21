# 深浅拷贝

##### 浅拷贝

```js
const obj = { base: { name: 'Jack' } }

const obj2 = Object.assign({}, obj) // 浅拷贝

obj2.base.name = 'Tom'

console.log(obj.base.name, obj2.base.name) //Tom Tom
```

##### 深拷贝

```js
const obj = { base: { name: 'Jack' } }

const obj2 = JSON.parse(JSON.stringify(obj)) // 深拷贝

obj2.base.name = 'Tom'

console.log(obj.base.name, obj2.base.name) //Jack Tom
```

手写深拷贝函数（递归）

```js
/**
 * 深拷贝
 * @param {Object} obj 要拷贝的对象
 */
function deepClone(obj = {}) {
  if (typeof obj !== 'object' || obj == null) {
    // obj 是 null ，或者不是对象和数组，直接返回
    return obj
  }

  // 初始化返回结果
  let result
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }

  for (let key in obj) {
    // 保证 key 是原型的属性
    if (obj.hasOwnProperty(key)) {
      // 递归调用！！！
      result[key] = deepClone(obj[key])
    }
  }

  // 返回结果
  return result
}
```
