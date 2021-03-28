# 13、React.lazy 动态组件（代码分割）

## 1、`webpack`支持`import`语法

```js
// js
import('./math.js').then((math) => {
  math.add();
})
```

## 2、`React.lazy` 配合 `React.Suspense`

```js
// lazy需要配合Suspense一起使用
const Home = React.lazy(() => import('./pages/home'));

render() {
  return (
    {/* fallback 属性接受任何在组件加载过程中你想展示的 React 元素 */}
    <React.Suspense fallback={<div>Loading</div>}>
      <Home />
    </React.Suspense>
  )
}
```
