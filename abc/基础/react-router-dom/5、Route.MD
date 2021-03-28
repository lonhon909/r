# 5、`Route` -- 路由匹配器

> 当 `path` 属性与某个 `location` 匹配时呈现一些 `UI`

### Route 渲染方式

  + `<Route component/>`

    > <a href="https://www.jianshu.com/p/a2a9b469a422">查看component与render区别</a>

    ```html
    <!-- 当你使用 component（而不是 render 或 children）时，Router 将根据指定的组件，使用 React.createElement 创建一个新的 React 元素。这意味着，如果你向 component 提供一个内联函数，那么每次渲染都会创建一个新组件。这将导致现有组件的卸载和新组件的安装，而不是仅仅更新现有组件，当使用内联函数进行内联渲染时，请使用 render 或 children -->
    <Route path="/a" component={AComponent} />

    ```
    ```js
    const User = ({ match }) => {
      <!-- 每次渲染都会创建一个新组件 -->
      return <h1>Hello {match.params.username}!</h1>
    }
    render() {
      return (
        <Route path="/del/:id" component={User}>
      )
    }
    ```
  + `<Route render>`

  + `<Route children>` - 不论 `path` 是否匹配位置，你都想渲染一些内容。在这种情况下，你可以使用 `children` 属性 

    ```html
    <Route path="/klskdls" children={({ match }) => {
      <!-- 路由与 URL 不匹配，不匹配时 match 为 null -->
      if (match) {
        return <p>匹配到了</p>
      }
      return  <p>没匹配到</p>
    }} />
    ```

### props

  + `path` [string|string[]]

    ```js
    render() {
      return (
        <Route path={["/users/:id", "/profile/:id"]}>
          <User />
        </Route>
      )
    }
    ```

  + `exact` [bool] - 完全匹配

  + `strict` [bool] - 严格匹配  