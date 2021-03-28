# 包含关系（类似Vue中的插槽概念）

```js
// 通过children将子组件传递到渲染结果中
function Home(props) {
  return (
    <div>
      {props.children}
    </div>
  )
}
// 单独一个“插槽”时，通过children传递，但是如果有多个“具名插槽”时，需要通过自定义属性传递
```

```js
// 多个“具名插槽”的情况
function Home(props) {
  return (
    <div>
      <div className="slide-left">{props.left}</div>
      <div className="slide-right">{props.right}</div>
    </div>
  )
}
// 父组件，LeftComponent/RightComponent为react或原生元素
render() {
  return (
    <div
      left={<LeftComponent/>}
      right={<RightComponent/>}>
      ...
    </div>
  )
}
```