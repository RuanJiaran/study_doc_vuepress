## 虚拟 DOM

虚拟 DOM，也就是虚拟节点。本质上是使用 js 对象来模拟真实 DOM 结构。

##### 虚拟 dom

```js
const vnode = {
  tag: 'div',
  props: {
    id: 'container',
  },
  children: [
    {
      tag: 'div',
      props: {
        class: 'content',
      },
      text: 'This is a container',
    },
  ],
}

//对应的真实DOM结构
;<div id="container">
  <div class="content">This is a container</div>
</div>
```

tag 用来描述标签，props 用来描述属性，children 用来表示嵌套的层级关系

## VUE 为什么引入虚拟 DOM

- 虚拟 DOM 能够通过比对后进行针对性更新，但不是唯一的方案。Vue.js 可以观察到状态的变化，并且绑定到视图，根本不需要比对。

- 事实上，在 Vue2.0 之前是这样实现的。但是这样做有一定代价，因为粒度太细，每绑定一个都会有一个对应的 watcher 来观察状态的变化，这样就会有一些内存开销以及一些依赖追踪的开销。对于大型项目来说，这个开销是非常大的。

- 所以，从 Vue2.0 开始，Vue 引入了虚拟 DOM。从一个节点生成一个 Watcher 实例变为一个组件生成一个 Watcher 实例。也就是说，即便一个组件内有 10 个节点使用了某个状态，但其实也只有一个 Watcher 在观察这个状态的变化。状态变化时，只能通知到组件，然后在组件内部通过虚拟 DOM 去比对与渲染。

## 使用虚拟 DOM 的意义

虚拟 DOM 的更新不会立即操作 DOM，而是会通过 diff 算法，找出需要更新的节点，按需更新，并将更新的内容保存为一个 js 对象，更新完成后再挂载到真实 dom 上，实现真实的 dom 更新。通过虚拟 DOM，解决了操作真实 DOM 的三个问题

- 减少了频繁操作 DOM 更新，造成性能问题
- 不断的修改真实的 DOM 会引发回流和重绘，大大降低了页面的渲染能力
- 开发体验

## 优点

- **跨平台**

  - 保存的是 js 对象，具备跨平台能力，一套代码多端运行。

- **性能好**

  - 无需频繁更新 DOM，减少回流与重绘，提高了性能。

- **简单方便**
  - 无需操作真实 DOM，表达力更强，数据更新更加方便。

## 不足

- 虚拟 DOM 同样也有缺点，首次渲染大量 DOM 时，由于多了一层虚拟 DOM 的计算，会比 innerHTML 插入慢。

## 虚拟 DOM 实现原理

主要分三部分

- 通过 js 建立与真实 DOM 节点对应的虚拟节点 vnode 节点描述对象
- 每次生成虚拟节点 vnode 都会缓存下来，diff 算法比较分析新旧两个虚拟 DOM 差异
- 将差异 patch 到真实 dom 上实现更新

![img](./img/format,png.png)