import React from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import Home from './pages/home';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Browse from './pages/browse';

import { IsUserRedirect, ProtectedRoute } from './hoc/routes';


function App() {
  const user = null;
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
            <SignIn />
          </IsUserRedirect>
          <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
            <SignUp />
          </IsUserRedirect>
          <ProtectedRoute user={user} path={ROUTES.BROWSE}>
            <Browse />
          </ProtectedRoute>
          <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
            <Home />
          </IsUserRedirect>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;