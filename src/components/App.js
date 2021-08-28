import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './app.css';

// Компоненты
import Main from './main/Main';

function App() {
  return (
    <Switch >
      <Route path='/main'>
        <Main />
      </Route>
    </Switch>
  );
}

export default App;
