import React from 'react';

export default React.memo((props) => {
  console.log('mome')
  return (
    <div>{props.value}</div>
  )
}, (prevProps, nextProps) => {
  console.log(nextProps, prevProps)
  return nextProps.value === prevProps.value;
})