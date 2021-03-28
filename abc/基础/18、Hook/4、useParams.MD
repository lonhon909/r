# 4、useParams -- 函数式组件获取route参数

```js
import { useParams } from 'react-router-dom'

export default () => {
  const params = useParams();
  return (
    // <Route path="/list/:id" component={}>
    <div>{params.id}</div>
  )
}

```