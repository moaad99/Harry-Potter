import './App.css';
import Navbar from "./Component/Navbar"
import Home from './Component/Home'
import Charact from './Component/Charact'


import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
function App() {
  
  return (
    <div className="App">
    <Router>
      <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/charact' component={Charact} />

      </Switch>
    </Router>
       
    </div>
  );
}

export default App;
