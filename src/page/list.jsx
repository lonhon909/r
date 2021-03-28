import { Component } from 'react';
import { Link, Prompt } from 'react-router-dom';

export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fill: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  formIsHalfFilledOut() {
    return this.state.fill;
  }
  handleClick() {
    this.setState((state) => ({
      fill: !state.fill,
    }))
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <p onClick={this.handleClick}>formIsHalfFilledOut--{this.state.fill + 0}</p>
        <ul>
          {
            [1,2,3,4,5,6].map((item) => <Link key={item} to={`/detail/${item}`}>{item}&nbsp;&nbsp;&nbsp;</Link>)
          }
        </ul>
        <Prompt
          when={this.state.fill}
          message={() => {
            const a = false;
            return a ? '11' : true;
          }}
        />
      </div>
    )
  }
}