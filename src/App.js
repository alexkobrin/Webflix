import Home from './pages/home'
import Auth from './pages/auth'
import './App.css';
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path="/" component={Home} >
          
        </Route>
      </Switch>
      <Switch>
        <Route  path="/auth" component={Auth} >
          
        </Route>
      </Switch>




    </div>
  );
}

export default App;
