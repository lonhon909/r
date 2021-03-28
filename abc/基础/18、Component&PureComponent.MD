# 18、`Component & PureComponent`

+ `Component` -- `React`组件基类

```js
class Home extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    console.log('父组件状态改变，子组件会重新触发render执行');
    return (
      <div>{this.state.value}</div>
    )
  }
}
```

+ `PureComponent` -- 内部已实现`shouldComponentUpdate`

  > `React.PureComponent` 与 `React.Component` 很相似。两者的区别在于 `React.Component` 并未实现 `shouldComponentUpdate()`，而 `React.PureComponent` 中以浅层对比 `prop` 和 `state` 的方式来实现了该函数