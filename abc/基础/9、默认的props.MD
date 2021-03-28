# 9、默认的 `Props`

```js
// 方法一，组件内部书写
class Home extends React.Component {
  // 设置默认值
  static defaultProps = {
    language: 'ZH',
  }
}
```

```js
// 方法二，组件外部书写
class Home extends React.Component {}
// 设置默认值
Home.defaultProps = {
  language: 'ZH',
}
```

```js
// home.jsx
function Home(props) {
  return (
    <div>{props.value}</div>
  )
}
// 默认props
Home.defaultProps = {
  value: '函数式组件默认props'
}
Home.propTypes = {
  value: PropTypes.string
}
export default Home;
```