# 1、`BrowserRouter`

### props

  + `basename` [string] - 所有位置的基准 URL。如果你的应用程序部署在服务器的子目录，则需要将其设置为子目录。basename 的正确格式是前面有一个前导斜杠，但不能有尾部斜杠
  
  + `getUserConfirmation` [fun] - 用于确认导航的函数，需配合`Prompt`组件一起使用

  + `forceRefresh` [boolean] - 如果为 true ，在导航的过程中整个页面将会刷新。


```js
import { BrowserRouter } from 'react-router-dom';

render() {
  return (
    <BrowserRouter
      basename="/calendar"
      getUserConfirmation={(message, callback) => {
        const num = window.prompt('确定要跑路嚒？');
        callback(num % 2 === 0);
      }}>
      <Router />
      <Router />
      <Router />
      <Router />
    </BrowserRouter>
  )
}
```