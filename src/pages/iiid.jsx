import { useParams, useRouteMatch } from 'react-router-dom';

export default (props) => {
  const params = useParams();
  const match = useRouteMatch();
  console.log(match)
  return (
    <div>{params.id}121231231231231</div>
  )
}