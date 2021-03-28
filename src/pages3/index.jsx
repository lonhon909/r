import { useEffect } from 'react'

export default (props) => {

  useEffect(() => {
    console.log(props)
  }, [])

  const handleClick = () => {
    props.history.push('/home')
  }

  return (
    <div onClick={handleClick}>index</div>
  )
}