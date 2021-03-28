2、`useEffect`

> `Effect Hook` 可以让你在函数组件中执行副作用操作，相当于 `class`组件中的`componentDidMount`，`componentDidUpdate`，`componentWillUnMount`三个生命周期函数的集合

```js
// 如果你熟悉 React class 的生命周期函数，你可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。

import React, { useState, useEffect } from 'react';

export default function Home(props) {
  const [count, setCount] = useState(0);
  const [isOnline, setIsOnline] = useState(null);

  // 无需清除的 effect
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  })
  // 为什么要在 effect 中返回一个函数？ 这是 effect 可选的清除机制。每个 effect 都可以返回一个清除函数。如此可以将添加和移除订阅的逻辑放在一起。它们都属于 effect 的一部分。

  // React 何时清除 effect？ React 会在组件卸载的时候执行清除操作
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // React 何时清除 effect
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  return (
    <div>
      <p onClick={() => setCount(count + 1)}>{count}</p>
    </div>
  )
}
```

## `effect` 的条件执行

> 默认情况下，effect 会在每轮组件渲染完成后执行。这样的话，一旦 effect 的依赖发生变化，它就会被重新创建。

```js
useEffect(
  () => {
    // 默认情况下，组件会在componentDidMount/componentDidUpdate/componentWillUnMount都会重新订阅，但这样其实是没必要的，有损害性能的，这里可以使用第二个依赖参数，仅当依赖发生改变时会重新订阅
    const subscription = props.source.subscribe();
    return () => {
      subscription.unsubscribe();
    };
  },
  // 仅在依赖项改变时，才会重新订阅，如果想只允许执行一次的effect，这里只需要传入空数组：[]（仅在挂载与卸载执行）
  [props.source],
);
```