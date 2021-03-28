import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import Index from './page/index';
import Home from './page/home';
import List from './page/list';
import Profile from './page/profile';
import Detail from './page/detail'
import AComponent from './page/a';
import BComponent from './page/b';


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1,
    }
  }
  add = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }))
  }
  render() {
    const User = ({ match }) => {
      console.log('*')
      return <h1>Hello {match.params.username}!</h1>
    }
    return (
      <Router
        basename="/calendar"
        getUserConfirmation={(message, callback) => {
          console.log(message, callback);
          const allowTransition = window.prompt(message);
          callback(allowTransition % 2 === 0);
        }}>
        <p onClick={this.add}>{this.state.count}</p>
        <div>
          <NavLink exact strict to="/index/">index</NavLink>&nbsp;&nbsp;
          <NavLink to={{
            pathname: '/home',
            search: '?a=1',
            hash: '',
            state: { wen: 'h' }
          }}>home</NavLink>&nbsp;&nbsp;
          <NavLink to={(location) => ({ ...location, pathname: '/list' })}>list</NavLink>&nbsp;&nbsp;
          <NavLink to="/profile" replace>profile</NavLink>&nbsp;&nbsp;
        </div>
        <Link to="/detail/1">a</Link>&nbsp;&nbsp;
        <Link to="/detail/2">b</Link>&nbsp;&nbsp;
        <Route path="/index" exact component={Index} />
        <Route path="/home" component={Home} />
        <Route path="/list" component={List} />
        <Route path="/profile" render={() => (
          <Redirect to="/abc" />
        )} />
        <Route path="/abc" component={Profile}/>
        <Route path="/detail/:id" render={(props) => <User {...props}/>} />
        <Route path="/a" component={AComponent} />
        <Route path="/b" component={BComponent} />

        <Route path={['/bb', '/aa']} children={({ match }) => {
          if (match) {
            return <p>匹配到了</p>
          }
          return  <p>没匹配到</p>
        }} />
      </Router>
    )
  }
}