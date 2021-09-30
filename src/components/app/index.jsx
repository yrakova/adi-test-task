import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../../pages/home';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/login" exact>
        Login Page
      </Route>
      <Route path="*">404 Page not found</Route>
    </Switch>
  </BrowserRouter>
);

export default App;
