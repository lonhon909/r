# 列表与Key

### 1、通过使用{}在jsx内部建一个元素集合

```jsx
const arr = [
  <li>1</li>,
  <li>2</li>
];
// 将数组直接放入{}，不用拼接
ReactDOM.render(
  <ul>{arr}</ul>,
  document.querySelector('#root')
);
```