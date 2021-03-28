import { Component } from 'react';

export default class AComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <div>a component</div>
    )
  }
}