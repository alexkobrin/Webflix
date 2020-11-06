import React from 'react';
import Home from './pages/home'
import Auth from './pages/auth'
import More from './pages/More'
import Origin from './pages/origin'
import './App.css';
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Route exact path="/" component={Home} ></Route>
      <Switch>
        <Route exact path="/auth" component={Auth} ></Route>
        <Route exact path="/find" component={More} />
        <Route exact path="/origin" component={Origin} />
      </Switch>
    </div>
  );
}

export default App;
