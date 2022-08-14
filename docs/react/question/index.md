# 基础问题

## [ 严格模式如何使用，有什么用处 ]

`StrictMode` 是一个用来突出显示应用程序中潜在问题的工具。与 `Fragment` 一样，`StrictMode` 不会渲染任何可见的 UI。它为其后代元素触发额外的检查和警告。 可以为应用程序的任何部分启用严格模式。例如：

```js
import React from 'react'
function ExampleApplication() {
  return (
    <div>
      <Header />
      <React.StrictMode>
        <div>
          <ComponentOne />
          <ComponentTwo />
        </div>
      </React.StrictMode>
      <Footer />
    </div>
  )
}
```

在上述的示例中，不会对 `Header` 和 `Footer` 组件运行严格模式检查。但是，`ComponentOne` 和 `ComponentTwo` 以及它们的所有后代元素都将进行检查。

`StrictMode` 目前有助于：

- 识别不安全的生命周期
- 关于使用过时字符串 ref API 的警告
- 关于使用废弃的 findDOMNode 方法的警告
- 检测意外的副作用
- 检测过时的 context API

## [ 遍历的方法有哪些 ]

- **遍历数组：map && forEach**

```JS
import React from 'react';

class App extends React.Component {
  render() {
    let arr = ['a', 'b', 'c', 'd'];
    return (
      <ul>
        {
          arr.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
    )
  }
}

class App extends React.Component {
  render() {
    let arr = ['a', 'b', 'c', 'd'];
    return (
      <ul>
        {
          arr.forEach((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
    )
  }
}
```

- **遍历对象：map && for in**

```JS
class App extends React.Component {
  render() {
    let obj = {
      a: 1,
      b: 2,
      c: 3
    }
    return (
      <ul>
        {
          (() => {
            let domArr = [];
            for(const key in obj) {
              if(obj.hasOwnProperty(key)) {
                const value = obj[key]
                domArr.push(<li key={key}>{value}</li>)
              }
            }
            return domArr;
          })()
        }
      </ul>
    )
  }
}

// Object.entries() 把对象转换成数组
class App extends React.Component {
  render() {
    let obj = {
      a: 1,
      b: 2,
      c: 3
    }
    return (
      <ul>
        {
          Object.entries(obj).map(([key, value], index) => {   // item是一个数组，把item解构，写法是[key, value]
            return <li key={key}>{value}</li>
          })
        }
      </ul>
    )
  }
}
```

## [ 页面重新加载时怎样保留数据 ]

## [ React 必须使用 JSX 吗 ]

React 并不强制要求使用 JSX。当不想在构建环境中配置有关 JSX 编译时，不在 React 中使用 JSX 会更加方便。

每个 JSX 元素只是调用 `React.createElement(component, props, ...children)` 的语法糖。因此，使用 JSX 可以完成的任何事情都可以通过纯 JavaScript 完成。

例如，用 JSX 编写的代码：

```JS
class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.toWhat}</div>;
  }
}
ReactDOM.render(
  <Hello toWhat="World" />,
  document.getElementById('root')
);
```

可以编写为不使用 JSX 的代码：

```JS
class Hello extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.toWhat}`);
  }
}
ReactDOM.render(
  React.createElement(Hello, {toWhat: 'World'}, null),
  document.getElementById('root')
);
```

## [ 为什么使用 jsx 的组件中没有看到使用 react 却需要引入 react ]

本质上来说 JSX 是 `React.createElement(component, props, ...children)`方法的语法糖。在 React 17 之前，如果使用了 JSX，其实就是在使用 React， `babel` 会把组件转换为 `CreateElement` 形式。在 React 17 之后，就不再需要引入，因为 `babel` 已经可以帮我们自动引入 react。

## [ 在 React 中怎么使用 async/await ]

async/await 是 ES7 标准中的新特性。如果是使用 React 官方的脚手架创建的项目，就可以直接使用。如果是在自己搭建的 webpack 配置的项目中使用，可能会遇到 **regeneratorRuntime is not defined** 的异常错误。那么我们就需要引入 babel，并在 babel 中配置使用 async/await。可以利用 babel 的 transform-async-to-module-method 插件来转换其成为浏览器支持的语法，虽然没有性能的提升，但对于代码编写体验要更好。

## [ React.Children.map 和 js 的 map 有什么区别 ]

JavaScript 中的 map 不会对为 null 或者 undefined 的数据进行处理，而 React.Children.map 中的 map 可以处理 React.Children 为 null 或者 undefined 的情况。

## [ React 中的高阶组件运用了什么设计模式 ]

使用了装饰模式，高阶组件的运用：

```js
function withWindowWidth(BaseComponent) {
  class DerivedClass extends React.Component {
    state = {
      windowWidth: window.innerWidth,
    }
    onResize = () => {
      this.setState({
        windowWidth: window.innerWidth,
      })
    }
    componentDidMount() {
      window.addEventListener('resize', this.onResize)
    }
    componentWillUnmount() {
      window.removeEventListener('resize', this.onResize)
    }
    render() {
      return <BaseComponent {...this.props} {...this.state} />
    }
  }
  return DerivedClass
}
const MyComponent = props => {
  return <div>Window width is: {props.windowWidth}</div>
}
export default withWindowWidth(MyComponent)
```

装饰模式的特点是不需要改变被装饰对象本身，而只是在外面套一个外壳接口。JavaScript 目前已经有了原生装饰器的提案，其用法如下：

```js
@testable
class MyTestableClass {}
```

## [ 类组件和函数组件有何不同 ]

**相同点**

- 组件名首字母必须大写
- 返回的组件只能有一个根元素
- 都不能修改 props

**不同点**

**类组件**

基于类的组件是 ES6 类，它扩展了 React 的 Component 类，并且至少实现了`render()`方法。类组件使用过程中，需要实例化，函数组件不需要。

```js
class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}
```

**函数组件（无状态组件）**

函数组件是无状态的，没有 this，没有生命周期，没有状态 state。相比与类组件更简单、性能更好。

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}
```

## [ React 中 keys 的作用是什么 ]

Keys 是 React 用于追踪哪些列表中元素被修改、被添加或者被移除的辅助标识。

在 React 中渲染集合时，向每个重复的元素添加关键字对于帮助 React 跟踪元素与数据之间的关联非常重要。key 应该是唯一 ID，最好是 UUID 或收集项中的其他唯一字符串：

```js
<ul>
  {todos.map(todo => (
    <li key={todo.id}>{todo.text}</li>
  ))}
  ;
</ul>
```

在集合中添加和删除项目时，不使用键或将索引用作键会导致奇怪的行为。

## [ 为什么调用 setState 而不是直接改变 state ]

如果您尝试直接改变组件的状态，React 将无法得知它需要重新渲染组件。通过使用`setState()`方法，React 可以更新组件的 UI。

另外，您还可以谈谈如何保证状态更新是同步的。如果需要基于另一个状态（或属性）更新组件的状态，请向`setState()`传递一个函数，该函数将 state 和 props 作为其两个参数：

```js
this.setState((state, props) => ({
  counter: state.counter + props.increment,
}))
```

## [ state 和 props 区别是啥 ]

- state 是组件自己管理数据，控制自己的状态，可变
- props 是外部传入的数据参数，不可变
- 没有 state 的叫做无状态组件，有 state 的叫做有状态组件
- 多用 props，少用 state，也就是多写无状态组件
