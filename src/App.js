import React from 'react';
import Home from './pages/home'
import Auth from './pages/auth'
import More from './pages/More'

 import Origin from './pages/origin'
import './App.css';
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Route exact path="/" component={Home} ></Route>
        <Route   path="/auth" component={Auth} ></Route>
        <Route   path="/find" component={More} />
        <Route   path="/slider" component={Origin} />
    </div>
  );
}

export default App;
