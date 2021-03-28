# 14、`React.Context`类似`Vue中的provide与inject`

> 将数据传递的后代组件，避免在每个组件层级传递props

```js
// 父组件App.js
export const { Provider, Consumer } = React.createContext('默认值');
this.state = {
  title: 'hello world'
}
render() {
  return (
    <Provider value={this.state.title}>
      <Test />
    </Provider>
  )
}

// 孙组件
import { Consumer } from './App';
render() {
  return (
    <div>
      <Consumer>
        {/* 这里是一个接收context的函数 */}
        {
          (value) => (
            <p>{value}</p>
          )
        }
      </Consumer>
    </div>
  )
}
// 函数式组件一样用法
```

---

## 1、`Class.contextType` -- 简化 `Context`

> 挂载在 `class` 上的 `contextType` 属性会被重赋值为一个由 `React.createContext()` 创建的 `Context` 对象。这能让你使用 `this.context` 来消费最近 `Context` 上的那个值。你可以在任何生命周期中访问到它，包括 `render` 函数中

```js
// context.js
export const MyComponent = React.createContext('默认值');

// 父组件
import { MyComponent } from './context.js'
class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <MyComponent.Provider value={this.state.title}>
          <Child />
        </MyComponent.Provider>
      </div>
    )
  }
}
// 子组件
export default function Child(props) {
  return (
    <div>
      <Sun />
    </div>
  )
}

// 孙组件
import { MyComponent } from './context.js'
class Sun extends React.Component {
  
  // 写法一
  static contextType = MyComponent;

  componentDidMount() {
    // 也可以在各个生命周期函数中获取context
    console.log(this.context)
  }

  render() {
    // 直接在this上获取context
    <p>{this.context}</p>
  }
}
// 写法二
Sun.contextType = MyComponent;
```