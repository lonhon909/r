import { useState } from 'react';
import DevHome from './dev.jsx';
import MOme from './mome';

export default (props) => {
  const [value, setValue] = useState(1);
  const [count, setCount] = useState(1);
  const handleClick = () => {
    setValue(value + 1);
  }
  const handleClick2 = () => {
    setCount(count + 1);
  }
  return (
    <>
      <MOme count={count} value={value}/>
      <DevHome />
      <div onClick={handleClick2}>count{count}</div>
      <div onClick={handleClick}>value{value}</div>
    </>
  )
}