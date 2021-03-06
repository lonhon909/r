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
        <p style={{color:'red',fontSize:'20px'}}>????????????</p>
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
    //???????????????div?????????????????????
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
  // ????????????
  bool: PropTypes.bool,
  fn: PropTypes.func,
  obj: PropTypes.object,
  //  React ??????
  ele: PropTypes.element,
  // ??? JS ??? instanceof ??????????????? prop ???????????????
  message: PropTypes.instanceOf(Message),
  // ??? enum ????????? prop ????????????????????????
  enum: PropTypes.oneOf(['200', '404']),
  // ???????????????????????????????????????
  union: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message)
  ]),
  // ????????????????????????
  arrOf: PropTypes.arrayOf(PropTypes.string),
  // ??????????????????????????????
  objOf: PropTypes.objectOf(PropTypes.number),
  // ?????????????????? `isRequired` ?????? prop ????????????
  required: PropTypes.string.isRequired,
  // ????????????????????????
  requiredAny: PropTypes.any.isRequired,
  // ????????????????????????????????????????????????????????? Error ??????????????????????????? `console.warn` ??????????????????????????? `oneOfType` ????????????
  customProp: function(props, propName, componentName) {
    if (!/@/.test(props[propName])) {
      return new Error('Validation failed!');
    }
  }
}