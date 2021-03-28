import React from 'react';
import ProductTable from './pages/home.jsx'
// const Test = React.lazy(() => import('./pages/index'))
import Test from './pages/Test.jsx'
import { MyComponent } from './context';
// export const MyComponent = React.createContext('默认值');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: '',
      result: [],
      checked: false,
      title: 'hello world'
    };
    this.inputRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    
  }
  componentDidMount() {
    const arr = [
      {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
      {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
      {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
      {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
      {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
      {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
    ];
    this.setState({
      data: arr,
    })
    this.inputRef.current.focus();
  }
  handleChange(e) {
    if (!this.map) {
      let i = 0;
      this.map = new Map();
      this.state.data.forEach((item) => {
        if (!this.map.has(item.category)) {
          this.map.set(item.category, i++);
        }
      })
    }
    this.setState((state) => ({
      value: e.target.value,
      result: state.data.filter((item) => item.category.includes(e.target.value)).reduce((tol, cur, index, arr) => {
        const prop = this.map.get(cur.category);
        (tol[prop] || (tol[prop] = [])).push(cur);
        return tol;
      }, [])
    }))
  }
  handleCheckBox(e) {
    this.setState((state) => ({
      checked: e.target.value,
      result: state.result.map((item) => item.filter((a) => a.stocked === e.target.value))
    }))
    console.log(this.testRef)
    this.testRef.onClick();
  }
  render() {
    console.log(this.state.result)
    return (
      <>
        <input value={this.state.value} onChange={this.handleChange} ref={this.inputRef}/>
        <input type="checkbox" value={this.state.checked} onChange={this.handleCheckBox}/>Only show
        {
          this.state.result.map((item, index) => (
            <div key={index}>
              <p>{(item[0] || {}).category}</p>
            </div>
          ))
        }
        <React.Suspense fallback={<div>loading</div>}>
          <MyComponent.Provider value={this.state.title}>
            <Test ref={ele => this.testRef = ele}/>
          </MyComponent.Provider>
        </React.Suspense>
      </>
    );
  }
}
