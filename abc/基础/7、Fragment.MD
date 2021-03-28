# Fragment -- 允许组件返回多个元素

```js
import React, { Fragment } from 'react';
// td标签只有在table-tr中才有效果，因此此处不能通过一个div标签包裹后返回，react提供Fragment用于实现这种情况
function Home(props) {
  return (
    <Fragment key={props.key}>
      <td>Hello</td>
      <td>React</td>
    </Fragment>
  )
}
```

```js
// 短语法，如果Fragment不需要prop（通常是key），可以使用短语法
<>
  <td>Hello</td>
  <td>React</td>
</>
```