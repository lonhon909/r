import { useEffect } from 'react';

export default (props) => {

  useEffect(() => {
    console.log(props)
  }, [])

  return (
    <div>b component</div>
  )
}