import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

export default (props) => {
  const [count, setCount] = useState(1);
  const [ value, setValue ] = useState(1);
  const history = useHistory();
  // useEffect(() => {
  //   // 相当于类组件中的componentDidMount、componentDidUpdate、componentWillUmMount
  //   document.title = count;
  //   console.log('useEffect');
  //   const id = setInterval(() => {
  //     console.log('count', count)
  //   }, 2000);
  //   return () => {
  //     console.log('卸载啦')
  //     document.title = 'React App';
  //     clearInterval(id);
  //   }
  // }, [count])
  const handleClick = () => {
    history.push('/list')
    // console.log(history)
  }
  const add = () => {
    setTimeout(() => {
      setValue((value) => value + 1);
    }, 1000)
  }
  return (
    <>
      <div>{props.value}</div>
      <p className="add-count" onClick={() => setCount(count + 1)}>{count}</p>
      <div onClick={handleClick}>去list</div>
      <div onClick={add}>{value}</div>
    </>
  )
}