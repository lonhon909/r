# 3、useHistory -- 函数式组件获取router实例用于编程式导航

```js
import { useHistory } from 'react-router-dom';

export default () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/home')
  }
  return (
    <div onClick={handleClick}>跳转链接</div>
  )
}

```