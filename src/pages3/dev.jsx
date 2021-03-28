import React from 'react';

export default class DevHome extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      value: 1
    }
  }
  // static getDerivedStateFromProps(nextProps) {
  //   console.log('nextProps', nextProps);
  //   return null;
  // }
  // shouldComponentUpdate() {
  //   return false;
  // }
  render() {
    console.log('render');
    return (
      <div>{this.state.value}</div>
    )
  }
}