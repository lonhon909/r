# 11、`Refs` & `DOM`

> `refs`创建了一种方式，允许我们访问`DOM`节点或者`React`元素，`React`会在组件挂载时给`current`属性传入`DOM`元素，并在组件卸载时传入`null`，`ref`会在`componentDidMount`与`componentDidUpdate`生命周期钩子前更新

  + 管理焦点，文本选择或媒体播放
  + 触发强制动画
  + 集成第三方 DOM 库

## 1、`React` 16.3引入 `React.createRef()` API

```js
// 用React.createRef生成的ref存在current属性中
class Home extends React.Compnent {
  constructor(props) {
    spuer(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    // 访问ref，存在current属性中
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <input ref={this.inputRef} />
      </div>
    )
  }
}
```

## 2、回调`Refs`

```js
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.setChildRef = (ele) => this.childRef = ele;
  }
  componentDidMount() {
    // 回调写法不会有current属性
    this.childRef.focus();
  }
  render() {
    return (
      <div>
        <ChildComponent ref={this.setChildRef} />
      </div>
    )
  }
}
```

* 当`ref属性`用于`HTML`元素时，构造函数中使用`React.createRef()`创建`ref`接受`DOM`元素作为其`current`属性；使用`回调refs`可以自行定义。
* 当`ref属性`用于`自定义class组件`时，`ref对象`接收组件的挂载实例作为其`current`属性；`回调refs`自行定义
* `你不能在函数组件上使用 ref 属性，因为他们没有实例`，但是你可以在函数式组件内部使用ref

## 3、将 `DOM Refs` 暴露给父组件

  * React.forwardRef转发
  * 组件自定义属性传递方法