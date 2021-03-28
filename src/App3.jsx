import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import Index from './pages3/index';
import Home from './pages3/home';
import Test from './pages3/test';
import Circle  from './pages3/circle';

const routes = [
  { path: '/', value: '/' },
  { path: '/any', value: 'any' },
  { path: '/index', value: 'index' },
  { path: '/home', value: 'home' },
  { path: '/circle', value: 'circle' },
]

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1
    }
  }
  handleClick = () => {
    this.setState((state) => ({
      num: state.num++
    }))
  }

  render() {
    return (
      <div>
        <div>
          {
            routes.map((item) => (
              <React.Fragment key={item.path}>
                <Link to={item.path}>{item.value}</Link> &nbsp; &nbsp;
              </React.Fragment>
            ))
          }
          <button onClick={this.handleClick}>adddd</button>
          <Switch>
            <Route exact path="/" component={Test} />
            <Redirect from="/any" to="home" />
            <Route path="/index" component={Index} />
            <Route path="/home" component={Home} />
            <Route path="/circle">
              <Circle num={this.state.num}/>
            </Route>
          </Switch>
        </div>
      </div>
    )
  }
}