import React from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Home />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
