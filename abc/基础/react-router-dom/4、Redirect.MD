# 4、`Redirect` - 重定向

> 使用 `<Redirect />` 会导航到一个新的位置。新的位置将覆盖历史堆栈中的当前条目

```js
import { Redirect } from 'react-router-dom';
// to string
<Route to="/" render={() => (
  !isLogin ? <Redirect to="/login" /> : <Home />
)} />
// to object
<Route to="/" render={() => (
  !isLogin ? <Redirect to={{
    pathname: '/login',
    search: '?id=87221',
    state: { referrer: '' }
  }} /> : <Home />
)} />

<Route to="login" component={Login} />
```