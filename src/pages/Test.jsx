import React from 'react';
import PropTypes from 'prop-types';
import './test.scss';
// import { Consumer } from '../App';
import Asss from './AS';

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      count: [],
      inner: {__html: '<div>kkkk</div>'},
      select: 'c',
      defaultValue: 'B',
      checkbox: {
        a: false,
        b: false,
        c: true
      }
    };
    this.rootNode = React.createRef();
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.changeBox = this.changeBox.bind(this);
  }

  // static defaultProps = {
  //   age: '123',
  //   name: 'zhangsan'
  // }

  // componentWillMount() {
  //   console.log('componentWillMount');
  // }

  static getDerivedStateFromProps(nextProps, prevProps) {
    console.log('getDerivedStateFromProps')
    console.log(nextProps, prevProps)
    return null
  }

  // componentWillReceiveProps(nextProps, prevProps) {
  //   console.log('componentWillReceiveProps');
  //   return false;
  // }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate', arguments);
    return this.rootNode.current.scrollHeight;
  }
  onChange(e) {
    this.setState({
      select: e.target.value
    })
  }
  changeBox(e) {
    const box = this.state.checkbox;
    box[e.target.name] = e.target.checked;
    this.setState({
      checkbox: box
    })
  }

  render() {
    console.log('render')
    return (
      <>
        <div onClick={this.onClick}>{this.state.value}--{this.props.age}--{this.props.name}</div>
        <ul className="list" ref={this.rootNode}>
          {this.state.count.map((item) => (
            <li key={item.id}>{item.value}</li>
          ))}
        </ul>
        <select name="" id="" value={this.state.select} onChange={this.onChange}>
          <option value="a">a</option>
          <option value="b">b</option>
          <option value="c">c</option>
        </select>
        <select name="" id="" defaultValue={this.state.defaultValue}>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
        <p style={{color:'red',fontSize:'20px'}}>内联样式</p>
        <input name="a" type="checkbox" checked={this.state.checkbox.a} onChange={this.changeBox} value=""/>a
        <input name="b" type="checkbox" checked={this.state.checkbox.b} onChange={this.changeBox} value=""/>b
        <input name="c" type="checkbox" checked={this.state.checkbox.c} onChange={this.changeBox} value=""/>c
        <div dangerouslySetInnerHTML={this.state.inner}></div>
        <Asss />
      </>
    )
  }
  onClick() {
    this.setState((state) => ({
      value: state.value + 1,
      count: [{
        id: state.value + 1,
        value: state.value + 1
      }, ...state.count]
    }))
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  // componentWillUpdate() {
  //   console.log('componentWillUpdate')
  // }

  componentDidUpdate(perProps, prevState, perScrollHeight) {
    const curScrollTop= this.rootNode.current.scrollTop;
    if (curScrollTop < 5) return ;
    this.rootNode.current.scrollTop = curScrollTop + (this.rootNode.current.scrollHeight  - perScrollHeight);
    //加上增加的div高度，就相当于
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
}

class Message {
  constructor() {}
}

Test.defaultProps = {
  age: 123,
  name: 'zhangsan',
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

Test.propTypes = {
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