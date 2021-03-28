# `hook` -- `useState`

> `useState`可以使函数式组件拥有`state`

```js
import React, { useState } from 'react';

export default function Home(props) {
  // 函数式组件拥有自己的状态state
  const [value, setValue] = useState(1);
  const add = () => setValue(vaue + 1);
  return (
    <button onClick={add}>{value}</button>
  )
}
```

## 惰性初始 `state`

```js
function Home(props) {
  // initialState 参数只会在组件的初始渲染中起作用，后续渲染时会被忽略。如果初始 state 需要通过复杂计算获得，则可以传入一个函数，在函数中计算并返回初始的 state，此函数只在初始渲染时被调用
  const [value, setValue] = useState(() => {
    // 假定复杂计算后得出数据
    return props.value;
  })
  return (
    <button onClick={() => setValue(value + 1)}>{value}</button>
  )
}
```

```js
// 计时器
function Home(props) {
  const [ value, setValue ] = useState(1);
  const onClick = () => {
    setTimeout(() => {
      // 如果 写成 setValue(value + 1)，当快速点击多下时，value只会增加 1，因为捕获的value都是初始值，这里写出函数式方法
      setValue((value) => value + 1)
    }, 1000)
  }
  return (
    <div onClick={onClick}>{value}</div>
  )
}
```