# 17、样式与`style`

## 1、行内样式

```js

const styles = {
  color: 'red',
  // 小驼峰写法
  fontSize: '20px',
  // 行内样式不会自动补齐前缀，需手动补全
  transition: 'all',
  WebkitTransition: 'all',
  // 浏览器引擎前缀都应以大写字母开头，除了 ms
  msTransition: 'all',
}

render() {
  return (
    <p style={styles}></p>
  )
}
```

## 2、`css-in-js` -- 这个是插件的功能与react关系不大