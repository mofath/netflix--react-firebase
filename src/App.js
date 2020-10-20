import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import Home from './pages/home';
import SignIn from './pages/signin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={ROUTES.HOME}><Home /></Route>
          <Route exact path={ROUTES.SIGN_IN}><SignIn /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;