import React, { useState, useEffect } from 'react';

export default function Hook1(props: any) {
  const [value, setValue] = useState(() => props.value);
  const add = () => setValue(value + 1);

  useEffect(() => {
    console.log(1);
  })

  return (
    <div onClick={add}>
      {value}
    </div>
  )
}