import Container from 'pages/Container';
import Signin from 'pages/Signin';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Container} />
      <Route path="/login" component={Signin} />
    </Switch>
  );
}

export default Routes;
