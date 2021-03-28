# 10、Props的校验

```js
// 引入校验
import PropTypes from 'prop-types';

class Home extends React.Component {
  // 写在组件内部或外部都可以
  static defaultProps = {
    name: '张涵',
    age: 18
  }
}
// 写在组件内部或外部都可以
Home.defaultProps = {
  name: '张涵',
  age: 18,
  arr: [],
  bool: false,
  fn: () => {},
  obj: {},
  ele: <div></div>,
  message: new Message(),
  enum: '200',
  union: 1,
  arrOf: ['a'],
  objOf: {
    b: 1
  },
  required: 's',
  requiredAny: '',
  customProp: 'sina@qq.com',
}
// 校验规则

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  arr: PropTypes.array,
  // 布尔类型
  bool: PropTypes.bool,
  fn: PropTypes.func,
  obj: PropTypes.object,
  //  React 元素
  ele: PropTypes.element,
  // 用 JS 的 instanceof 操作符声明 prop 为类的实例
  message: PropTypes.instanceOf(Message),
  // 用 enum 来限制 prop 只接受指定的值。
  enum: PropTypes.oneOf(['200', '404']),
  // 可以是多个对象类型中的一个
  union: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message)
  ]),
  // 指定数组元素类型
  arrOf: PropTypes.arrayOf(PropTypes.string),
  // 指定属性值类型的对象
  objOf: PropTypes.objectOf(PropTypes.number),
  // 任意类型加上 `isRequired` 来使 prop 不可空。
  required: PropTypes.string.isRequired,
  // 不可空的任意类型
  requiredAny: PropTypes.any.isRequired,
  // 自定义验证器。如果验证失败需要返回一个 Error 对象。不要直接使用 `console.warn` 或抛异常，因为这样 `oneOfType` 会失效。
  customProp: function(props, propName, componentName) {
    if (!/@/.test(props[propName])) {
      return new Error('Validation failed!');
    }
  }
}
```