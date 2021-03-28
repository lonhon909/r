import React from 'react';
import { useParams, useRouteMatch, Switch, Route } from 'react-router-dom';

import PropTypes from 'prop-types';
import IIID from './iiid'

function Time(props) {
  const params = useParams();
  const match = useRouteMatch();
  console.log('params', params)
  console.log('match', match)
  return (
    <Switch>
      <Route path={`${match.path}/:id`} component={IIID} />
      <Route path={`${match.path}`} component={IIID} />
    </Switch>
  )
}

Time.defaultProps = {
  value: '默认',
}

Time.propTypes = {
  value: PropTypes.string
}

export default Time;
