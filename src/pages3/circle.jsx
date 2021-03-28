import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CirCle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    };
    this.btn = React.createRef();
  }
  static defaultProps = {
    age: 18
  }
  static propTypes = {
    age: PropTypes.number,
    num: PropTypes.number
  }
  // componentWillMount() {
  //   console.log('componentWillMount')
  // }
  add = () => {
    this.setState((state) => ({
      value: state.value + 1,
    }))
    console.log(this.btn.current)
  }
  render() {
    return (
      <div>
        <button onClick={this.add} ref={this.btn}>add</button>
      </div>
    )
  }
  componentDidMount() {
    console.log('componentDidMount')
  }

  // componentWillReceiveProps() {
  //   console.log('componentWillReceiveProps')
  // }
  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps')
    return null
  }
  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate')
    return null
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
}
