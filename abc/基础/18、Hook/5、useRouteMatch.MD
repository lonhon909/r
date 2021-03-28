# 5、`useRouteMatch`

> useRouteMatch钩子尝试以与`<Route>`相同的方式匹配当前URL。它主要用于在不实际渲染`<Route>`的情况下访问匹配数据

```js
// 不用useRouteMatch
export default function BlogPost() {
  return (
    <Route
      path="/blog/:slug"
      render={({ match }) => {
        // Do whatever you want with the match...
        return <div />;
      }}
    />
  );
}
// useRouteMatch
import { useRouteMatch } from "react-router-dom";

function BlogPost() {
  let match = useRouteMatch("/blog/:slug");

  // Do whatever you want with the match...
  return <div />;
}
```