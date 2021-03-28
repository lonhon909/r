import React from 'react';

export default class TestState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 18
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      age: 100,
    }, () => {
      console.log(this.state)
    })
  }
  render() {

    return (
      <div>
        <div onClick={this.handleClick}>{this.state.age}</div>
      </div>
    )
  }
}
