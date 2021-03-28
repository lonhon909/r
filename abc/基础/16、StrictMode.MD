# 16、`React.StrictMode` -- 严格模式

> `StrictMode` 是一个用来突出显示应用程序中潜在问题的工具，`StrictMode` 不会渲染任何可见的 UI。它为其后代元素触发额外的检查和警告 

```js
// 不会对 Header 和 Footer 组件运行严格模式检查。但是，ComponentOne 和 ComponentTwo 以及它们的所有后代元素都将进行检查
function Home(props) {
  return (
    <> 
      <Header />
      <React.StrictMode>
        <div>
          <ComponentOne />
          <ComponentTwo />
        </div>
      </React.StrictMode>
      <Footer />
    </>
  )
}
```

`StrictMode` 目前有助于

  * 识别不安全的生命周期
  * 使用过时的字符串ref PAI
  * 关于使用废弃的 findDOMNode 方法的警告
  * 检测意外的副作用
  * 检测过时的 context API