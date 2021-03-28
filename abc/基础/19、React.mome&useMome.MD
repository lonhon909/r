# 19、`React.mome & useMome`

> `React.mome` 专门给函数式组件使用的高阶组件，类似 `React.PureComopnent`；默认情况下其只会对`props`复杂对象做浅层对比，如果你想要控制对比过程，那么请将自定义的比较函数通过第二个参数传入来实现

** <a href="http://www.ptbird.cn/react-hook-useMemo-purerender.html" style="color:red">查看React.mome 与 useMome</a>

```js
function MyComponent(props) {
  /* 使用 props 渲染 */
}
function areEqual(prevProps, nextProps) {
  /*
  如果把 nextProps 传入 render 方法的返回结果与
  将 prevProps 传入 render 方法的返回结果一致则返回 true，
  否则返回 false
  */
}
// 不传第二个参数，则使用默认的浅层对比
export default React.memo(MyComponent, areEqual);
```

```js
// 案例
// 父组件
export default () => {
  const [value, setValue] = useState(1);
  const [count, setCount] = useState(1);

  const handleValue = () => {
    setValue(value + 1);
  }
  const handleCount = () => {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={handleValue}>{value-{value}}</button>
      <button onClick={handleCount}>{count-{count}}</button>
      <Child value={value} count={count}/>
    </>
  )
}
// 子组件Child
export default React.mome((props) => {
  return (
    <div>{props.value}</div>
  )
}, (prevProps, nextProps) => {
  if (prevProps.value !== nextProps.value) {
    return false;
  }
  // 返回true表示依赖未改变，不会触发render
  return true;
})
```

```js
import { useMome } from 'react'
// useMome第二参数为依赖项
export default (props) => {
  console.log('这里父组件更新时，这里会触发')
  return useMome(() => {
    console.log('依赖项不变，这里就不会重新执行')
    return (
      <div>{props.number}</div>
    )
  }, [props.number])
}
```