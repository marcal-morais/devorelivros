import Container from 'pages/Container';
import Signin from 'pages/Signin';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Routes = () => {
  const authUser = localStorage.getItem('access_id');
  return (
    <Switch>
      <Route path="/" component={authUser ? Container : Signin} />
    </Switch>
  );
};

export default Routes;
