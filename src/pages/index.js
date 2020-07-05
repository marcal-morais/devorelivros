import Book from 'pages/Book';
import Home from 'pages/Home';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

function Pages() {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/book" component={Book} />
    </Switch>
  );
}

export default Pages;
