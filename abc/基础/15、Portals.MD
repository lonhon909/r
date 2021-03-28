# 15、`React.Portals` -- 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点

```js
const modalContainer = document.querySelector('.modal-container');

class Modal extends React.Component {
  constructor(props) {
    super(prosp);
    this.el = document.createElement('div')
  }
  componentDidMount() {
    modalContainer.appendChild(this.el);
  }
  componentWillUnMount() {
    modalContainer.removeChild(this.el);
  }
  // Modal组件渲染之后真实DOM不会出现在父组件真实DOM树内部，而是会出现在容器（this.el）内，但是所有的事件触发与数据传递仍然遵守组件结构层级
  render() {
    return React.createPortal(
      this.props.children,
      this.el
    )
  }
}

```