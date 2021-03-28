# `Switch` -- 路由匹配器

> 所有 `<Switch>` 的子元素都应该是 `<Route>` 或 `<Redirect>`。只有第一个匹配当前路径的子元素将被呈现

```js
render() {
  // <Route> 组件使用 path 属性进行匹配，而 <Redirect> 组件使用它们的 from 属性进行匹配。没有 path 属性的 <Route> 或者没有 from 属性的 <Redirect> 将始终与当前路径匹配
  return (
    <Switch>
      <Route exact path="/" component={Test} />
      <Redirect from="/any" to="home" />
      <Route path="/index" component={Index} />
      <Route path="/home" component={Home} />
    </Switch>
  )
}
```