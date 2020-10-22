import React from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import Home from './pages/home';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Browse from './pages/browse';

import { IsUserRedirect, ProtectedRoute } from './hoc/routes';
import { useAuthListener } from './hooks';

function App() {
  const { User } = useAuthListener();
  console.log(User);
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <IsUserRedirect user={User} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
            <SignIn />
          </IsUserRedirect>
          <IsUserRedirect user={User} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
            <SignUp />
          </IsUserRedirect>
          <ProtectedRoute user={User} path={ROUTES.BROWSE}>
            <Browse />
          </ProtectedRoute>
          <IsUserRedirect user={User} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
            <Home />
          </IsUserRedirect>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;