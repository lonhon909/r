# 2、`Prompt` - 导航之前给予用户一个确认信息，需配合`BrowserRouter`上的`getUserConfirmation`一起使用

### props

  + `when` [boolean] - 是否渲染`Prompt`组件

  + `message` [string|func]
  
    * [string] 当用户试图离开某个位置时弹出的提示信息；
    
    * [func] 将在用户试图导航到下一个位置时调用。需要返回一个字符串以向用户显示提示，或者返回 true 以允许直接跳转

```js
import { Prompt } from 'react-router-dom';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      full: false
    }
  }
  render() {
    return (
      <div>
        ...
        <Prompt
          when={this.state.full}
          message="你确定要离开当前页面吗？"
          message={(location) => {
            const isApp = location.pathname.startsWith('/app');
            return isApp ? `你确定要跳转到${location.pathname}吗？` : true;
          }} />
      </div>
    )
  }
}
```