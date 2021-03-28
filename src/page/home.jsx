import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
    console.log(this.props.location.state)
  }
  render() {
    return (
      <div>home</div>
    )
  }
}