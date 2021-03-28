import { useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import { useParams, useRouteMatch } from 'react-router-dom';

export default (props) => {
  const params = useParams();
  const match = useRouteMatch('/detail');

  useEffect(() => {
    return () => {
      console.log('卸载啦')
    }
  }, [])

  return (
    <>
      {
        Array(5).fill(1).map((item, index) => (
          <div key={index}>
            <Link to={`/detail/${index}`}>{index}</Link>
            <br/>
          </div>
        ))
      }
      <div>{params.id}</div>
    </>
  )
}