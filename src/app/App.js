import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Symbol from 'features/details/Symbol';
import Header from 'features/header/Header';
import Home from 'features/home/Home';
import './scss/styles.scss';

const App = () => (
  <BrowserRouter basename="/stock-screener">
    <Header />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/symbols/:symbol">
        <Symbol />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
