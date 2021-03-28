# 3、`Link`、`NavLink` -- 声明式导航链接

### props

  + to [string|object|func] - 链接地址

    - 对象

      * pathname - 匹配路径

      * search - 查询参数

      * hash - hash

      * state - 存储到 `location` 中的额外状态数据

    - 函数

      * 返回string

      + 返回对象

  + replece [string] - 替换历史堆栈中的当前条目，而不是添加新条目

  + innerRef [func|obj] - 允许访问组件的底层引用

```js
import { BrowserRouter, Link, NavLink } from 'react-router-dom';

render() {
  return (
    <BrowserRouter>

      <Link to="/home">home</Link>

      <Link to={{
        pathname: '/list',
        search: '?a=1',
        hash: '#list',
        state: { wen: 'h' }
      }}>list</Link>

      <Link to={(location) => ({ ...location, pathname: '/index' })}>index</Link>

      <Link to={(location) => `${location.pathname}?sort=name`} replace>profile</Link>
    </BrowserRouter>
  )
}
// List.jsx
componentDidMount() {
  console.log(this.props.location.state); // {wen: "h"}
}
```

### NavLink prop

  + `activeClassName` [string] 当元素处于激活状态时应用的类, 默认 `active`

  + `activeStyle` [object] 当元素处于激活状态时应用的样式

  + `exact` [bool] 完全匹配时才应用激活类/样式

  + `strict` [bool] 如果为 true，则在确定位置是否与当前 URL 匹配时，将考虑位置的路径名后面的斜杠。

    ```html
    <NavLink strict to="/events/">Events</NavLink>
    ```

